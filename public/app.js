const { jsPDF } = window.jspdf || {};

const agentSelect = document.getElementById('agent');
const agentDisplay = document.getElementById('agentDisplay');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const setTimeBtn = document.getElementById('setTimeBtn');
const occurrenceNumberInput = document.getElementById('occurrenceNumber');
const locationBtn = document.getElementById('getLocationBtn');
const locationInput = document.getElementById('location');
const locationError = document.getElementById('locationError');
const locationLoading = document.getElementById('locationLoading');
const locationBtnText = document.getElementById('locationBtnText');
const cpfInput = document.getElementById('infractorDoc');
const whatsappInput = document.getElementById('whatsapp');
const vehiclePlateInput = document.getElementById('vehiclePlate');
const vehicleNoPlateInput = document.getElementById('vehicleNoPlate');
const whatsappBtn = document.getElementById('sendWhatsAppBtn');
const addRecordBtn = document.getElementById('addRecordBtn');
const generatePdfBtn = document.getElementById('generatePdfBtn');
const generateFilteredPdfBtn = document.getElementById('generateFilteredPdfBtn');
const recordsList = document.getElementById('records-list');
const alertSuccess = document.getElementById('alertSuccess');
const alertError = document.getElementById('alertError');
const uploadPhotoBtn = document.getElementById('uploadPhoto');
const photosInput = document.getElementById('photosInput');
const photoPreviewContainer = document.getElementById('photoPreviewContainer');
const fullscreenCameraModal = document.getElementById('fullscreenCameraModal');
const fullscreenCameraPreview = document.getElementById('fullscreenCameraPreview');
const captureFullscreenBtn = document.getElementById('captureFullscreenBtn');
const cancelFullscreenCameraBtn = document.getElementById('cancelFullscreenCameraBtn');
const toggleFrontCameraBtn = document.getElementById('toggleFrontCameraBtn');
const cameraInfoOccurrence = document.getElementById('cameraInfoOccurrence');
const cameraInfoDateTime = document.getElementById('cameraInfoDateTime');
const cameraInfoCoordinates = document.getElementById('cameraInfoCoordinates');
const cameraInfoInstitution = document.getElementById('cameraInfoInstitution');
const cameraInfoAgent = document.getElementById('cameraInfoAgent');
const loginScreen = document.getElementById('loginScreen');
const appShell = document.getElementById('appShell');
const loginForm = document.getElementById('loginForm');
const loginInstitution = document.getElementById('loginInstitution');
const loginAgent = document.getElementById('loginAgent');
const loginAgentCustom = document.getElementById('loginAgentCustom');
const loginAgentLabel = document.getElementById('loginAgentLabel');
const loginPassword = document.getElementById('loginPassword');
const loginError = document.getElementById('loginError');
const loginBtn = document.getElementById('loginBtn');
const currentAgent = document.getElementById('currentAgent');
const institutionInput = document.getElementById('institution');
const institutionDisplay = document.getElementById('institutionDisplay');
const logoutBtn = document.getElementById('logoutBtn');
const views = document.querySelectorAll('.view');
const openFormBtn = document.getElementById('openFormBtn');
const backToDashboardBtn = document.getElementById('backToDashboardBtn');
const backToDashboardFromDetail = document.getElementById('backToDashboardFromDetail');
const statTotal = document.getElementById('statTotal');
const statDrivers = document.getElementById('statDrivers');
const statVehicles = document.getElementById('statVehicles');
const statDuplicates = document.getElementById('statDuplicates');
const statCurrentMonth = document.getElementById('statCurrentMonth');
const toggleAnalysisBtn = document.getElementById('toggleAnalysisBtn');
const analysisPanel = document.getElementById('analysisPanel');
const filterInstitution = document.getElementById('filterInstitution');
const filterAgent = document.getElementById('filterAgent');
const filterMonth = document.getElementById('filterMonth');
const filterYear = document.getElementById('filterYear');
const filterDateFrom = document.getElementById('filterDateFrom');
const filterDateTo = document.getElementById('filterDateTo');
const filterSearch = document.getElementById('filterSearch');
const filterDuplicates = document.getElementById('filterDuplicates');
const applyFiltersBtn = document.getElementById('applyFiltersBtn');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');
const toggleFiltersBtn = document.getElementById('toggleFiltersBtn');
const dashboardFiltersPanel = document.getElementById('dashboardFiltersPanel');
const byAgentList = document.getElementById('byAgentList');
const byMonthList = document.getElementById('byMonthList');
const duplicateDriversList = document.getElementById('duplicateDriversList');
const driversList = document.getElementById('driversList');
const recordDetailView = document.getElementById('recordDetailView');
const recordDetailHeader = document.getElementById('recordDetailHeader');
const recordDetailBody = document.getElementById('recordDetailBody');
const recordPdfLink = document.getElementById('recordPdfLink');
const recordPhotos = document.getElementById('recordPhotos');
const savingOverlay = document.getElementById('savingOverlay');
const actionUnavailableModal = document.getElementById('actionUnavailableModal');
const actionUnavailableMessage = document.getElementById('actionUnavailableMessage');
const actionUnavailableOkBtn = document.getElementById('actionUnavailableOkBtn');
const deleteConfirmModal = document.getElementById('deleteConfirmModal');
const deleteConfirmPassword = document.getElementById('deleteConfirmPassword');
const deletePasswordError = document.getElementById('deletePasswordError');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const photoModal = document.getElementById('photoModal');
const photoModalImage = document.getElementById('photoModalImage');
const photoModalClose = document.getElementById('photoModalClose');
const savingProgressBar = document.getElementById('savingProgressBar');
const savingProgressText = document.getElementById('savingProgressText');
const savingProgressMessage = document.getElementById('savingProgressMessage');

let allRecords = [];
let currentlyEditingIndex = -1;
let stream = null;
let photosData = [];
let pendingDeleteIndex = -1;
let cameraFacingMode = 'environment'; // 'environment' para traseira, 'user' para frontal
const usedOccurrenceNumbers = new Set();
const adminAgentName = 'RENAN ARAUJO E SILVA';
const noPlateLabel = 'VEÍCULO SEM PLACA';
const recurrenceWindowMs = 2 * 60 * 60 * 1000;
const institutions = {
  icmbio: 'Instituto Chico Mendes - ICMBio',
  semarh: 'Secretaria de Meio Ambiente e Recursos Hídridos do Estado do Piauí - SEMARH',
  pmpi: 'Polícia Militar do Estado do Piauí - PMPI',
  prefeitura: 'Prefeitura Municipal de Luís Correia',
};
const institutionPasswords = {
  semarh: 'semarh2026',
  pmpi: 'pmpi2026',
  prefeitura: 'prefeitura2026',
};
const icmbioAgents = [
  'ADRIANO RICARDO DAMATO ROCHA DE SOUZA',
  'ANTONIO ALVES PEREIRA FILHO',
  'ARTHUR TALVARA DOS SANTOS NASCIMENTO',
  'JANNAYRA FERREIRA SANTOS',
  'JOAO CARLOS CARVALHO AIRES',
  'JOÃO EDUARDO DOS SANTOS GALDINO',
  'LUIS CLAUDIONOR SILVA MOURA',
  'MARCOS MACIEL FERREIRA DA SILVA',
  'RENAN ARAUJO E SILVA',
  'CONTINGÊNCIA',
];

const scriptUrl = 'https://script.google.com/macros/s/AKfycbw9xovlmTNVycTNjDz8PIyKkEMVQZm40pb8NeBkgv3mwock9AAZh29ZnY03JksHfaFr9A/exec';
const firebaseConfig = {
  apiKey: 'AIzaSyAh3dTQ4EeibeakaiCE5fTUpDxplrJDFK4',
  authDomain: 'veiculosnapraianao.firebaseapp.com',
  projectId: 'veiculosnapraianao',
  storageBucket: 'veiculosnapraianao.appspot.com',
  messagingSenderId: '868609693685',
  appId: '1:868609693685:web:4b7feeccdeba623af6b2bc',
};

const storageKey = 'fiscalRecords';
const sessionKey = 'loggedAgent';
const sessionInstitutionKey = 'loggedInstitution';
const migrationKey = 'recordsMigratedToFirestore';
let db = null;
let storage = null;

document.addEventListener(
  'dblclick',
  (event) => {
    event.preventDefault();
  },
  { passive: false }
);

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const formatDateBr = (dateValue) => {
  if (!dateValue) return '';
  const [year, month, day] = dateValue.split('-');
  if (!year || !month || !day) return dateValue;
  return `${day}/${month}/${year}`;
};

const getFirstTwoNames = (name) => {
  const parts = (name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '';
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[1]}`;
};

const getCameraInfoLines = () => {
  const occurrenceValue = (occurrenceNumberInput?.value || '').trim();
  const dateValue = formatDateBr((dateInput?.value || '').trim());
  const timeValue = (timeInput?.value || '').trim();
  const locationValue = (locationInput?.value || '').trim();
  const institutionValue = (institutionInput?.value || institutionDisplay?.textContent || '').trim();
  const agentValue = (agentSelect?.value || agentDisplay?.textContent || '').trim();
  const dateTimeValue = dateValue && timeValue ? `${dateValue} - ${timeValue}` : dateValue || timeValue;
  const agentShort = getFirstTwoNames(agentValue);

  return [
    `Ocorrencia: ${occurrenceValue || '--'}`,
    dateTimeValue || '--',
    locationValue || '--',
    institutionValue || '--',
    agentShort || '--',
  ];
};

const updateFullscreenCameraInfo = () => {
  if (!cameraInfoOccurrence) return;
  const lines = getCameraInfoLines();
  cameraInfoOccurrence.textContent = lines[0];
  cameraInfoDateTime.textContent = lines[1];
  cameraInfoCoordinates.textContent = lines[2];
  cameraInfoInstitution.textContent = lines[3];
  cameraInfoAgent.textContent = lines[4];
};

const updateFullscreenCameraOrientation = () => {
  if (!fullscreenCameraModal) return;
  const angle = screen.orientation?.angle ?? window.orientation ?? 0;
  const isAngleLandscape = Math.abs(angle) === 90;
  const isViewportLandscape = window.innerWidth > window.innerHeight;
  const shouldForceLandscape = isAngleLandscape && !isViewportLandscape;

  fullscreenCameraModal.classList.toggle('force-landscape', shouldForceLandscape);
};

const drawCameraInfoOnCanvas = (context, canvasWidth, canvasHeight) => {
  const lines = getCameraInfoLines();
  const baseSize = Math.max(16, Math.round(Math.min(canvasWidth, canvasHeight) * 0.032));
  const lineHeight = Math.round(baseSize * 1.35);
  const padding = Math.round(baseSize * 0.9);

  context.save();
  context.font = `700 ${baseSize}px Inter, Arial, sans-serif`;
  context.fillStyle = '#ffffff';
  context.shadowColor = 'rgba(0, 0, 0, 0.6)';
  context.shadowBlur = Math.round(baseSize * 0.5);
  context.shadowOffsetY = Math.round(baseSize * 0.15);

  lines.forEach((line, index) => {
    const y = padding + baseSize + index * lineHeight;
    context.fillText(line, padding, y);
  });
  context.restore();
};

const withTimeout = (promise, timeoutMs, timeoutMessage) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(timeoutMessage || 'Tempo limite excedido.')), timeoutMs)
    ),
  ]);

const normalizeText = (text) =>
  (text || '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();

const normalizedNoPlateLabel = normalizeText(noPlateLabel);

const isNoPlateValue = (value) => normalizeText(value) === normalizedNoPlateLabel;

const syncVehiclePlateState = () => {
  if (!vehiclePlateInput || !vehicleNoPlateInput) return;
  const isNoPlate = vehicleNoPlateInput.checked;
  if (isNoPlate) {
    vehiclePlateInput.value = noPlateLabel;
    vehiclePlateInput.readOnly = true;
  } else {
    vehiclePlateInput.readOnly = false;
    if (isNoPlateValue(vehiclePlateInput.value)) {
      vehiclePlateInput.value = '';
    }
  }
};

const getLoggedAgentName = () => localStorage.getItem(sessionKey) || '';
const getLoggedInstitutionKey = () => localStorage.getItem(sessionInstitutionKey) || '';

const getInstitutionLabel = (institutionKey) => institutions[institutionKey] || '';

const getCurrentLoginAgent = () => {
  const selectedInstitution = loginInstitution?.value || '';
  if (selectedInstitution === 'icmbio') {
    return (loginAgent?.value || '').trim();
  }
  return (loginAgentCustom?.value || '').trim().toUpperCase();
};

const getExpectedPassword = (institutionKey, agentName) => {
  if (institutionKey === 'icmbio') {
    return getAgentPassword(agentName);
  }
  return institutionPasswords[institutionKey] || '';
};

const canManageRecord = (record) => {
  const logged = normalizeText(getLoggedAgentName());
  if (!logged) return false;
  if (logged === normalizeText(adminAgentName)) return true;
  return normalizeText(record.agent) === logged;
};

const getAgentPassword = (agentName) => {
  const firstName = normalizeText(agentName.split(' ')[0] || '');
  return `${firstName}2026`;
};

const getDriverKey = (record) => {
  const cpf = (record.infractorDoc || '').replace(/\D/g, '');
  if (cpf) return `cpf:${cpf}`;
  return `name:${normalizeText(record.infractorName)}`;
};

const getRecordTimestamp = (record) => {
  const dateValue = (record.date || '').trim();
  if (!dateValue) return null;
  const timeValue = (record.time || '00:00').trim() || '00:00';
  const parsed = new Date(`${dateValue}T${timeValue}`);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.getTime();
};

const hasValidRecurrence = (records) => {
  if (!records || records.length < 2) return false;

  const timestamps = records
    .map((record) => getRecordTimestamp(record))
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => a - b);

  if (timestamps.length >= 2) {
    for (let index = 1; index < timestamps.length; index += 1) {
      if (timestamps[index] - timestamps[index - 1] >= recurrenceWindowMs) {
        return true;
      }
    }
  }

  const distinctDates = new Set(records.map((record) => (record.date || '').trim()).filter(Boolean));
  if (distinctDates.size > 1) return true;

  return false;
};

const isFirebaseConfigured = () =>
  Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);

const initFirebase = () => {
  if (!window.firebase || !isFirebaseConfigured()) return;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  db = firebase.firestore();
  storage = firebase.storage();
};

const formatTime = (date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const generateUniqueOccurrenceNumber = () => {
  let randomNum;
  do {
    randomNum = Math.floor(100000 + Math.random() * 900000);
  } while (usedOccurrenceNumbers.has(randomNum));
  usedOccurrenceNumbers.add(randomNum);
  return randomNum.toString();
};

const updateAgentName = () => {
  agentDisplay.textContent = agentSelect.value || '[Nome do Agente]';
};

const setSavingState = (isSaving) => {
  if (!savingOverlay) return;
  savingOverlay.classList.toggle('hidden', !isSaving);
  savingOverlay.setAttribute('aria-busy', isSaving ? 'true' : 'false');
  if (isSaving) {
    setSavingProgress(5, 'Preparando informacoes...');
  } else {
    setSavingProgress(0, '');
  }
};

const setSavingProgress = (percent, message) => {
  if (!savingProgressBar || !savingProgressText || !savingProgressMessage) return;
  const clamped = Math.max(0, Math.min(100, Number(percent) || 0));
  savingProgressBar.style.width = `${clamped}%`;
  savingProgressText.textContent = `${Math.round(clamped)}%`;
  if (message !== undefined) {
    savingProgressMessage.textContent = message || '';
  }
};

const updateLoginAgentMode = () => {
  if (!loginInstitution || !loginAgent || !loginAgentCustom || !loginAgentLabel) return;
  const selectedInstitution = loginInstitution.value;
  const isIcmbio = selectedInstitution === 'icmbio';

  loginAgent.classList.toggle('hidden', !isIcmbio);
  loginAgentCustom.classList.toggle('hidden', isIcmbio);
  loginAgent.required = isIcmbio;
  loginAgentCustom.required = Boolean(selectedInstitution) && !isIcmbio;
  loginAgentLabel.textContent = isIcmbio ? 'Nome do Agente' : 'Agente';

  if (isIcmbio) {
    loginAgentCustom.value = '';
  } else {
    loginAgent.value = '';
  }
};

const populateLoginAgents = () => {
  if (!loginAgent) return;
  loginAgent.innerHTML = '<option value="">Selecione um agente</option>';
  icmbioAgents.forEach((agentName) => {
    const loginOption = document.createElement('option');
    loginOption.value = agentName;
    loginOption.textContent = agentName;
    loginAgent.appendChild(loginOption);
  });
};

const populateFilterAgents = () => {
  if (!filterAgent) return;
  filterAgent.innerHTML = '<option value="">Todos</option>';
  const agents = Array.from(
    new Set(allRecords.map((record) => (record.agent || '').trim()).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  agents.forEach((agentName) => {
    const option = document.createElement('option');
    option.value = agentName;
    option.textContent = agentName;
    filterAgent.appendChild(option);
  });
};

const populateInstitutionFilter = () => {
  if (!filterInstitution) return;
  const selectedInstitution = filterInstitution.value;
  filterInstitution.innerHTML = '<option value="">Todos</option>';

  const institutionOptions = Array.from(
    new Set([
      ...Object.values(institutions),
      ...allRecords.map((record) => (record.institution || '').trim()).filter(Boolean),
    ])
  ).sort((a, b) => a.localeCompare(b, 'pt-BR'));

  institutionOptions.forEach((institutionName) => {
    const option = document.createElement('option');
    option.value = institutionName;
    option.textContent = institutionName;
    filterInstitution.appendChild(option);
  });

  if (selectedInstitution) {
    filterInstitution.value = selectedInstitution;
  }
};

const populateMonthYearFilters = () => {
  if (!filterMonth || !filterYear) return;
  const selectedMonth = filterMonth.value;
  const selectedYear = filterYear.value;
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  filterMonth.innerHTML = '<option value="">Todos</option>';
  months.forEach((label, index) => {
    const option = document.createElement('option');
    option.value = String(index + 1).padStart(2, '0');
    option.textContent = label;
    filterMonth.appendChild(option);
  });

  const years = Array.from(
    new Set(allRecords.map((record) => (record.date || '').slice(0, 4)).filter(Boolean))
  ).sort();
  const currentYear = String(new Date().getFullYear());
  if (!years.includes(currentYear)) years.push(currentYear);
  filterYear.innerHTML = '<option value="">Todos</option>';
  years
    .sort()
    .forEach((year) => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      filterYear.appendChild(option);
    });
  if (selectedMonth) filterMonth.value = selectedMonth;
  if (selectedYear) filterYear.value = selectedYear;
};

const setLoggedUser = (agentName, institutionKey) => {
  localStorage.setItem(sessionKey, agentName);
  localStorage.setItem(sessionInstitutionKey, institutionKey);
  loginScreen.classList.add('hidden');
  appShell.classList.remove('hidden');
  const institutionLabel = getInstitutionLabel(institutionKey);
  currentAgent.textContent = `${institutionLabel} • Agente: ${agentName}`;
  if (institutionInput) institutionInput.value = institutionLabel;
  if (institutionDisplay) institutionDisplay.textContent = institutionLabel || '[Instituição]';
  agentSelect.value = agentName;
  agentSelect.readOnly = true;
  updateAgentName();
};

const clearSession = () => {
  localStorage.removeItem(sessionKey);
  localStorage.removeItem(sessionInstitutionKey);
  loginScreen.classList.remove('hidden');
  appShell.classList.add('hidden');
  loginPassword.value = '';
  loginInstitution.value = '';
  loginAgent.value = '';
  if (loginAgentCustom) loginAgentCustom.value = '';
  if (institutionInput) institutionInput.value = '';
  if (institutionDisplay) institutionDisplay.textContent = '[Instituição]';
  currentAgent.textContent = 'Agente: --';
  agentSelect.value = '';
  agentSelect.readOnly = false;
  updateLoginAgentMode();
  updateAgentName();
};

const showView = (viewId) => {
  views.forEach((view) => {
    view.classList.toggle('hidden', view.id !== viewId);
  });
  if (viewId === 'dashboardView') {
    updateRecordsList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const handleLogin = () => {
  const selectedInstitution = loginInstitution.value;
  const selectedAgent = getCurrentLoginAgent();
  const password = loginPassword.value.trim();
  loginError.style.display = 'none';
  if (!selectedInstitution || !selectedAgent || !password) {
    showAlert(loginError, 'Selecione a instituição, informe o agente e digite a senha.');
    return false;
  }
  const expectedPassword = getExpectedPassword(selectedInstitution, selectedAgent);
  if (password !== expectedPassword) {
    if (selectedInstitution === 'icmbio') {
      showAlert(loginError, 'Senha incorreta. Use o padrão primeiro nome + 2026.');
    } else {
      showAlert(loginError, 'Senha incorreta para a instituição selecionada.');
    }
    return false;
  }
  setLoggedUser(selectedAgent, selectedInstitution);
  return true;
};

const showWhatsAppUnavailable = () => {
  showPopup('Ação não disponível nesta versão de teste.');
};

const loadRecordsFromStorage = () => {
  const stored = localStorage.getItem(storageKey);
  if (!stored) return [];
  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const loadRecordsFromFirestore = async () => {
  if (!db) return [];
  try {
    const snapshot = await db.collection('records').orderBy('timestamp', 'desc').get();
    return snapshot.docs.map((doc) => ({ id: doc.id, photos: [], ...doc.data() }));
  } catch (error) {
    const snapshot = await db.collection('records').get();
    return snapshot.docs.map((doc) => ({ id: doc.id, photos: [], ...doc.data() }));
  }
};

const loadRecords = async () => {
  if (db) return loadRecordsFromFirestore();
  return loadRecordsFromStorage();
};

const backfillMissingInstitutions = async () => {
  if (!Array.isArray(allRecords) || allRecords.length === 0) return;

  const defaultInstitution = institutions.icmbio;
  const firestoreUpdates = [];
  let hasChanges = false;

  allRecords = allRecords.map((record) => {
    if ((record.institution || '').trim()) {
      return record;
    }

    hasChanges = true;
    const updatedRecord = { ...record, institution: defaultInstitution };

    if (db && record.id) {
      firestoreUpdates.push(
        db
          .collection('records')
          .doc(record.id)
          .set(
            {
              institution: defaultInstitution,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            },
            { merge: true }
          )
      );
    }

    return updatedRecord;
  });

  if (!hasChanges) return;

  if (db && firestoreUpdates.length) {
    for (const updatePromise of firestoreUpdates) {
      try {
        await updatePromise;
      } catch (error) {
        // segue com atualização local em caso de falha pontual no Firebase
      }
    }
  }

  persistLocalIfNeeded();
};

const migrateLocalToFirestore = async () => {
  if (!db) return [];
  const alreadyMigrated = localStorage.getItem(migrationKey);
  if (alreadyMigrated) return [];

  const localRecords = loadRecordsFromStorage();
  if (!localRecords.length) return [];

  const migrated = [];
  for (const record of localRecords) {
    try {
      const payload = buildRecordPayload(record, true);
      const docRef = await db.collection('records').add(payload);
      migrated.push({ ...record, id: docRef.id });
    } catch (error) {
      break;
    }
  }

  if (migrated.length) {
    localStorage.setItem(migrationKey, 'true');
  }
  return migrated;
};

const saveRecordsToStorage = () => {
  localStorage.setItem(storageKey, JSON.stringify(allRecords));
};

const persistLocalIfNeeded = () => {
  if (!db) saveRecordsToStorage();
};

const buildRecordPayload = (recordData, isNew) => {
  const payload = { ...recordData };
  delete payload.photos;
  const photoUrlsCount = recordData.photoUrls?.length || 0;
  payload.photosCount = photoUrlsCount || recordData.photos?.length || 0;
  payload.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
  if (isNew) {
    payload.timestamp = firebase.firestore.FieldValue.serverTimestamp();
  }
  return payload;
};

const extractPhotoUrls = (photos = []) => {
  const urls = [];
  photos.forEach((photo) => {
    if (typeof photo === 'string' && photo.startsWith('http')) {
      urls.push(photo);
      return;
    }
    if (photo?.url && photo.url.startsWith('http')) {
      urls.push(photo.url);
    }
  });
  return urls;
};

const uploadRecordAssets = async (recordData, recordId) => {
  const existingUrls = extractPhotoUrls(recordData.photos);
  if (!storage || !recordData.photos || recordData.photos.length === 0) {
    return { pdfUrl: '', photoUrls: existingUrls };
  }

  const uploadedUrls = [];
  const basePath = `records/${recordId}`;

  for (let index = 0; index < recordData.photos.length; index++) {
    const photo = recordData.photos[index];
    if (!photo?.data || !photo.data.startsWith('data:image')) continue;
    try {
      const safeName = (photo.name || `foto_${index + 1}.jpg`).replace(/[^a-zA-Z0-9_.-]/g, '_');
      const storageRef = storage.ref().child(`${basePath}/${Date.now()}_${safeName}`);
      await withTimeout(
        storageRef.putString(photo.data, 'data_url'),
        15000,
        `Timeout no upload da foto ${index + 1}.`
      );
      const downloadUrl = await withTimeout(
        storageRef.getDownloadURL(),
        10000,
        `Timeout ao obter URL da foto ${index + 1}.`
      );
      uploadedUrls.push(downloadUrl);
    } catch (error) {
      // Se uma foto falhar, segue com as demais sem bloquear o salvamento
    }
  }

  const mergedUrls = Array.from(new Set([...existingUrls, ...uploadedUrls]));
  return { pdfUrl: '', photoUrls: mergedUrls };
};

const fetchImageAsDataUrl = async (url) => {
  const getDriveFileId = (inputUrl) => {
    if (!inputUrl) return '';
    const byPath = inputUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (byPath && byPath[1]) return byPath[1];
    const byQuery = inputUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (byQuery && byQuery[1]) return byQuery[1];
    return '';
  };

  const candidates = [url];
  const driveFileId = getDriveFileId(url);
  if (driveFileId) {
    candidates.push(`https://drive.google.com/uc?export=download&id=${driveFileId}`);
    candidates.push(`https://drive.google.com/thumbnail?id=${driveFileId}&sz=w2000`);
    candidates.push(`https://lh3.googleusercontent.com/d/${driveFileId}=s2000`);
  }

  let lastError = null;
  for (const candidateUrl of Array.from(new Set(candidates))) {
    try {
      const response = await fetch(candidateUrl, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const blob = await response.blob();
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('Falha ao baixar imagem');
};

const normalizePhotoUrl = (url) => {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (!trimmed) return '';

  const byPath = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  const byQuery = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  const fileId = (byPath && byPath[1]) || (byQuery && byQuery[1]) || '';

  if (fileId) {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }

  return trimmed;
};

const collectRecordPhotoLinks = (record) => {
  const links = [];

  if (Array.isArray(record.photoUrls)) {
    record.photoUrls.forEach((url) => {
      const normalized = normalizePhotoUrl(url);
      if (normalized) links.push(normalized);
    });
  }

  if (Array.isArray(record.photos)) {
    record.photos.forEach((photo) => {
      if (photo?.url && typeof photo.url === 'string') {
        const normalized = normalizePhotoUrl(photo.url);
        if (normalized) links.push(normalized);
      } else if (typeof photo === 'string') {
        const normalized = normalizePhotoUrl(photo);
        if (normalized) links.push(normalized);
      }
    });
  }

  return Array.from(new Set(links));
};

const setCurrentTime = () => {
  timeInput.value = formatTime(new Date());
};

const showAlert = (element, message) => {
  element.textContent = message;
  element.style.display = 'block';
  setTimeout(() => {
    element.style.display = 'none';
  }, 5000);
};

const showPopup = (message) => {
  if (!actionUnavailableModal || !actionUnavailableMessage) return;
  actionUnavailableMessage.textContent = message;
  actionUnavailableModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  if (actionUnavailableOkBtn) {
    actionUnavailableOkBtn.focus();
  }
};

const closePopup = () => {
  if (!actionUnavailableModal) return;
  actionUnavailableModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const openPhotoModal = (src, altText = 'Foto do veículo') => {
  if (!photoModal || !photoModalImage) return;
  photoModalImage.src = src;
  photoModalImage.alt = altText;
  photoModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closePhotoModal = () => {
  if (!photoModal) return;
  photoModal.classList.add('hidden');
  if (photoModalImage) {
    photoModalImage.src = '';
  }
  document.body.classList.remove('modal-open');
};

if (actionUnavailableOkBtn) {
  actionUnavailableOkBtn.addEventListener('click', closePopup);
}

if (actionUnavailableModal) {
  actionUnavailableModal.addEventListener('click', (event) => {
    if (event.target === actionUnavailableModal) {
      closePopup();
    }
  });
}

if (photoModalClose) {
  photoModalClose.addEventListener('click', closePhotoModal);
}

if (photoModal) {
  photoModal.addEventListener('click', (event) => {
    if (event.target === photoModal) {
      closePhotoModal();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (actionUnavailableModal && !actionUnavailableModal.classList.contains('hidden')) {
      closePopup();
      return;
    }
    if (photoModal && !photoModal.classList.contains('hidden')) {
      closePhotoModal();
    }
  }
});

const formatCPF = (value) => {
  let cpf = value.replace(/\D/g, '').slice(0, 11);
  if (cpf.length > 9) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  } else if (cpf.length > 6) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
  } else if (cpf.length > 3) {
    cpf = cpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
  }
  return cpf;
};

const formatWhatsApp = (value) => {
  let digits = value.replace(/\D/g, '').slice(0, 11);
  if (!digits) return '';
  digits = digits.replace(/^(\d{2})(\d)/, '($1) $2');
  if (digits.length > 10) {
    digits = digits.replace(/(\d{5})(\d)/, '$1-$2');
  }
  return digits;
};

const handleLocationSuccess = (position) => {
  const { latitude, longitude } = position.coords;
  locationInput.value = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
  locationError.textContent = '';
  locationBtnText.textContent = 'Obter Coordenadas';
  locationLoading.style.display = 'none';
  locationBtn.disabled = false;
};

const handleLocationError = () => {
  locationError.textContent = 'Não foi possível obter a localização. Verifique as permissões.';
  locationBtnText.textContent = 'Obter Coordenadas';
  locationLoading.style.display = 'none';
  locationBtn.disabled = false;
};

const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    locationError.textContent = 'Geolocalização não disponível neste navegador.';
    return;
  }
  locationBtn.disabled = true;
  locationBtnText.textContent = 'Obtendo...';
  locationLoading.style.display = 'inline-block';
  navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError, {
    enableHighAccuracy: true,
    timeout: 10000,
  });
};

const openFullscreenCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ 
      video: { facingMode: cameraFacingMode }
    });
    fullscreenCameraPreview.srcObject = stream;
    updateFullscreenCameraInfo();
    updateFullscreenCameraOrientation();
    fullscreenCameraModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  } catch (error) {
    console.error('Erro ao acessar câmera:', error);
    showAlert(alertError, 'Não foi possível acessar a câmera do dispositivo.');
  }
};

const closeFullscreenCamera = () => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }
  fullscreenCameraModal.classList.remove('force-landscape');
  fullscreenCameraModal.classList.add('hidden');
  document.body.style.overflow = '';
};

const captureFullscreenPhoto = async () => {
  if (!stream || !fullscreenCameraPreview.videoWidth) {
    showAlert(alertError, 'Câmera não está pronta. Tente novamente.');
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.width = fullscreenCameraPreview.videoWidth;
  canvas.height = fullscreenCameraPreview.videoHeight;
  const context = canvas.getContext('2d');
  context.drawImage(fullscreenCameraPreview, 0, 0, canvas.width, canvas.height);
  drawCameraInfoOnCanvas(context, canvas.width, canvas.height);

  const photoDataUrl = canvas.toDataURL('image/jpeg', 0.95);
  addPhotoPreview(photoDataUrl, 'camera_' + new Date().getTime() + '.jpg');
  
  closeFullscreenCamera();
  showAlert(alertSuccess, 'Foto capturada com sucesso!');
};

const toggleCameraFacingMode = () => {
  if (!stream) return;
  closeFullscreenCamera();
  cameraFacingMode = cameraFacingMode === 'environment' ? 'user' : 'environment';
  setTimeout(() => openFullscreenCamera(), 300);
};

const addPhotoPreview = (dataUrl, fileName) => {
  const isDataImage = dataUrl.startsWith('data:image');
  const photoId = `photo-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const wrapper = document.createElement('div');
  wrapper.className = 'photo-preview';
  wrapper.dataset.id = photoId;

  const img = document.createElement('img');
  img.src = dataUrl;
  img.alt = fileName || 'Foto do veículo';
  img.addEventListener('click', () => openPhotoModal(dataUrl, img.alt));

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-photo';
  removeBtn.innerHTML = '&times;';
  removeBtn.type = 'button';
  removeBtn.addEventListener('click', () => {
    wrapper.remove();
    photosData = photosData.filter((photo) => photo.id !== photoId);
  });

  wrapper.appendChild(img);
  wrapper.appendChild(removeBtn);
  photoPreviewContainer.appendChild(wrapper);

  photosData.push({
    id: photoId,
    data: isDataImage ? dataUrl : '',
    url: isDataImage ? '' : dataUrl,
    name: fileName || 'foto_veiculo.jpg',
  });
};

const handlePhotoUpload = (event) => {
  const files = event.target.files;
  if (!files || files.length === 0) return;
  const unsupportedFiles = [];

  Array.from(files).forEach((file) => {
    const mimeType = (file.type || '').toLowerCase();
    const fileName = file.name || 'arquivo';
    const isHeic = mimeType.includes('heic') || mimeType.includes('heif') || /\.(heic|heif)$/i.test(fileName);
    if (isHeic) {
      unsupportedFiles.push(fileName);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => addPhotoPreview(e.target.result, file.name);
    reader.readAsDataURL(file);
  });

  if (unsupportedFiles.length) {
    showAlert(
      alertError,
      `Formato não suportado: ${unsupportedFiles.join(', ')}. Use JPG, PNG ou WEBP.`
    );
  }

  event.target.value = '';
};

const sendWhatsAppMessage = () => {
  const whatsappNumber = whatsappInput.value.replace(/\D/g, '');
  if (!whatsappNumber) return;
  const message =
    'COMUNICADO \nPrezado visitante, bem-vindo às praias de Luís Correia - PI. Você está dentro de uma das mais belas e importantes unidades de conservação federais brasileiras, a Área de Proteção Ambiental Delta do Parnaíba - APA Delta. Nesta praia, existem ninhos e filhotes de tartarugas marinhas de espécies ameaçadas de extinção, que vivem neste ambiente frágil, de vegetação de restinga e retenção de sedimentos que mantém as feições costeiras. Considerando a importância da biodiversidade nesta área, e da livre de circulação de pessoas, o Plano de Manejo da APA Delta do Parnaíba determinou, em seu artigo 12, a proibição da entrada, da permanência e da circulação de veículos automotores nas praias litorâneas. A desobediência deste dispositivo poderá implicar na aplicação do art. 90 do Decreto 6.514/2008, sujeitando o infrator à multa e apreensão do veículo. Neste sentido, contamos com sua colaboração para a preservação do meio ambiente e pela manutenção deste cenário de grande beleza cênica para as presentes e futuras gerações.';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/55${whatsappNumber}?text=${encodedMessage}`, '_blank');
};

const sendToGoogleSheets = async (recordData) => {
  if (!scriptUrl) {
    return [];
  }

  const payload = {
    occurrenceNumber: recordData.occurrenceNumber,
    institution: recordData.institution || getInstitutionLabel(getLoggedInstitutionKey()),
    date: recordData.date,
    time: recordData.time,
    agent: recordData.agent,
    infractorName: recordData.infractorName,
    infractorDoc: recordData.infractorDoc,
    whatsapp: recordData.whatsapp,
    vehiclePlate: recordData.vehiclePlate,
    vehicleModel: recordData.vehicleModel,
    vehicleColor: recordData.vehicleColor,
    vehicleYear: recordData.vehicleYear,
    location: recordData.location,
    observations: recordData.observations || '',
    timestamp: new Date().toISOString(),
    photos: recordData.photos || [], // Adiciona as fotos!
    photoUrls: recordData.photoUrls || [],
  };

  try {
    const response = await withTimeout(
      fetch(scriptUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      }),
      20000,
      'Timeout ao enviar para planilha online.'
    );

    if (response.ok) {
      const responseText = await response.text();
      const result = (() => {
        try {
          return JSON.parse(responseText || '{}');
        } catch (error) {
          return null;
        }
      })();
      showAlert(alertSuccess, 'Registro salvo na planilha online com sucesso!');
      const photoLinks = Array.isArray(result?.photoLinks) ? result.photoLinks : [];
      return photoLinks.filter((link) => typeof link === 'string' && link.startsWith('http'));
    }
  } catch (error) {
    // Fallback para envio sem CORS caso o endpoint não esteja configurado para resposta ao navegador
  }

  fetch(scriptUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).catch(() => {
    // Falha silenciosa, pois o registro já foi salvo localmente/Firebase
  });

  return [];
};

const updateRecordsList = () => {
  recordsList.innerHTML = '';
  if (allRecords.length === 0) {
    recordsList.innerHTML = '<p>Nenhum registro adicionado ainda.</p>';
    updateDashboard();
    return;
  }

  const duplicateMap = buildDuplicateMap(allRecords);

  allRecords.forEach((record, index) => {
    const recordItem = document.createElement('div');
    recordItem.className = 'record-item';

    const summary = document.createElement('div');
    summary.className = 'record-info';
    const duplicateCount = duplicateMap[getDriverKey(record)] || 0;
    const duplicateBadge =
      duplicateCount > 1
        ? `<span class="badge">${duplicateCount} ocorrências</span>`
        : '';
    const institutionLabel = record.institution || '--';
    summary.innerHTML = `<strong>${record.infractorName}</strong> ${duplicateBadge}<br />Nº ${record.occurrenceNumber} • ${record.vehiclePlate}<br />${institutionLabel} • ${record.agent || '--'}`;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'record-actions';

    const canManage = canManageRecord(record);

    const pdfBtn = document.createElement('button');
    pdfBtn.className = 'edit-record';
    pdfBtn.textContent = 'PDF';
    pdfBtn.type = 'button';
    pdfBtn.addEventListener('click', () => generateSinglePDF(index));

    if (canManage) {
      const editBtn = document.createElement('button');
      editBtn.className = 'edit-record';
      editBtn.textContent = 'Editar';
      editBtn.type = 'button';
      editBtn.addEventListener('click', () => editRecord(index));

      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-record';
      removeBtn.textContent = 'Remover';
      removeBtn.type = 'button';
      removeBtn.addEventListener('click', () => removeRecord(index));

      actionsDiv.appendChild(editBtn);
      actionsDiv.appendChild(removeBtn);
    }

    actionsDiv.appendChild(pdfBtn);

    recordItem.appendChild(summary);
    recordItem.appendChild(actionsDiv);
    recordsList.appendChild(recordItem);
  });

  populateFilterAgents();
  populateInstitutionFilter();
  updateDashboard();
};

const buildDuplicateMap = (records) => {
  const grouped = {};
  records.forEach((record) => {
    const key = getDriverKey(record);
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(record);
  });

  const map = {};
  Object.entries(grouped).forEach(([key, driverRecords]) => {
    map[key] = hasValidRecurrence(driverRecords) ? driverRecords.length : 1;
  });
  return map;
};

const applyFilters = (records) => {
  let filtered = [...records];
  if (filterInstitution?.value) {
    filtered = filtered.filter((record) => (record.institution || '') === filterInstitution.value);
  }
  if (filterAgent.value) {
    filtered = filtered.filter((record) => record.agent === filterAgent.value);
  }
  if (filterMonth.value) {
    filtered = filtered.filter((record) => (record.date || '').slice(5, 7) === filterMonth.value);
  }
  if (filterYear.value) {
    filtered = filtered.filter((record) => (record.date || '').slice(0, 4) === filterYear.value);
  }
  if (filterDateFrom.value) {
    filtered = filtered.filter((record) => (record.date || '') >= filterDateFrom.value);
  }
  if (filterDateTo.value) {
    filtered = filtered.filter((record) => (record.date || '') <= filterDateTo.value);
  }
  if (filterSearch.value.trim()) {
    const search = normalizeText(filterSearch.value);
    filtered = filtered.filter((record) => {
      const driver = normalizeText(record.infractorName);
      const plate = normalizeText(record.vehiclePlate);
      const doc = normalizeText(record.infractorDoc);
      return driver.includes(search) || plate.includes(search) || doc.includes(search);
    });
  }
  if (filterDuplicates.checked) {
    const dupMap = buildDuplicateMap(allRecords);
    filtered = filtered.filter((record) => (dupMap[getDriverKey(record)] || 0) > 1);
  }
  return filtered;
};

const renderStatList = (container, data, emptyMessage) => {
  container.innerHTML = '';
  if (!data.length) {
    container.innerHTML = `<p>${emptyMessage}</p>`;
    return;
  }
  data.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'stat-item';
    row.innerHTML = `${item.label} <span>${item.value}</span>`;
    container.appendChild(row);
  });
};

const renderDriversList = (records) => {
  if (!driversList) return;
  driversList.innerHTML = '';
  if (!records.length) {
    driversList.innerHTML = '<p>Nenhum condutor encontrado.</p>';
    return;
  }

  const byDriver = records.reduce((acc, record) => {
    const key = getDriverKey(record);
    if (!acc[key]) {
      acc[key] = {
        key,
        name: record.infractorName || 'Condutor',
        doc: record.infractorDoc || '',
        whatsapp: record.whatsapp || '',
        occurrences: 0,
        lastDate: record.date || '',
        plates: new Set(),
        recordIds: [],
      };
    }
    acc[key].occurrences += 1;
    if (record.date && record.date > acc[key].lastDate) {
      acc[key].lastDate = record.date;
    }
    if (record.vehiclePlate) acc[key].plates.add(record.vehiclePlate);
    if (record.id) acc[key].recordIds.push(record.id);
    return acc;
  }, {});

  const recurrenceMap = buildDuplicateMap(records);
  const list = Object.values(byDriver).sort((a, b) => b.occurrences - a.occurrences);
  list.forEach((driver) => {
    const card = document.createElement('div');
    card.className = 'driver-card';
    const plates = driver.plates.size ? Array.from(driver.plates).join(', ') : '--';
    const doc = driver.doc ? driver.doc : '--';
    const whatsapp = driver.whatsapp ? driver.whatsapp : '--';
    const lastDate = driver.lastDate ? driver.lastDate : '--';
    const badge = (recurrenceMap[driver.key] || 0) > 1 ? ' <span class="badge">Reincidente</span>' : '';
    card.innerHTML = `
      <h4>${driver.name}${badge}</h4>
      <div class="driver-meta">
        <span><strong>CPF:</strong> ${doc}</span>
        <span><strong>WhatsApp:</strong> ${whatsapp}</span>
        <span><strong>Placas:</strong> ${plates}</span>
        <span><strong>Ocorrências:</strong> ${driver.occurrences}</span>
        <span><strong>Última data:</strong> ${lastDate}</span>
      </div>
      <div class="dashboard-actions">
        <button type="button" class="ghost-btn" data-record-id="${
          driver.recordIds[0] || ''
        }">Ver registro</button>
      </div>
    `;
    const detailButton = card.querySelector('button[data-record-id]');
    if (detailButton && driver.recordIds[0]) {
      detailButton.addEventListener('click', () => showRecordDetail(driver.recordIds[0]));
    }
    driversList.appendChild(card);
  });
};

const copyRecordLink = (recordId) => {
  if (!recordId) {
    showAlert(alertError, 'Registro sem ID para link.');
    return;
  }
  const url = `${window.location.origin}?recordId=${recordId}`;
  navigator.clipboard.writeText(url).then(
    () => showAlert(alertSuccess, 'Link do registro copiado!'),
    () => showAlert(alertError, 'Não foi possível copiar o link.')
  );
};

const renderRecordDetail = (record) => {
  if (!record) return;
  recordDetailHeader.textContent = `${record.infractorName || 'Condutor'} • Nº ${
    record.occurrenceNumber || '--'
  }`;
  recordDetailBody.innerHTML = `
    <div><strong>Instituição:</strong> ${record.institution || '--'}</div>
    <div><strong>Agente:</strong> ${record.agent || '--'}</div>
    <div><strong>Data:</strong> ${record.date || '--'} <span>• ${record.time || '--'}</span></div>
    <div><strong>CPF:</strong> ${record.infractorDoc || '--'}</div>
    <div><strong>WhatsApp:</strong> ${record.whatsapp || '--'}</div>
    <div><strong>Placa:</strong> ${record.vehiclePlate || '--'}</div>
    <div><strong>Modelo:</strong> ${record.vehicleModel || '--'} <span>• ${record.vehicleColor || '--'}</span></div>
    <div><strong>Local:</strong> ${record.location || '--'}</div>
    <div><strong>Observações:</strong> ${record.observations || '--'}</div>
  `;

  if (record.pdfUrl) {
    recordPdfLink.href = record.pdfUrl;
    recordPdfLink.classList.remove('hidden');
  } else {
    recordPdfLink.href = '#';
    recordPdfLink.classList.add('hidden');
  }

  recordPhotos.innerHTML = '';
  if (record.photoUrls && record.photoUrls.length) {
    record.photoUrls.forEach((url) => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Foto do veículo';
      img.addEventListener('click', () => openPhotoModal(url, img.alt));
      recordPhotos.appendChild(img);
    });
  } else {
    recordPhotos.innerHTML = '<p>Nenhuma foto cadastrada.</p>';
  }
};

const showRecordDetail = async (recordId) => {
  if (!recordId) return;
  let record = allRecords.find((item) => item.id === recordId);
  if (!record && db) {
    const doc = await db.collection('records').doc(recordId).get();
    if (doc.exists) {
      record = { id: doc.id, ...doc.data() };
    }
  }
  if (record) {
    renderRecordDetail(record);
    showView('recordDetailView');
  } else {
    showAlert(alertError, 'Registro não encontrado.');
  }
};

const updateDashboard = () => {
  if (!statTotal) return;
  const filtered = applyFilters(allRecords);
  const duplicateMap = buildDuplicateMap(filtered);
  const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0');

  const uniqueDrivers = new Set(filtered.map((record) => getDriverKey(record)));
  const uniqueVehicles = new Set(
    filtered
      .map((record, index) => {
        const plateValue = normalizeText(record.vehiclePlate);
        if (!plateValue) return '';
        if (plateValue === normalizedNoPlateLabel) {
          const uniqueId = record.occurrenceNumber || record.id || index;
          return `sem-placa:${uniqueId}`;
        }
        return plateValue;
      })
      .filter(Boolean)
  );
  const duplicatesCount = Object.values(duplicateMap).filter((count) => count > 1).length;
  const currentMonthCount = filtered.filter((record) => (record.date || '').slice(5, 7) === currentMonth)
    .length;

  statTotal.textContent = filtered.length;
  statDrivers.textContent = uniqueDrivers.size;
  statVehicles.textContent = uniqueVehicles.size;
  statDuplicates.textContent = duplicatesCount;
  statCurrentMonth.textContent = currentMonthCount;

  const byAgent = Object.entries(
    filtered.reduce((acc, record) => {
      acc[record.agent] = (acc[record.agent] || 0) + 1;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .map(([label, value]) => ({ label, value: `${value} registros` }));

  const byMonth = Object.entries(
    filtered.reduce((acc, record) => {
      const key = (record.date || '').slice(0, 7);
      if (!key) return acc;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {})
  )
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([label, value]) => ({ label, value: `${value} registros` }));

  const duplicateDrivers = Object.entries(duplicateMap)
    .filter(([, count]) => count > 1)
    .map(([key, value]) => {
      const sample = filtered.find((record) => getDriverKey(record) === key);
      const name = sample?.infractorName || 'Condutor';
      const doc = sample?.infractorDoc ? ` • ${sample.infractorDoc}` : '';
      return {
        label: `${name}${doc}`,
        value: `${value} ocorrências`,
      };
    });

  renderStatList(byAgentList, byAgent, 'Nenhum registro no período.');
  renderStatList(byMonthList, byMonth, 'Nenhum registro no período.');
  renderStatList(duplicateDriversList, duplicateDrivers, 'Nenhum reincidente no período.');
  renderDriversList(filtered);
};

const clearFormAfterRecord = () => {
  document.getElementById('fiscalizationForm').reset();
  photoPreviewContainer.innerHTML = '';
  photosData = [];
  locationError.textContent = '';
  if (vehicleNoPlateInput) {
    vehicleNoPlateInput.checked = false;
  }
  syncVehiclePlateState();
  dateInput.value = formatDate(new Date());
  setCurrentTime();
  occurrenceNumberInput.value = generateUniqueOccurrenceNumber();
  const loggedAgent = localStorage.getItem(sessionKey);
  const loggedInstitution = getLoggedInstitutionKey();
  if (loggedAgent) {
    agentSelect.value = loggedAgent;
    agentSelect.readOnly = true;
  }
  if (institutionInput && loggedInstitution) {
    institutionInput.value = getInstitutionLabel(loggedInstitution);
  }
  updateAgentName();
};

const clearForm = () => {
  document.getElementById('fiscalizationForm').reset();
  photoPreviewContainer.innerHTML = '';
  photosData = [];
  locationError.textContent = '';
  if (vehicleNoPlateInput) {
    vehicleNoPlateInput.checked = false;
  }
  syncVehiclePlateState();
  const loggedInstitution = getLoggedInstitutionKey();
  if (institutionInput && loggedInstitution) {
    institutionInput.value = getInstitutionLabel(loggedInstitution);
  }
  updateAgentName();
};

const validateRequiredFields = () => {
  syncVehiclePlateState();
  const requiredFields = [
    { id: 'occurrenceNumber', name: 'Número da Ocorrência' },
    { id: 'institution', name: 'Instituição' },
    { id: 'agent', name: 'Nome do Agente' },
    { id: 'date', name: 'Data da Ocorrência' },
    { id: 'time', name: 'Hora da Ocorrência' },
    { id: 'infractorName', name: 'Nome do Condutor' },
    { id: 'vehiclePlate', name: 'Placa do Veículo' },
    { id: 'vehicleModel', name: 'Modelo do Veículo' },
    { id: 'vehicleColor', name: 'Cor do Veículo' },
    { id: 'location', name: 'Local da Ocorrência' },
  ];

  let isValid = true;
  const missingFields = [];

  requiredFields.forEach((field) => {
    const element = document.getElementById(field.id);
    const value = element.value.trim();
    if (!value || (element.tagName === 'SELECT' && value === '')) {
      element.classList.add('invalid-field');
      missingFields.push(field.name);
      isValid = false;
    } else {
      element.classList.remove('invalid-field');
    }
  });

  const plate = document.getElementById('vehiclePlate').value.trim();
  const noPlateSelected = vehicleNoPlateInput?.checked || isNoPlateValue(plate);
  if (!noPlateSelected && plate.length !== 7) {
    document.getElementById('vehiclePlate').classList.add('invalid-field');
    missingFields.push('Placa com 7 caracteres');
    isValid = false;
  }

  if (!isValid) {
    showAlert(alertError, `Preencha os campos obrigatórios: ${missingFields.join(', ')}`);
  }

  return isValid;
};

const addRecord = async () => {
  if (!validateRequiredFields()) return;

  setSavingState(true);
  setSavingProgress(10, 'Preparando informacoes da ocorrencia...');

  const formData = new FormData(document.getElementById('fiscalizationForm'));
  const recordData = {};
  formData.forEach((value, key) => {
    recordData[key] = value;
  });

  if (vehicleNoPlateInput?.checked || isNoPlateValue(recordData.vehiclePlate)) {
    recordData.vehiclePlate = noPlateLabel;
  }
  
  // COPIA AS FOTOS
  recordData.photos = [...photosData];
  
  if (!recordData.agent) {
    const loggedAgent = localStorage.getItem(sessionKey);
    recordData.agent = agentSelect.value || loggedAgent || '';
  }
  if (!recordData.institution) {
    const loggedInstitution = getLoggedInstitutionKey();
    recordData.institution = getInstitutionLabel(loggedInstitution);
  }

  const hasPhotos = Array.isArray(recordData.photos) && recordData.photos.length > 0;
  const bumpProgress = (percent, message) => setSavingProgress(percent, message);

  try {
    bumpProgress(25, 'Salvando informacoes na plataforma...');
    if (currentlyEditingIndex >= 0) {
      const existing = allRecords[currentlyEditingIndex];
      const recordId = existing?.id;
      if (db && recordId) {
        try {
          const payload = buildRecordPayload(recordData, false);
          await Promise.race([
            db.collection('records').doc(recordId).set(payload, { merge: true }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout Firebase')), 8000))
          ]);
          recordData.id = recordId;
        } catch (fbError) {
          // Firebase falhou, continua com salvamento local
        }
      } else if (recordId) {
        recordData.id = recordId;
      }
      if (db && recordData.id) {
        try {
          bumpProgress(55, hasPhotos ? 'Salvando fotos online...' : 'Nenhuma foto para enviar.');
          const assets = await uploadRecordAssets(recordData, recordData.id);
          if (assets.photoUrls && assets.photoUrls.length) {
            recordData.photoUrls = assets.photoUrls;
            await db.collection('records').doc(recordData.id).set(
              {
                photoUrls: assets.photoUrls,
                photosCount: assets.photoUrls.length,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
              },
              { merge: true }
            );
          }
        } catch (assetError) {
          // Upload de fotos falhou, segue com o registro salvo
        }
      }
      allRecords[currentlyEditingIndex] = recordData;
      currentlyEditingIndex = -1;
      addRecordBtn.textContent = 'Adicionar Registro';
    } else {
      if (db) {
        try {
          const payload = buildRecordPayload(recordData, true);
          const docRef = await Promise.race([
            db.collection('records').add(payload),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout Firebase')), 8000))
          ]);
          recordData.id = docRef.id;
        } catch (fbError) {
          // Firebase falhou, continua com salvamento local
        }
      }
      if (db && recordData.id) {
        try {
          bumpProgress(55, hasPhotos ? 'Salvando fotos online...' : 'Nenhuma foto para enviar.');
          const assets = await uploadRecordAssets(recordData, recordData.id);
          if (assets.photoUrls && assets.photoUrls.length) {
            recordData.photoUrls = assets.photoUrls;
            await db.collection('records').doc(recordData.id).set(
              {
                photoUrls: assets.photoUrls,
                photosCount: assets.photoUrls.length,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
              },
              { merge: true }
            );
          }
        } catch (assetError) {
          // Upload de fotos falhou, segue com o registro salvo
        }
      }
      allRecords.push(recordData);
    }
  } catch (error) {
    // Erro geral na adição do registro
    if (currentlyEditingIndex >= 0) {
      allRecords[currentlyEditingIndex] = recordData;
      currentlyEditingIndex = -1;
      addRecordBtn.textContent = 'Adicionar Registro';
    } else {
      allRecords.push(recordData);
    }
  }

  bumpProgress(80, 'Salvando informacoes na planilha online...');
  let onlinePhotoLinks = [];
  try {
    onlinePhotoLinks = await sendToGoogleSheets(recordData);
  } catch (error) {
    onlinePhotoLinks = [];
  }
  if (onlinePhotoLinks.length) {
    recordData.photoUrls = Array.from(new Set([...(recordData.photoUrls || []), ...onlinePhotoLinks]));

    if (db && recordData.id) {
      try {
        bumpProgress(90, 'Atualizando registro com links das fotos...');
        await db.collection('records').doc(recordData.id).set(
          {
            photoUrls: recordData.photoUrls,
            photosCount: recordData.photoUrls.length,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      } catch (error) {
        // segue com dados locais
      }
    }

    persistLocalIfNeeded();
  }

  updateRecordsList();
  persistLocalIfNeeded();
  populateMonthYearFilters();
  clearFormAfterRecord();

  bumpProgress(100, 'Concluido!');
  setTimeout(() => setSavingState(false), 300);

  // Scroll para o topo do formulário
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Mostrar notificação de sucesso
  showAlert(alertSuccess, 'Registro salvo com sucesso!');
};

const editRecord = (index) => {
  const record = allRecords[index];
  if (!canManageRecord(record)) {
    showAlert(alertError, 'Você não tem permissão para editar este registro.');
    return;
  }
  clearForm();
  showView('formView');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('occurrenceNumber').value = record.occurrenceNumber || '';
  document.getElementById('institution').value = record.institution || '';
  document.getElementById('agent').value = record.agent || '';
  document.getElementById('date').value = record.date || '';
  document.getElementById('time').value = record.time || '';
  document.getElementById('infractorName').value = record.infractorName || '';
  document.getElementById('infractorDoc').value = record.infractorDoc || '';
  document.getElementById('whatsapp').value = record.whatsapp || '';
  document.getElementById('vehiclePlate').value = record.vehiclePlate || '';
  if (vehicleNoPlateInput) {
    vehicleNoPlateInput.checked = isNoPlateValue(record.vehiclePlate);
  }
  syncVehiclePlateState();
  document.getElementById('vehicleModel').value = record.vehicleModel || '';
  document.getElementById('vehicleColor').value = record.vehicleColor || '';
  document.getElementById('vehicleYear').value = record.vehicleYear || '';
  document.getElementById('location').value = record.location || '';
  document.getElementById('observations').value = 'Ocorrência editada';
  whatsappBtn.disabled = false;

  photoPreviewContainer.innerHTML = '';
  photosData = [];
  if (record.photos && record.photos.length) {
    record.photos.forEach((photo) => addPhotoPreview(photo.data, photo.name));
  }
  if (record.photoUrls && record.photoUrls.length) {
    record.photoUrls.forEach((url, index) => {
      addPhotoPreview(url, `foto_online_${index + 1}.jpg`);
    });
  }

  currentlyEditingIndex = index;
  addRecordBtn.textContent = 'Salvar Alterações';
  updateAgentName();
};

const removeRecord = async (index) => {
  const record = allRecords[index];
  if (!canManageRecord(record)) {
    showAlert(alertError, 'Você não tem permissão para remover este registro.');
    return;
  }
  
  // Abrir modal de confirmação de senha
  pendingDeleteIndex = index;
  deleteConfirmPassword.value = '';
  deletePasswordError.style.display = 'none';
  deletePasswordError.textContent = '';
  deleteConfirmModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  deleteConfirmPassword.focus();
};

const confirmRemoveRecord = async () => {
  const password = deleteConfirmPassword.value;
  const loggedAgent = localStorage.getItem(sessionKey);
  
  if (!password) {
    deletePasswordError.textContent = 'Digite sua senha';
    deletePasswordError.style.display = 'block';
    return;
  }

  // Validar senha (primeiro nome + 2026)
  const institutionKey = getLoggedInstitutionKey() || 'icmbio';
  const expectedPassword = getExpectedPassword(institutionKey, loggedAgent);
  
  if (password !== expectedPassword) {
    deletePasswordError.textContent = 'Senha incorreta';
    deletePasswordError.style.display = 'block';
    return;
  }

  // Senha correta, proceder com deleção
  const record = allRecords[pendingDeleteIndex];
  try {
    if (db && record?.id) {
      await db.collection('records').doc(record.id).delete();
    }
  } catch (error) {
    showAlert(alertError, 'Não foi possível remover no Firebase.');
  }
  
  allRecords.splice(pendingDeleteIndex, 1);
  updateRecordsList();
  persistLocalIfNeeded();
  populateMonthYearFilters();
  
  // Fechar modal
  closeDeleteModal();
  showAlert(alertSuccess, 'Registro removido com sucesso!');
};

const closeDeleteModal = () => {
  deleteConfirmModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pendingDeleteIndex = -1;
  deleteConfirmPassword.value = '';
  deletePasswordError.style.display = 'none';
  deletePasswordError.textContent = '';
};

const addJustifiedText = (doc, text, yPos, marginLeft, contentWidth) => {
  const lines = doc.splitTextToSize(text, contentWidth);
  lines.forEach((line) => {
    doc.text(line, marginLeft, yPos, { align: 'justify' });
    yPos += 5;
  });
  return yPos;
};

const renderRecordToDoc = (doc, record, options = {}) => {
  const { includeComunicado = true, reportTitle = '' } = options;
  const marginLeft = 15;
  const marginRight = 15;
  const pageWidth = 210;
  const contentWidth = pageWidth - marginLeft - marginRight;
  let yPos = 15;

  doc.setTextColor(0, 0, 0);

  // Adicionar brasão da república centralizado
  try {
    const brasaoWidth = 18;
    const brasaoHeight = 18;
    const brasaoX = (pageWidth - brasaoWidth) / 2;
    doc.addImage('/Brasão da república quadrado.png', 'PNG', brasaoX, yPos - 3, brasaoWidth, brasaoHeight);
  } catch (error) {
    console.log('Erro ao carregar brasão:', error);
  }

  yPos += 22;

  // Texto do cabeçalho centralizado
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('MINISTÉRIO DO MEIO AMBIENTE E MUDANÇA DO CLIMA', 105, yPos, { align: 'center' });
  yPos += 5;
  doc.text('INSTITUTO CHICO MENDES DE CONSERVAÇÃO DA BIODIVERSIDADE', 105, yPos, { align: 'center' });
  yPos += 5;
  doc.text('ÁREA DE PROTEÇÃO AMBIENTAL DELTA DO PARNAÍBA', 105, yPos, { align: 'center' });
  yPos += 15;

  if (includeComunicado) {
    doc.setFontSize(12);
    doc.text('COMUNICADO', 105, yPos + 5, { align: 'center' });
    yPos += 15;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const comunicadoText =
      'Prezado visitante, bem-vindo às praias de Luís Correia - PI. Você está dentro de uma das mais belas e importantes unidades de conservação federais brasileiras, a Área de Proteção Ambiental Delta do Parnaíba - APA Delta. Nesta praia, existem ninhos e filhotes de tartarugas marinhas de espécies ameaçadas de extinção, que vivem neste ambiente frágil, de vegetação de restinga e retenção de sedimentos que mantém as feições costeiras. Considerando a importância da biodiversidade nesta área, e da livre de circulação de pessoas, o Plano de Manejo da APA Delta do Parnaíba determinou, em seu artigo 12, a proibição da entrada, da permanência e da circulação de veículos automotores nas praias litorâneas. A desobediência deste dispositivo poderá implicar na aplicação do art. 90 do Decreto 6.514/2008, sujeitando o infrator à multa e apreensão do veículo. Neste sentido, contamos com sua colaboração para a preservação do meio ambiente e pela manutenção deste cenário de grande beleza cênica para as presentes e futuras gerações.';

    yPos = addJustifiedText(doc, comunicadoText, yPos, marginLeft, contentWidth);
    yPos += 10;
  } else if (reportTitle) {
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    const reportLines = doc.splitTextToSize(reportTitle, contentWidth);
    reportLines.forEach((line) => {
      doc.text(line, 105, yPos, { align: 'center' });
      yPos += 6;
    });
    yPos += 6;
  }

  doc.setDrawColor(0, 69, 33);
  doc.setLineWidth(0.5);
  doc.line(marginLeft, yPos, pageWidth - marginRight, yPos);
  yPos += 10;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('DADOS DA OCORRÊNCIA', 105, yPos, { align: 'center' });
  yPos += 10;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Número da Ocorrência: ${record.occurrenceNumber}`, marginLeft, yPos);
  doc.text(`Data: ${record.date}`, 105, yPos);
  doc.text(`Hora: ${record.time}`, 160, yPos);
  yPos += 8;
  doc.text(`Instituição: ${record.institution || '--'}`, marginLeft, yPos);
  yPos += 8;
  doc.text(`Agente: ${record.agent}`, marginLeft, yPos);
  yPos += 8;

  doc.setFont('helvetica', 'bold');
  doc.text('DADOS DO CONDUTOR', marginLeft, yPos);
  yPos += 6;
  doc.setFont('helvetica', 'normal');
  doc.text(`Nome: ${record.infractorName}`, marginLeft, yPos);
  if (record.infractorDoc) {
    doc.text(`CPF: ${record.infractorDoc}`, 105, yPos);
  }
  yPos += 8;

  if (record.whatsapp) {
    doc.text(`WhatsApp: ${record.whatsapp}`, marginLeft, yPos);
    yPos += 8;
  }

  doc.setFont('helvetica', 'bold');
  doc.text('DADOS DO VEÍCULO', marginLeft, yPos);
  yPos += 6;
  doc.setFont('helvetica', 'normal');
  const vehiclePlateText = record.vehiclePlate || '--';
  if (isNoPlateValue(vehiclePlateText)) {
    doc.setFont('helvetica', 'bold');
    doc.text(`Placa: ${vehiclePlateText}`, marginLeft, yPos);
    doc.setFont('helvetica', 'normal');
  } else {
    doc.text(`Placa: ${vehiclePlateText}`, marginLeft, yPos);
  }
  doc.text(`Modelo: ${record.vehicleModel}`, 80, yPos);
  doc.text(`Cor: ${record.vehicleColor}`, 130, yPos);
  if (record.vehicleYear) {
    doc.text(`Ano: ${record.vehicleYear}`, 170, yPos);
  }
  yPos += 8;

  doc.setFont('helvetica', 'bold');
  doc.text('LOCAL DA OCORRÊNCIA', marginLeft, yPos);
  yPos += 6;
  doc.setFont('helvetica', 'normal');
  const locationLines = doc.splitTextToSize(record.location, contentWidth);
  locationLines.forEach((line) => {
    doc.text(line, marginLeft, yPos);
    yPos += 6;
  });
  yPos += 8;

  if (record.observations) {
    doc.setFont('helvetica', 'bold');
    doc.text('OBSERVAÇÕES', marginLeft, yPos);
    yPos += 6;
    doc.setFont('helvetica', 'normal');
    const obsLines = doc.splitTextToSize(record.observations, contentWidth);
    obsLines.forEach((line) => {
      doc.text(line, marginLeft, yPos);
      yPos += 6;
    });
  }

  const photoLinks = Array.isArray(record.externalPhotoLinks) ? record.externalPhotoLinks : [];
  if (photoLinks.length > 0) {
    yPos += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 69, 33);
    doc.text('FOTOS DO VEÍCULO (LINKS ONLINE)', marginLeft, yPos);
    yPos += 6;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);

    const maxYPos = 272;
    let hiddenCount = 0;
    photoLinks.forEach((link, index) => {
      if (yPos > maxYPos) {
        hiddenCount += 1;
        return;
      }

      const label = `Abrir foto ${index + 1}`;
      const prefix = `• ${label}: `;

      doc.text(prefix, marginLeft, yPos);
      const prefixWidth = doc.getTextWidth(prefix);
      const linkX = marginLeft + prefixWidth;

      doc.setTextColor(0, 0, 255);
      if (typeof doc.textWithLink === 'function') {
        doc.textWithLink(link, linkX, yPos, { url: link });
      } else {
        doc.text(link, linkX, yPos);
      }
      doc.setTextColor(0, 0, 0);
      yPos += 5;
    });

    if (hiddenCount > 0 && yPos <= 278) {
      doc.setFontSize(8);
      doc.text(`... ${hiddenCount} link(s) adicional(is) não exibidos nesta página.`, marginLeft, yPos);
    }
  }

  doc.setFontSize(8);
  doc.setTextColor(0, 0, 0);
  doc.text(
    'Documento gerado automaticamente pelo Sistema de Fiscalização da APA Delta do Parnaíba',
    105,
    287,
    { align: 'center' }
  );
};

// Função para preparar links de fotos do registro (mantém PDF em uma página por ocorrência)
const prepareRecordPhotos = async (record) => {
  const externalLinks = collectRecordPhotoLinks(record);
  return { ...record, photos: [], externalPhotoLinks: externalLinks };
};

const generatePDFBlob = async (record) => {
  if (!jsPDF) throw new Error('jsPDF não disponível');
  
  // Prepara as fotos (carrega URLs se necessário)
  const preparedRecord = await prepareRecordPhotos(record);
  
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  renderRecordToDoc(doc, preparedRecord);
  return doc.output('blob');
};

const generateSinglePDF = async (index) => {
  const record = allRecords[index];
  if (!record) return;
  try {
    const pdfBlob = await generatePDFBlob(record);
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Comunicado_Infracao_${record.occurrenceNumber}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    showAlert(alertError, 'Erro ao gerar o PDF.');
  }
};

const sharePDF = async (index) => {
  const record = allRecords[index];
  if (!record) return;
  try {
    const pdfBlob = await generatePDFBlob(record);
    const file = new File([pdfBlob], `Comunicado_Infracao_${record.occurrenceNumber}.pdf`, {
      type: 'application/pdf',
    });

    if (navigator.share) {
      await navigator.share({
        title: `Comunicado de Infração ${record.occurrenceNumber}`,
        text: `Comunicado de infração para ${record.infractorName} - Veículo ${record.vehiclePlate}`,
        files: [file],
      });
    } else {
      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Comunicado_Infracao_${record.occurrenceNumber}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showAlert(alertSuccess, 'PDF gerado. Compartilhamento direto disponível apenas em mobile.');
    }
  } catch (error) {
    showAlert(alertError, 'Erro ao compartilhar o PDF.');
  }
};

const getFilteredRecords = () => applyFilters(allRecords);

const getReportTitle = () => {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const dateFrom = filterDateFrom.value;
  const dateTo = filterDateTo.value;
  const selectedInstitution = filterInstitution?.value || '';
  const selectedAgent = filterAgent.value;

  const titleParts = [];

  if (dateFrom || dateTo) {
    const start = dateFrom ? formatDateBr(dateFrom) : '...';
    const end = dateTo ? formatDateBr(dateTo) : '...';
    titleParts.push(`Relatório do período de ${start} a ${end}`);
  } else if (filterMonth.value) {
    const monthIndex = Number(filterMonth.value) - 1;
    const monthLabel = months[monthIndex] || filterMonth.value;
    const yearLabel = filterYear.value || String(new Date().getFullYear());
    titleParts.push(`Relatório do mês de ${monthLabel} de ${yearLabel}`);
  } else if (filterYear.value) {
    titleParts.push(`Relatório do ano de ${filterYear.value}`);
  } else {
    titleParts.push('Relatório');
  }

  if (selectedInstitution || selectedAgent) {
    const qualifiers = [];
    if (selectedInstitution) {
      qualifiers.push(`pela instituição ${selectedInstitution}`);
    }
    if (selectedAgent) {
      qualifiers.push(`pelo agente ${selectedAgent}`);
    }
    titleParts.push(`das ocorrências registradas ${qualifiers.join(' e ')}`);
  }

  titleParts.push('na atividade de Veículos na Praia Não');

  return titleParts.join(' ');
};

const generatePDF = async () => {
  const filteredRecords = getFilteredRecords();
  if (!filteredRecords.length) {
    showAlert(alertError, 'Nenhum registro encontrado para gerar relatório.');
    return;
  }
  if (!jsPDF) {
    showAlert(alertError, 'Biblioteca jsPDF não carregada.');
    return;
  }
  try {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const reportTitle = getReportTitle();
    
    // Processa cada registro preparando as fotos
    for (let index = 0; index < filteredRecords.length; index++) {
      if (index > 0) {
        doc.addPage();
      }
      const preparedRecord = await prepareRecordPhotos(filteredRecords[index]);
      renderRecordToDoc(doc, preparedRecord, {
        includeComunicado: false,
        reportTitle: index === 0 ? reportTitle : '',
      });
    }
    
    doc.save('Relatorio_Filtrado.pdf');
  } catch (error) {
    showAlert(alertError, 'Erro ao gerar relatório PDF.');
    console.error('Erro ao gerar PDF:', error);
  }
};

window.addEventListener('load', () => {
  (async () => {
    initFirebase();
    allRecords = await loadRecords();
    if (db && allRecords.length === 0) {
      const migrated = await migrateLocalToFirestore();
      if (migrated.length) {
        allRecords = migrated;
      }
    }
    await backfillMissingInstitutions();
    allRecords.forEach((record) => {
      if (record.occurrenceNumber) usedOccurrenceNumbers.add(record.occurrenceNumber);
    });
    dateInput.value = formatDate(new Date());
    setCurrentTime();
    occurrenceNumberInput.value = generateUniqueOccurrenceNumber();
    updateAgentName();
    updateRecordsList();
    populateLoginAgents();
    populateFilterAgents();
    updateLoginAgentMode();
    populateMonthYearFilters();

    const loggedAgent = localStorage.getItem(sessionKey);
    const loggedInstitution = localStorage.getItem(sessionInstitutionKey) || 'icmbio';
    if (loggedAgent) {
      setLoggedUser(loggedAgent, loggedInstitution);
      showView('dashboardView');
    } else {
      loginScreen.classList.remove('hidden');
      appShell.classList.add('hidden');
    }

    const params = new URLSearchParams(window.location.search);
    const recordId = params.get('recordId');
    if (recordId) {
      await showRecordDetail(recordId);
    }
  })();
});

window.addEventListener('orientationchange', updateFullscreenCameraOrientation);
window.addEventListener('resize', updateFullscreenCameraOrientation);

agentSelect.addEventListener('change', updateAgentName);
setTimeBtn.addEventListener('click', setCurrentTime);
locationBtn.addEventListener('click', getCurrentLocation);
[
  occurrenceNumberInput,
  dateInput,
  timeInput,
  locationInput,
  institutionInput,
  agentSelect,
].forEach((field) => {
  if (!field) return;
  field.addEventListener('input', updateFullscreenCameraInfo);
  field.addEventListener('change', updateFullscreenCameraInfo);
});
if (vehicleNoPlateInput) {
  vehicleNoPlateInput.addEventListener('change', syncVehiclePlateState);
}
cpfInput.addEventListener('input', (event) => {
  event.target.value = formatCPF(event.target.value);
});
whatsappInput.addEventListener('input', (event) => {
  event.target.value = formatWhatsApp(event.target.value);
  whatsappBtn.disabled = false;
});
whatsappBtn.addEventListener('click', (event) => {
  event.preventDefault();
  showWhatsAppUnavailable();
});
addRecordBtn.addEventListener('click', () => {
  addRecord();
});
generatePdfBtn.addEventListener('click', generatePDF);
if (generateFilteredPdfBtn) {
  generateFilteredPdfBtn.addEventListener('click', generatePDF);
}

uploadPhotoBtn.addEventListener('click', () => {
  // Mostrar opção para escolher entre câmera ou galeria
  const choice = confirm('Deseja usar a câmera?\n\nClique em "OK" para câmera ou "Cancelar" para escolher da galeria.');
  if (choice) {
    // Abrir câmera fullscreen
    openFullscreenCamera();
  } else {
    // Abrir galeria
    photosInput.click();
  }
});
photosInput.addEventListener('change', handlePhotoUpload);
captureFullscreenBtn.addEventListener('click', captureFullscreenPhoto);
cancelFullscreenCameraBtn.addEventListener('click', closeFullscreenCamera);
toggleFrontCameraBtn.addEventListener('click', toggleCameraFacingMode);

// Event listeners para modal de confirmação de exclusão
if (cancelDeleteBtn) {
  cancelDeleteBtn.addEventListener('click', closeDeleteModal);
}

if (confirmDeleteBtn) {
  confirmDeleteBtn.addEventListener('click', confirmRemoveRecord);
}

if (deleteConfirmModal) {
  deleteConfirmModal.addEventListener('click', (event) => {
    if (event.target === deleteConfirmModal) {
      closeDeleteModal();
    }
  });
}

if (deleteConfirmPassword) {
  deleteConfirmPassword.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      confirmRemoveRecord();
    }
  });
}

['infractorName', 'vehiclePlate', 'vehicleModel', 'vehicleColor'].forEach((id) => {
  const field = document.getElementById(id);
  field.addEventListener('input', () => {
    field.value = field.value.toUpperCase();
  });
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (handleLogin()) {
    showView('dashboardView');
  }
});

// Adicionar também um listener direto no botão para mobile
if (loginBtn) {
  loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (handleLogin()) {
      showView('dashboardView');
    }
  });
}

// Permitir login ao pressionar Enter no campo de senha
loginPassword.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (handleLogin()) {
      showView('dashboardView');
    }
  }
});

logoutBtn.addEventListener('click', clearSession);

if (openFormBtn) {
  openFormBtn.addEventListener('click', () => {
    showView('formView');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (backToDashboardBtn) {
  backToDashboardBtn.addEventListener('click', () => showView('dashboardView'));
}

if (backToDashboardFromDetail) {
  backToDashboardFromDetail.addEventListener('click', () => showView('dashboardView'));
}

if (toggleAnalysisBtn && analysisPanel) {
  toggleAnalysisBtn.addEventListener('click', () => {
    const isHidden = analysisPanel.classList.contains('hidden');
    analysisPanel.classList.toggle('hidden', !isHidden);
    toggleAnalysisBtn.textContent = isHidden
      ? 'Ocultar filtros e análises'
      : 'Mostrar filtros e análises';
    if (isHidden) {
      analysisPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

if (applyFiltersBtn) {
  applyFiltersBtn.addEventListener('click', updateDashboard);
}

if (toggleFiltersBtn && dashboardFiltersPanel) {
  toggleFiltersBtn.addEventListener('click', () => {
    const isHidden = dashboardFiltersPanel.classList.toggle('hidden');
    toggleFiltersBtn.textContent = isHidden ? 'Mostrar filtros' : 'Ocultar filtros';
  });
}

clearFiltersBtn.addEventListener('click', () => {
  if (filterInstitution) {
    filterInstitution.value = '';
  }
  filterAgent.value = '';
  filterMonth.value = '';
  filterYear.value = '';
  filterDateFrom.value = '';
  filterDateTo.value = '';
  filterSearch.value = '';
  filterDuplicates.checked = false;
  updateDashboard();
});

if (loginInstitution) {
  loginInstitution.addEventListener('change', updateLoginAgentMode);
}

if (loginAgentCustom) {
  loginAgentCustom.addEventListener('input', (event) => {
    event.target.value = event.target.value.toUpperCase();
  });
}
