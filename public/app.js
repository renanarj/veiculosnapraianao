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
const cpfStatus = document.getElementById('cpfStatus');
const whatsappInput = document.getElementById('whatsapp');
const vehiclePlateInput = document.getElementById('vehiclePlate');
const vehicleNoPlateInput = document.getElementById('vehicleNoPlate');
const addRecordBtn = document.getElementById('addRecordBtn');
const generatePdfBtn = document.getElementById('generatePdfBtn');
const generateFilteredPdfBtn = document.getElementById('generateFilteredPdfBtn');
const recordsList = document.getElementById('records-list');
const alertSuccess = document.getElementById('alertSuccess');
const alertError = document.getElementById('alertError');
const uploadPhotoBtn = document.getElementById('uploadPhoto');
const photosInput = document.getElementById('photosInput');
const photoPreviewContainer = document.getElementById('photoPreviewContainer');
const entryScreen = document.getElementById('entryScreen');
const openPublicReportBtn = document.getElementById('openPublicReportBtn');
const openLoginBtn = document.getElementById('openLoginBtn');
const toggleTrackProtocolBtn = document.getElementById('toggleTrackProtocolBtn');
const trackProtocolPanel = document.getElementById('trackProtocolPanel');
const trackProtocolInput = document.getElementById('trackProtocolInput');
const trackProtocolBtn = document.getElementById('trackProtocolBtn');
const trackProtocolResult = document.getElementById('trackProtocolResult');
const publicReportScreen = document.getElementById('publicReportScreen');
const backFromPublicReportBtn = document.getElementById('backFromPublicReportBtn');
const backFromLoginBtn = document.getElementById('backFromLoginBtn');
const publicReportForm = document.getElementById('publicReportForm');
const publicDateInput = document.getElementById('publicDate');
const publicTimeInput = document.getElementById('publicTime');
const publicLocationInput = document.getElementById('publicLocation');
const publicGetLocationBtn = document.getElementById('publicGetLocationBtn');
const publicLocationError = document.getElementById('publicLocationError');
const publicVehiclePlateInput = document.getElementById('publicVehiclePlate');
const publicVehicleModelInput = document.getElementById('publicVehicleModel');
const publicVehicleColorInput = document.getElementById('publicVehicleColor');
const publicVehicleYearInput = document.getElementById('publicVehicleYear');
const publicInfractorNameInput = document.getElementById('publicInfractorName');
const publicInfractorDocInput = document.getElementById('publicInfractorDoc');
const publicObservationsInput = document.getElementById('publicObservations');
const publicReporterContactInput = document.getElementById('publicReporterContact');
const publicReportPhotosInput = document.getElementById('publicReportPhotos');
const publicReportPhotoPreview = document.getElementById('publicReportPhotoPreview');
const publicReportConsentInput = document.getElementById('publicReportConsent');
const submitPublicReportBtn = document.getElementById('submitPublicReportBtn');
const publicReportSuccess = document.getElementById('publicReportSuccess');
const publicReportError = document.getElementById('publicReportError');
const publicSavingOverlay = document.getElementById('publicSavingOverlay');
const publicSavingStepText = document.getElementById('publicSavingStepText');
const publicSavingProgressBar = document.getElementById('publicSavingProgressBar');
const publicSavingProgressPercent = document.getElementById('publicSavingProgressPercent');
const publicProtocolModal = document.getElementById('publicProtocolModal');
const publicProtocolMessage = document.getElementById('publicProtocolMessage');
const publicProtocolValue = document.getElementById('publicProtocolValue');
const copyProtocolBtn = document.getElementById('copyProtocolBtn');
const closeProtocolModalBtn = document.getElementById('closeProtocolModalBtn');
const fullscreenCameraModal = document.getElementById('fullscreenCameraModal');
const fullscreenCameraPreview = document.getElementById('fullscreenCameraPreview');
const captureFullscreenBtn = document.getElementById('captureFullscreenBtn');
const cancelFullscreenCameraBtn = document.getElementById('cancelFullscreenCameraBtn');
const toggleFrontCameraBtn = document.getElementById('toggleFrontCameraBtn');
const loginScreen = document.getElementById('loginScreen');
const appShell = document.getElementById('appShell');
const loginForm = document.getElementById('loginForm');
const loginInstitution = document.getElementById('loginInstitution');
const loginAgent = document.getElementById('loginAgent');
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
const toggleChartsBtn = document.getElementById('toggleChartsBtn');
const toggleExternalReportsBtn = document.getElementById('toggleExternalReportsBtn');
const toggleAdminPanelBtn = document.getElementById('toggleAdminPanelBtn');
const dashboardFiltersPanel = document.getElementById('dashboardFiltersPanel');
const dashboardChartsPanel = document.getElementById('dashboardChartsPanel');
const externalReportsPanel = document.getElementById('externalReportsPanel');
const externalReportsList = document.getElementById('externalReportsList');
const externalReportsCount = document.getElementById('externalReportsCount');
const adminPanel = document.getElementById('adminPanel');
const adminInstitutionFilter = document.getElementById('adminInstitutionFilter');
const adminUsersByInstitution = document.getElementById('adminUsersByInstitution');
const adminUserForm = document.getElementById('adminUserForm');
const adminFormTitle = document.getElementById('adminFormTitle');
const adminEditingUserId = document.getElementById('adminEditingUserId');
const adminUserInstitution = document.getElementById('adminUserInstitution');
const adminUserName = document.getElementById('adminUserName');
const adminUserPassword = document.getElementById('adminUserPassword');
const adminPasswordHint = document.getElementById('adminPasswordHint');
const adminUserIsAdmin = document.getElementById('adminUserIsAdmin');
const adminUserCanVerify = document.getElementById('adminUserCanVerify');
const adminSaveUserBtn = document.getElementById('adminSaveUserBtn');
const adminCancelEditBtn = document.getElementById('adminCancelEditBtn');
const adminUserSuccess = document.getElementById('adminUserSuccess');
const adminUserError = document.getElementById('adminUserError');
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
const savingStepText = document.getElementById('savingStepText');
const savingProgressBar = document.getElementById('savingProgressBar');
const savingProgressPercent = document.getElementById('savingProgressPercent');
const actionUnavailableModal = document.getElementById('actionUnavailableModal');
const actionUnavailableTitle = document.getElementById('actionUnavailableTitle');
const actionUnavailableMessage = document.getElementById('actionUnavailableMessage');
const actionUnavailableOkBtn = document.getElementById('actionUnavailableOkBtn');
const deleteConfirmModal = document.getElementById('deleteConfirmModal');
const deleteConfirmPassword = document.getElementById('deleteConfirmPassword');
const deletePasswordError = document.getElementById('deletePasswordError');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const externalDeleteConfirmModal = document.getElementById('externalDeleteConfirmModal');
const externalDeleteConfirmMessage = document.getElementById('externalDeleteConfirmMessage');
const externalDeleteConfirmPassword = document.getElementById('externalDeleteConfirmPassword');
const externalDeletePasswordError = document.getElementById('externalDeletePasswordError');
const cancelExternalDeleteBtn = document.getElementById('cancelExternalDeleteBtn');
const confirmExternalDeleteBtn = document.getElementById('confirmExternalDeleteBtn');
const photoModal = document.getElementById('photoModal');
const photoModalImage = document.getElementById('photoModalImage');
const photoModalClose = document.getElementById('photoModalClose');
const openActivityReportBtn = document.getElementById('openActivityReportBtn');
const backToDashboardFromActivity = document.getElementById('backToDashboardFromActivity');
const activityReportDateInput = document.getElementById('activityReportDate');
const activityAgentsListEl = document.getElementById('activityAgentsList');
const activityAgentInstitutionSelect = document.getElementById('activityAgentInstitution');
const activityAgentInput = document.getElementById('activityAgentInput');
const addActivityAgentBtn = document.getElementById('addActivityAgentBtn');
const generateActivityReportBtn = document.getElementById('generateActivityReportBtn');
const activityRecordsSummary = document.getElementById('activityRecordsSummary');
const activityAgentDatalist = document.getElementById('activityAgentDatalist');
const activityPhotoInput = document.getElementById('activityPhotoInput');
const activityPhotoList = document.getElementById('activityPhotoList');
const activityFieldNotesInput = document.getElementById('activityFieldNotes');
const chartByDay = document.getElementById('chartByDay');
const chartByInstitution = document.getElementById('chartByInstitution');
const chartByAgent = document.getElementById('chartByAgent');
const chartByLocation = document.getElementById('chartByLocation');
const chartRecurrenceRate = document.getElementById('chartRecurrenceRate');
const technicalReportModal = document.getElementById('technicalReportModal');
const technicalReportDriverInfo = document.getElementById('technicalReportDriverInfo');
const technicalReportNumberInput = document.getElementById('technicalReportNumber');
const technicalReportIssuedAtInput = document.getElementById('technicalReportIssuedAt');
const techDriverNameInput = document.getElementById('techDriverName');
const techDriverCpfInput = document.getElementById('techDriverCpf');
const techDriverPhoneInput = document.getElementById('techDriverPhone');
const techVehiclePlateInput = document.getElementById('techVehiclePlate');
const techVehicleModelInput = document.getElementById('techVehicleModel');
const techVehicleColorInput = document.getElementById('techVehicleColor');
const techVehicleYearInput = document.getElementById('techVehicleYear');
const techTextSection6Input = document.getElementById('techTextSection6');
const techTextSection7Input = document.getElementById('techTextSection7');
const techTextSection8Input = document.getElementById('techTextSection8');
const techTextSection9Input = document.getElementById('techTextSection9');
const techTextSection10Input = document.getElementById('techTextSection10');
const techExtraPhotosInput = document.getElementById('techExtraPhotosInput');
const techExtraPhotosList = document.getElementById('techExtraPhotosList');
const technicalReportGenerateBtn = document.getElementById('technicalReportGenerateBtn');
const technicalReportCloseBtn = document.getElementById('technicalReportCloseBtn');

let allRecords = [];
let currentlyEditingIndex = -1;
let stream = null;
let photosData = [];
let publicReportPhotos = [];
let isRecordSaveInProgress = false;
let publicReports = [];
let managedUsers = [];
let pendingDeleteIndex = -1;
let pendingExternalDeleteDocId = '';
const externalStatusPanelsOpen = {
  recebida: false,
  analise: false,
  analisada: false,
};
let cameraFacingMode = 'environment'; // 'environment' para traseira, 'user' para frontal
let popupCloseCallback = null;
let latestPublicProtocol = '';
let currentAppVersion = '';
let technicalReportContext = null;
let technicalReportExtraPhotos = [];
const usedOccurrenceNumbers = new Set();
const noPlateLabel = 'VEÍCULO SEM PLACA';
const recurrenceWindowMs = 2 * 60 * 60 * 1000;
const publicReportNotificationEmail = 'apa.delta@icmbio.gov.br';
const maxEmailPdfBase64Length = 5_000_000;
const maxRecordPdfPhotos = 8;
const publicReportsCollection = 'records';
const publicReportsCacheKey = 'publicReportsCache';
const publicReportsSeenKey = 'publicReportsSeenProtocols';
const usersCollection = 'records';
const userRecordType = 'system_user';
const usersCacheKey = 'systemUsersCache';
const sessionUserIdKey = 'loggedUserId';
const adminNames = new Set(['RENAN ARAUJO E SILVA', 'ADRIANO RICARDO DAMATO ROCHA DE SOUZA']);
const institutions = {
  icmbio: 'Instituto Chico Mendes - ICMBio',
  semarh: 'Secretaria de Meio Ambiente e Recursos Hídridos do Estado do Piauí - SEMARH',
  pmpi: 'Polícia Militar do Estado do Piauí - PMPI',
  prefeitura: 'Prefeitura Municipal de Luís Correia',
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

const scriptUrl = 'https://script.google.com/macros/s/AKfycbx85Y2cdD-NjXKb_vJvbQHoQJd3S3BZs7gKfxgDbfc4BNkuYHPcBtIfL9zpiqqwInm8/exec';
const firebaseConfig = {
  apiKey: 'AIzaSyAh3dTQ4EeibeakaiCE5fTUpDxplrJDFK4',
  authDomain: 'veiculosnapraianao.firebaseapp.com',
  projectId: 'veiculosnapraianao',
  storageBucket: 'veiculosnapraianao.appspot.com',
  messagingSenderId: '868609693685',
  appId: '1:868609693685:web:4b7feeccdeba623af6b2bc',
};

const storageKey = 'fiscalRecords';
const backupStorageKey = 'fiscalRecordsBackup';
const sessionKey = 'loggedAgent';
const sessionInstitutionKey = 'loggedInstitution';
const migrationKey = 'recordsMigratedToFirestore';
const indexedDbName = 'veiculosNaPraiaNaoOffline';
const indexedDbVersion = 1;
const indexedDbStoreName = 'recordsCache';
let db = null;
let storage = null;
let auth = null;
let firestoreReadBlocked = false;
const dashboardCharts = {
  byDay: null,
  byInstitution: null,
  byAgent: null,
  byLocation: null,
  recurrenceRate: null,
};

const chartPalette = ['#588526', '#7ca136', '#9bc441', '#3f6f1d', '#b7d86b', '#2f5522', '#d9eab3'];

const updateFooterVersion = async () => {
  const versionEl = document.getElementById('appVersion');

  try {
    const response = await fetch('/version.txt', { cache: 'no-store' });
    if (!response.ok) throw new Error(`Falha ao carregar versão (${response.status})`);
    const version = (await response.text()).trim();
    currentAppVersion = version || '';
    if (versionEl) {
      versionEl.textContent = currentAppVersion ? `v${currentAppVersion}` : '';
    }
  } catch (error) {
    currentAppVersion = '';
    if (versionEl) {
      versionEl.textContent = '';
    }
  }
};

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

const buildCapturedPhotoFileName = () => {
  const occurrence = (occurrenceNumberInput?.value || 'registro').trim().replace(/[^a-zA-Z0-9_-]/g, '_');
  return `camera_${occurrence}_${Date.now()}.jpg`;
};

const withTimeout = (promise, timeoutMs, timeoutMessage) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(timeoutMessage || 'Tempo limite excedido.')), timeoutMs)
    ),
  ]);

const firebaseWriteTimeoutMs = 15000;
const storageUploadTimeoutMs = 90000;
const storageDownloadUrlTimeoutMs = 15000;
const googleSheetsTimeoutMs = 30000;
const uploadImageMaxWidth = 1600;
const uploadImageMaxHeight = 1600;
const uploadImageQuality = 0.82;
const uploadImageMimeType = 'image/jpeg';

const getErrorMessage = (error, fallbackMessage = 'Erro desconhecido.') => {
  if (error && typeof error.message === 'string' && error.message.trim()) {
    return error.message.trim();
  }
  return fallbackMessage;
};

const buildRecordSyncErrorMessage = (issues) => {
  const details = Array.from(new Set((issues || []).filter(Boolean)));
  if (!details.length) {
    return 'Registro salvo localmente, mas a sincronização online falhou. Verifique a conexão e tente reenviar.';
  }
  return `Registro salvo localmente, mas a sincronização online falhou (${details.join(' | ')}). Verifique a conexão e toque em "Tentar Reenviar" para enviar novamente.`;
};

const dataUrlToBlob = (dataUrl) => {
  const parts = String(dataUrl || '').split(',');
  if (parts.length < 2) {
    throw new Error('Imagem inválida para salvar no dispositivo.');
  }
  const mimeMatch = parts[0].match(/data:(.*?);base64/);
  const mimeType = mimeMatch?.[1] || 'image/jpeg';
  const binary = atob(parts[1]);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new Blob([bytes], { type: mimeType });
};

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(event.target?.result || '');
    reader.onerror = () => reject(new Error('Falha ao ler imagem.'));
    reader.readAsDataURL(file);
  });

const optimizeImageDataUrl = (dataUrl, options = {}) =>
  new Promise((resolve, reject) => {
    if (!dataUrl || !String(dataUrl).startsWith('data:image')) {
      resolve(dataUrl);
      return;
    }

    const {
      maxWidth = uploadImageMaxWidth,
      maxHeight = uploadImageMaxHeight,
      quality = uploadImageQuality,
      mimeType = uploadImageMimeType,
    } = options;

    const image = new Image();
    image.onload = () => {
      const widthScale = maxWidth / image.width;
      const heightScale = maxHeight / image.height;
      const scale = Math.min(1, widthScale, heightScale);
      const targetWidth = Math.max(1, Math.round(image.width * scale));
      const targetHeight = Math.max(1, Math.round(image.height * scale));

      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const context = canvas.getContext('2d');
      if (!context) {
        reject(new Error('Falha ao preparar imagem para upload.'));
        return;
      }

      context.drawImage(image, 0, 0, targetWidth, targetHeight);
      try {
        const optimizedDataUrl = canvas.toDataURL(mimeType, quality);
        resolve(optimizedDataUrl || dataUrl);
      } catch (error) {
        reject(new Error('Falha ao compactar imagem para upload.'));
      }
    };
    image.onerror = () => reject(new Error('Falha ao carregar imagem para upload.'));
    image.src = dataUrl;
  });

const optimizePhotoFileForUpload = async (file) => {
  const fileDataUrl = await readFileAsDataUrl(file);
  return optimizeImageDataUrl(fileDataUrl);
};

const savePhotoToDevice = async (dataUrl, fileName) => {
  if (!dataUrl || !String(dataUrl).startsWith('data:image')) {
    return false;
  }

  try {
    const blob = dataUrlToBlob(dataUrl);
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName || `foto_${Date.now()}.jpg`;
    link.rel = 'noopener';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    return true;
  } catch (error) {
    return false;
  }
};

const isRecordSyncPending = (record) => Boolean(record?.syncPending);

const getRecordSyncIssuePreview = (record) => {
  const issues = Array.isArray(record?.syncIssues) ? record.syncIssues.filter(Boolean) : [];
  if (!issues.length) return 'Sincronização online pendente.';
  return issues.join(' | ');
};

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
const getLoggedUserId = () => localStorage.getItem(sessionUserIdKey) || '';

const getInstitutionLabel = (institutionKey) => institutions[institutionKey] || '';

const normalizeUpperText = (value) =>
  (value || '')
    .toString()
    .toUpperCase()
    .replace(/\s+/g, ' ')
    .trim();

const toHex = (buffer) =>
  Array.from(new Uint8Array(buffer))
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('');

const randomSalt = (length = 16) => {
  const bytes = new Uint8Array(length);
  window.crypto.getRandomValues(bytes);
  return toHex(bytes);
};

const hashPassword = async (password, salt) => {
  const payload = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await window.crypto.subtle.digest('SHA-256', payload);
  return toHex(digest);
};

const loadUsersFromCache = () => {
  const raw = localStorage.getItem(usersCacheKey);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveUsersToCache = (users = []) => {
  localStorage.setItem(usersCacheKey, JSON.stringify(users));
};

const makeUserDocId = (institutionKey, name) =>
  `${institutionKey}_${normalizeUpperText(name).replace(/[^A-Z0-9]+/g, '_').replace(/^_+|_+$/g, '')}`;

const createManagedUserRecord = async (
  name,
  institutionKey,
  plainPassword,
  { id = '', isAdmin = false, canVerifyExternalReports = false } = {}
) => {
  const normalizedName = normalizeUpperText(name);
  const salt = randomSalt();
  const passwordHash = await hashPassword(plainPassword, salt);
  const userId = id || makeUserDocId(institutionKey, normalizedName);
  return {
    id: userId,
    reportType: userRecordType,
    name: normalizedName,
    institutionKey,
    institutionLabel: getInstitutionLabel(institutionKey),
    passwordSalt: salt,
    passwordHash,
    isAdmin: Boolean(isAdmin),
    canVerifyExternalReports: Boolean(canVerifyExternalReports),
    active: true,
  };
};

const getDefaultUserSeeds = () => {
  const defaults = [];
  icmbioAgents.forEach((name) => {
    const firstName = normalizeText((name || '').split(' ')[0] || '');
    defaults.push({
      name,
      institutionKey: 'icmbio',
      password: `${firstName}2026`,
      isAdmin: adminNames.has(normalizeUpperText(name)),
      canVerifyExternalReports: adminNames.has(normalizeUpperText(name)),
    });
  });

  defaults.push(
    {
      name: 'EQUIPE SEMARH',
      institutionKey: 'semarh',
      password: 'semarh2026',
      isAdmin: false,
      canVerifyExternalReports: false,
    },
    {
      name: 'EQUIPE PMPI',
      institutionKey: 'pmpi',
      password: 'pmpi2026',
      isAdmin: false,
      canVerifyExternalReports: false,
    },
    {
      name: 'EQUIPE PREFEITURA',
      institutionKey: 'prefeitura',
      password: 'prefeitura2026',
      isAdmin: false,
      canVerifyExternalReports: false,
    }
  );

  return defaults;
};

const ensureManagedUsersSeed = async (existingUsers = []) => {
  if (existingUsers.length) return existingUsers;
  const seeds = getDefaultUserSeeds();
  const created = [];

  for (const seed of seeds) {
    const user = await createManagedUserRecord(seed.name, seed.institutionKey, seed.password, {
      isAdmin: seed.isAdmin,
      canVerifyExternalReports: seed.canVerifyExternalReports,
    });
    created.push(user);
  }

  if (db) {
    for (const user of created) {
      try {
        await db
          .collection(usersCollection)
          .doc(user.id)
          .set(
            {
              ...user,
              reportType: userRecordType,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            },
            { merge: true }
          );
      } catch {
        // continua com cache local em caso de falha pontual
      }
    }
  }

  return created;
};

const loadManagedUsersFromFirestore = async () => {
  if (!db) return [];
  try {
    const snapshot = await db
      .collection(usersCollection)
      .where('reportType', '==', userRecordType)
      .limit(500)
      .get();
    return snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter((user) => user && user.name && user.institutionKey);
  } catch {
    return [];
  }
};

const initManagedUsers = async () => {
  const remoteUsers = await loadManagedUsersFromFirestore();
  const fromRemote = remoteUsers.map((user) => ({
    ...user,
    name: normalizeUpperText(user.name),
    institutionLabel: getInstitutionLabel(user.institutionKey),
    isAdmin: Boolean(user.isAdmin),
    canVerifyExternalReports: Boolean(user.canVerifyExternalReports),
    active: user.active !== false,
  }));

  const preparedUsers = await ensureManagedUsersSeed(fromRemote);
  managedUsers = (preparedUsers.length ? preparedUsers : loadUsersFromCache()).map((user) => {
    const shouldBeAdmin = adminNames.has(normalizeUpperText(user.name));
    if (!shouldBeAdmin) return user;
    return {
      ...user,
      isAdmin: true,
      canVerifyExternalReports: true,
    };
  });

  if (db) {
    const usersToEnforce = managedUsers.filter((user) => adminNames.has(normalizeUpperText(user.name)));
    for (const user of usersToEnforce) {
      try {
        await db
          .collection(usersCollection)
          .doc(user.id)
          .set(
            {
              isAdmin: true,
              canVerifyExternalReports: true,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            },
            { merge: true }
          );
      } catch {
        // segue sem bloquear carregamento
      }
    }
  }

  saveUsersToCache(managedUsers);
};

const getLoggedManagedUser = () => {
  const byId = managedUsers.find((user) => user.id === getLoggedUserId());
  if (byId) return byId;
  const loggedName = normalizeUpperText(getLoggedAgentName());
  const loggedInstitution = getLoggedInstitutionKey();
  return managedUsers.find(
    (user) =>
      normalizeUpperText(user.name) === loggedName &&
      user.institutionKey === loggedInstitution &&
      user.active !== false
  );
};

const isAdminUser = () => Boolean(getLoggedManagedUser()?.isAdmin);
const canManageExternalReports = () => {
  const user = getLoggedManagedUser();
  return Boolean(user?.isAdmin || user?.canVerifyExternalReports);
};

const verifyManagedUserPassword = async (user, plainPassword) => {
  if (!user || !plainPassword) return false;
  if (!user.passwordSalt || !user.passwordHash) return false;
  const hash = await hashPassword(plainPassword, user.passwordSalt);
  return hash === user.passwordHash;
};

const getCurrentLoginAgent = () => (loginAgent?.value || '').trim();

const findManagedUser = (institutionKey, agentName) => {
  const normalizedName = normalizeUpperText(agentName);
  return managedUsers.find(
    (user) =>
      user.institutionKey === institutionKey &&
      normalizeUpperText(user.name) === normalizedName &&
      user.active !== false
  );
};

const normalizeProtocol = (value) =>
  (value || '')
    .toString()
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '');

const getPublicReportDocId = (protocol) => normalizeProtocol(protocol).replace(/[^A-Z0-9_-]/g, '_');

const getPublicReportStatusValue = (status) => {
  const normalized = normalizeText(status);
  if (normalized === 'recebida') return 'Recebida';
  if (normalized === 'em analise' || normalized === 'em analise') return 'Em análise';
  if (normalized === 'analisada') return 'Analisada';
  return 'Recebida';
};

const getExternalStatusMeta = (status) => {
  const normalized = getPublicReportStatusValue(status);
  if (normalized === 'Recebida') {
    return { key: 'recebida', label: 'Recebidas', badgeClass: 'badge-recebida' };
  }
  if (normalized === 'Em análise') {
    return { key: 'analise', label: 'Em análise', badgeClass: 'badge-analise' };
  }
  return { key: 'analisada', label: 'Analisadas', badgeClass: 'badge-analisada' };
};

const buildPublicReportFirestorePayload = (payload) => ({
  reportType: 'public_denuncia',
  protocol: normalizeProtocol(payload.protocol),
  date: payload.date || '',
  time: payload.time || '',
  location: payload.location || '',
  vehiclePlate: payload.vehiclePlate || '',
  vehicleModel: payload.vehicleModel || '',
  vehicleColor: payload.vehicleColor || '',
  vehicleYear: payload.vehicleYear || '',
  infractorName: payload.infractorName || '',
  observations: payload.observations || '',
  reporterContact: payload.reporterContact || '',
  photoUrls: Array.isArray(payload.photoUrls)
    ? payload.photoUrls.filter((url) => typeof url === 'string' && url.startsWith('http')).slice(0, 20)
    : [],
  status: getPublicReportStatusValue(payload.status || 'Recebida'),
  managerNote: '',
  managedByAgent: '',
  managedByInstitution: '',
  source: payload.source || 'publico',
  timestampIso: payload.timestamp || new Date().toISOString(),
  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
});

const loadPublicReportsFromCache = () => {
  const raw = localStorage.getItem(publicReportsCacheKey);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const savePublicReportsToCache = (reports = []) => {
  localStorage.setItem(publicReportsCacheKey, JSON.stringify(reports));
};

const loadSeenPublicReportProtocols = () => {
  const raw = localStorage.getItem(publicReportsSeenKey);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item) => normalizeProtocol(item)).filter(Boolean);
  } catch {
    return [];
  }
};

const saveSeenPublicReportProtocols = (protocols = []) => {
  const unique = Array.from(
    new Set(
      (protocols || [])
        .map((item) => normalizeProtocol(item))
        .filter(Boolean)
    )
  ).slice(0, 500);
  localStorage.setItem(publicReportsSeenKey, JSON.stringify(unique));
};

const markPublicReportsAsSeen = (reports = []) => {
  const current = new Set(loadSeenPublicReportProtocols());
  reports.forEach((report) => {
    const protocol = normalizeProtocol(report?.protocol);
    if (protocol) current.add(protocol);
  });
  saveSeenPublicReportProtocols(Array.from(current));
};

const getUnreadPublicReportsCount = (reports = []) => {
  const seen = new Set(loadSeenPublicReportProtocols());
  return reports.reduce((count, report) => {
    const protocol = normalizeProtocol(report?.protocol);
    if (!protocol) return count;
    return seen.has(protocol) ? count : count + 1;
  }, 0);
};

const updateExternalReportsToggleLabel = () => {
  if (!toggleExternalReportsBtn || !canManageExternalReports()) return;
  const isOpen = externalReportsPanel && !externalReportsPanel.classList.contains('hidden');
  const unreadCount = isOpen ? 0 : getUnreadPublicReportsCount(publicReports);
  const baseLabel = isOpen ? 'Ocultar denúncias externas' : 'Denúncias externas';

  if (unreadCount > 0) {
    toggleExternalReportsBtn.innerHTML = `${baseLabel} <span class="notification-badge" aria-label="${unreadCount} novas denúncias">${unreadCount}</span>`;
    return;
  }

  toggleExternalReportsBtn.textContent = baseLabel;
};

const upsertPublicReportCache = (payload) => {
  const protocol = normalizeProtocol(payload.protocol);
  if (!protocol) return;

  const current = loadPublicReportsFromCache();
  const next = current.filter((item) => normalizeProtocol(item.protocol) !== protocol);
  next.push({
    reportType: 'public_denuncia',
    protocol,
    date: payload.date || '',
    time: payload.time || '',
    location: payload.location || '',
    vehiclePlate: payload.vehiclePlate || '',
    observations: payload.observations || '',
    photoUrls: Array.isArray(payload.photoUrls)
      ? payload.photoUrls.filter((url) => typeof url === 'string' && url.startsWith('http')).slice(0, 20)
      : [],
    status: 'Recebida',
    managerNote: '',
    managedByAgent: '',
    timestampIso: payload.timestamp || new Date().toISOString(),
  });

  next.sort((a, b) => (b.timestampIso || '').localeCompare(a.timestampIso || ''));
  savePublicReportsToCache(next.slice(0, 300));
};

const savePublicReportToFirestore = async (payload) => {
  if (!db) return;
  const protocol = normalizeProtocol(payload.protocol);
  if (!protocol) return;

  const docId = getPublicReportDocId(protocol);
  const data = buildPublicReportFirestorePayload(payload);
  await db.collection(publicReportsCollection).doc(docId).set(data, { merge: true });
};

const loadPublicReportsFromFirestore = async () => {
  if (!db) return [];
  try {
    const snapshot = await db
      .collection(publicReportsCollection)
      .where('reportType', '==', 'public_denuncia')
      .limit(300)
      .get();
    const rows = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return rows.sort((a, b) => {
      const av = (a.timestampIso || '').toString();
      const bv = (b.timestampIso || '').toString();
      return bv.localeCompare(av);
    });
  } catch (error) {
    return [];
  }
};

const renderExternalReportsPanel = () => {
  if (!externalReportsList) return;

  externalReportsList.innerHTML = '';

  const statusCounters = {
    recebida: 0,
    analise: 0,
    analisada: 0,
  };
  publicReports.forEach((report) => {
    const meta = getExternalStatusMeta(report.status || 'Recebida');
    statusCounters[meta.key] += 1;
  });

  if (externalReportsCount) {
    externalReportsCount.textContent = `${publicReports.length} denúncias (R: ${statusCounters.recebida} | EA: ${statusCounters.analise} | A: ${statusCounters.analisada})`;
  }

  if (!publicReports.length) {
    externalReportsList.innerHTML = '<p>Nenhuma denúncia externa encontrada.</p>';
    return;
  }

  const columns = [
    { key: 'recebida', label: 'Recebidas' },
    { key: 'analise', label: 'Em análise' },
    { key: 'analisada', label: 'Analisadas' },
  ];
  const grouped = {
    recebida: [],
    analise: [],
    analisada: [],
  };

  publicReports.forEach((report) => {
    const meta = getExternalStatusMeta(report.status || 'Recebida');
    grouped[meta.key].push(report);
  });

  columns.forEach((column) => {
    const columnWrap = document.createElement('section');
    columnWrap.className = 'external-status-column';

    const isOpen = Boolean(externalStatusPanelsOpen[column.key]);

    const titleButton = document.createElement('button');
    titleButton.type = 'button';
    titleButton.className = 'external-status-toggle';
    titleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    titleButton.innerHTML = `
      <span>${column.label} <span class="external-status-count">(${grouped[column.key].length})</span></span>
      <span class="external-status-chevron ${isOpen ? 'is-open' : ''}" aria-hidden="true">▾</span>
    `;
    titleButton.addEventListener('click', () => {
      externalStatusPanelsOpen[column.key] = !externalStatusPanelsOpen[column.key];
      const nowOpen = Boolean(externalStatusPanelsOpen[column.key]);
      titleButton.setAttribute('aria-expanded', nowOpen ? 'true' : 'false');
      list.classList.toggle('hidden', !nowOpen);
      const chevron = titleButton.querySelector('.external-status-chevron');
      if (chevron) {
        chevron.classList.toggle('is-open', nowOpen);
      }
    });
    columnWrap.appendChild(titleButton);

    const list = document.createElement('div');
    list.className = 'external-status-list';
    list.classList.toggle('hidden', !isOpen);

    if (!grouped[column.key].length) {
      const empty = document.createElement('p');
      empty.className = 'external-status-empty';
      empty.textContent = 'Nenhuma denúncia nesta janela.';
      list.appendChild(empty);
      columnWrap.appendChild(list);
      externalReportsList.appendChild(columnWrap);
      return;
    }

    grouped[column.key].forEach((report) => {
      const card = document.createElement('div');
      card.className = 'external-report-item';

      const statusValue = getPublicReportStatusValue(report.status || 'Recebida');
      const statusMeta = getExternalStatusMeta(statusValue);
      const noteValue = (report.managerNote || '').trim();
      const safeNoteValue = noteValue
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      const managedBy = (report.managedByAgent || '').trim();
      const canManage = canManageExternalReports();

      card.innerHTML = `
        <div class="external-report-header">
          <strong>Protocolo ${report.protocol || '--'}</strong>
          <span class="badge ${statusMeta.badgeClass}">${statusValue}</span>
        </div>
        <div class="external-report-meta">
          <span><strong>Data:</strong> ${report.date || '--'} ${report.time ? `• ${report.time}` : ''}</span>
          <span><strong>Local:</strong> ${report.location || '--'}</span>
          <span><strong>Placa:</strong> ${report.vehiclePlate || '--'}</span>
          <span><strong>Relato:</strong> ${report.observations || '--'}</span>
        </div>
        <div class="external-report-manage">
          <select class="external-report-status" ${canManage ? '' : 'disabled'}>
            <option value="Recebida" ${statusValue === 'Recebida' ? 'selected' : ''}>Recebida</option>
            <option value="Em análise" ${statusValue === 'Em análise' ? 'selected' : ''}>Em análise</option>
            <option value="Analisada" ${statusValue === 'Analisada' ? 'selected' : ''}>Analisada</option>
          </select>
          <button type="button" class="ghost-btn external-report-save" ${canManage ? '' : 'disabled'}>Salvar</button>
        </div>
        <div class="external-report-note-row">
          <label class="external-report-note-label" for="external-note-${statusMeta.key}-${report.protocol || 'sem-protocolo'}">Recado para o denunciante</label>
          <textarea
            id="external-note-${statusMeta.key}-${report.protocol || 'sem-protocolo'}"
            class="external-report-note"
            rows="2"
            placeholder="Escreva um recado para aparecer no acompanhamento por protocolo"
            ${canManage ? '' : 'disabled'}
          >${safeNoteValue}</textarea>
        </div>
        <div class="external-report-actions">
          <button type="button" class="ghost-btn external-report-pdf">Gerar PDF</button>
          ${canManage ? '<button type="button" class="external-report-delete">Excluir</button>' : ''}
        </div>
        <div class="external-report-meta">
          <span><strong>Último agente:</strong> ${managedBy || '--'}</span>
        </div>
      `;

      const pdfBtn = card.querySelector('.external-report-pdf');
      if (pdfBtn) {
        pdfBtn.addEventListener('click', async () => {
          pdfBtn.disabled = true;
          const originalLabel = pdfBtn.textContent;
          pdfBtn.textContent = 'Gerando PDF...';
          try {
            await generateExternalReportPdf(report);
          } catch (error) {
            showAlert(alertError, 'Não foi possível gerar o PDF desta denúncia.');
          } finally {
            pdfBtn.disabled = false;
            pdfBtn.textContent = originalLabel;
          }
        });
      }

      if (canManage) {
        const statusSelect = card.querySelector('.external-report-status');
        const noteInput = card.querySelector('.external-report-note');
        const saveBtn = card.querySelector('.external-report-save');
        const deleteBtn = card.querySelector('.external-report-delete');

        if (saveBtn && statusSelect && noteInput) {
          saveBtn.addEventListener('click', async () => {
            saveBtn.disabled = true;
            try {
              const status = getPublicReportStatusValue(statusSelect.value);
              const note = (noteInput.value || '').trim();
              const docId = report.id || getPublicReportDocId(report.protocol || '');
              if (!docId) throw new Error('Protocolo inválido.');

              await db.collection(publicReportsCollection).doc(docId).set(
                {
                  status,
                  managerNote: note,
                  managedByAgent: getLoggedAgentName() || '',
                  managedByInstitution: getInstitutionLabel(getLoggedInstitutionKey()) || '',
                  managedAt: new Date().toISOString(),
                  updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                },
                { merge: true }
              );

              report.status = status;
              report.managerNote = note;
              report.managedByAgent = getLoggedAgentName() || '';
              showAlert(alertSuccess, `Denúncia ${report.protocol || ''} atualizada.`);
              renderExternalReportsPanel();
            } catch (error) {
              showAlert(alertError, 'Não foi possível salvar a atualização da denúncia.');
            } finally {
              saveBtn.disabled = false;
            }
          });
        }

        if (deleteBtn) {
          deleteBtn.addEventListener('click', () => {
            openExternalDeleteModal(report);
          });
        }
      }

      list.appendChild(card);
    });

    columnWrap.appendChild(list);
    externalReportsList.appendChild(columnWrap);
  });
};

const openExternalDeleteModal = (report) => {
  if (!canManageExternalReports()) {
    showAlert(alertError, 'Você não tem permissão para excluir denúncias externas.');
    return;
  }

  const docId = report?.id || getPublicReportDocId(report?.protocol || '');
  if (!docId) {
    showAlert(alertError, 'Não foi possível identificar esta denúncia para exclusão.');
    return;
  }

  pendingExternalDeleteDocId = docId;
  if (externalDeleteConfirmMessage) {
    externalDeleteConfirmMessage.textContent = `Para excluir a denúncia ${report?.protocol || '--'}, digite sua senha:`;
  }
  if (externalDeleteConfirmPassword) {
    externalDeleteConfirmPassword.value = '';
  }
  if (externalDeletePasswordError) {
    externalDeletePasswordError.style.display = 'none';
    externalDeletePasswordError.textContent = '';
  }
  if (externalDeleteConfirmModal) {
    externalDeleteConfirmModal.classList.remove('hidden');
  }
  document.body.classList.add('modal-open');
  externalDeleteConfirmPassword?.focus();
};

const closeExternalDeleteModal = () => {
  if (externalDeleteConfirmModal) {
    externalDeleteConfirmModal.classList.add('hidden');
  }
  document.body.classList.remove('modal-open');
  pendingExternalDeleteDocId = '';
  if (externalDeleteConfirmPassword) {
    externalDeleteConfirmPassword.value = '';
  }
  if (externalDeletePasswordError) {
    externalDeletePasswordError.style.display = 'none';
    externalDeletePasswordError.textContent = '';
  }
};

const confirmExternalDeleteReport = async () => {
  const loggedUser = getLoggedManagedUser();
  const password = (externalDeleteConfirmPassword?.value || '').trim();

  if (!pendingExternalDeleteDocId) {
    showAlert(alertError, 'Nenhuma denúncia selecionada para exclusão.');
    closeExternalDeleteModal();
    return;
  }

  if (!password) {
    if (externalDeletePasswordError) {
      externalDeletePasswordError.textContent = 'Digite sua senha';
      externalDeletePasswordError.style.display = 'block';
    }
    return;
  }

  const validPassword = await verifyManagedUserPassword(loggedUser, password);
  if (!validPassword) {
    if (externalDeletePasswordError) {
      externalDeletePasswordError.textContent = 'Senha incorreta';
      externalDeletePasswordError.style.display = 'block';
    }
    return;
  }

  const target = publicReports.find((item) => (item.id || getPublicReportDocId(item.protocol || '')) === pendingExternalDeleteDocId);
  const targetProtocol = target?.protocol || '--';

  try {
    if (db) {
      await db.collection(publicReportsCollection).doc(pendingExternalDeleteDocId).delete();
    }

    publicReports = publicReports.filter(
      (item) => (item.id || getPublicReportDocId(item.protocol || '')) !== pendingExternalDeleteDocId
    );

    const cached = loadPublicReportsFromCache().filter(
      (item) => (item.id || getPublicReportDocId(item.protocol || '')) !== pendingExternalDeleteDocId
    );
    savePublicReportsToCache(cached);

    renderExternalReportsPanel();
    updateExternalReportsToggleLabel();
    closeExternalDeleteModal();
    showAlert(alertSuccess, `Denúncia ${targetProtocol} excluída com sucesso.`);
  } catch (error) {
    showAlert(alertError, 'Não foi possível excluir a denúncia externa agora.');
  }
};

const refreshExternalReports = async () => {
  if (!canManageExternalReports()) {
    publicReports = [];
    renderExternalReportsPanel();
    return;
  }
  const remote = await loadPublicReportsFromFirestore();
  const cached = loadPublicReportsFromCache();
  const merged = new Map();
  [...cached, ...remote].forEach((item) => {
    const key = getPublicReportDocId(item.protocol || item.id || '');
    if (!key) return;
    merged.set(key, { ...item, id: item.id || key });
  });
  publicReports = Array.from(merged.values()).sort((a, b) => {
    const av = (a.timestampIso || '').toString();
    const bv = (b.timestampIso || '').toString();
    return bv.localeCompare(av);
  });
  renderExternalReportsPanel();
  updateExternalReportsToggleLabel();
};

const updateExternalReportsAccess = () => {
  const canManage = canManageExternalReports();
  if (toggleExternalReportsBtn) {
    toggleExternalReportsBtn.classList.toggle('hidden', !canManage);
  }
  if (!canManage && externalReportsPanel) {
    externalReportsPanel.classList.add('hidden');
    if (toggleExternalReportsBtn) {
      toggleExternalReportsBtn.textContent = 'Denúncias externas';
    }
    return;
  }
  updateExternalReportsToggleLabel();
};

const renderPublicTrackResult = (report, protocol) => {
  if (!trackProtocolResult) return;
  if (!report) {
    trackProtocolResult.innerHTML = `<p>Protocolo ${protocol} não encontrado.</p>`;
    return;
  }

  const status = getPublicReportStatusValue(report.status || 'Recebida');
  const note = (report.managerNote || '').trim() || 'Sem recado no momento.';
  const agent = (report.managedByAgent || '').trim() || '--';

  trackProtocolResult.innerHTML = `
    <p><strong>Protocolo:</strong> ${report.protocol || protocol}</p>
    <p><strong>Status:</strong> ${status}</p>
    <p><strong>Recado da equipe:</strong> ${note}</p>
    <p><strong>Agente responsável:</strong> ${agent}</p>
  `;
};

const findPublicReportByProtocol = async (protocolValue) => {
  const protocol = normalizeProtocol(protocolValue);
  if (!protocol) return null;
  if (!db) return null;

  const byId = await db.collection(publicReportsCollection).doc(getPublicReportDocId(protocol)).get();
  if (byId.exists) {
    const data = byId.data() || {};
    if (data.reportType === 'public_denuncia') {
      return { id: byId.id, ...data };
    }
  }

  const query = await db
    .collection(publicReportsCollection)
    .where('reportType', '==', 'public_denuncia')
    .where('protocol', '==', protocol)
    .limit(1)
    .get();

  if (!query.empty) {
    return { id: query.docs[0].id, ...query.docs[0].data() };
  }

  const cached = loadPublicReportsFromCache().find(
    (item) => normalizeProtocol(item.protocol) === protocol
  );
  return cached || null;
};

const handleTrackProtocol = async () => {
  const protocol = normalizeProtocol(trackProtocolInput?.value || '');
  if (!protocol) {
    if (trackProtocolResult) {
      trackProtocolResult.innerHTML = '<p>Informe um protocolo para consulta.</p>';
    }
    return;
  }

  if (trackProtocolBtn) trackProtocolBtn.disabled = true;
  if (trackProtocolResult) trackProtocolResult.innerHTML = '<p>Consultando...</p>';

  try {
    const report = await findPublicReportByProtocol(protocol);
    renderPublicTrackResult(report, protocol);
  } catch (error) {
    if (trackProtocolResult) {
      trackProtocolResult.innerHTML = '<p>Não foi possível consultar agora. Tente novamente.</p>';
    }
  } finally {
    if (trackProtocolBtn) trackProtocolBtn.disabled = false;
  }
};

const canManageRecord = (record) => {
  const logged = normalizeText(getLoggedAgentName());
  if (!logged) return false;
  if (isAdminUser()) return true;
  return normalizeText(record.agent) === logged;
};

const getDriverKey = (record) => {
  const driverName = normalizeText(record.infractorName || '');
  const cpf = (record.infractorDoc || '').replace(/\D/g, '');
  if (cpf) return `cpf:${cpf}`;
  if (driverName) return `name:${driverName}`;

  const fallbackKey = [
    record?.id || '',
    record?.occurrenceNumber || '',
    record?.date || '',
    record?.time || '',
    normalizeText(record?.agent || ''),
  ]
    .join('|')
    .trim();

  return `no_recurrence:${fallbackKey || 'sem_identificacao'}`;
};

const getRecordTimestamp = (record) => {
  const dateValue = (record.date || '').trim();
  if (!dateValue) return null;
  const timeValue = (record.time || '00:00').trim() || '00:00';
  const parsed = new Date(`${dateValue}T${timeValue}`);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.getTime();
};

const getFirestoreDateValue = (value) => {
  if (!value) return null;
  if (typeof value.toDate === 'function') {
    const dateObj = value.toDate();
    return Number.isFinite(dateObj?.getTime?.()) ? dateObj.getTime() : null;
  }
  if (value?.seconds && Number.isFinite(value.seconds)) {
    return value.seconds * 1000;
  }
  if (typeof value === 'string' || value instanceof Date || typeof value === 'number') {
    const parsed = new Date(value).getTime();
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};

const getRecordCreatedAtTimestamp = (record) => {
  const candidates = [record?.timestamp, record?.createdAt, record?.createdAtLocal, record?.updatedAt];
  for (const candidate of candidates) {
    const parsed = getFirestoreDateValue(candidate);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
};

const hasValidRecurrence = (records) => {
  if (!records || records.length < 2) return false;

  const timestamps = records
    .map((record) => getRecordTimestamp(record) ?? getRecordCreatedAtTimestamp(record))
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => a - b);

  if (timestamps.length < 2) return false;

  for (let index = 1; index < timestamps.length; index += 1) {
    const delta = timestamps[index] - timestamps[index - 1];
    if (delta >= recurrenceWindowMs) {
      return true;
    }
  }

  return false;
};

const isFirebaseConfigured = () =>
  Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);

const initFirebase = () => {
  if (!window.firebase || !isFirebaseConfigured()) return;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  auth = firebase.auth();
  db = firebase.firestore();
  storage = firebase.storage();
};

const ensureFirebaseAuth = async () => {
  if (!auth) return;
  if (auth.currentUser) return;
  try {
    await auth.signInAnonymously();
  } catch (error) {
    // segue com fallback local se não autenticar
  }
};

const formatTime = (date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const drawRoundedRect = (context, x, y, width, height, radius) => {
  const safeRadius = Math.max(0, Math.min(radius, width / 2, height / 2));
  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  context.lineTo(x + width, y + height - safeRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  context.lineTo(x + safeRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
  context.closePath();
};

const getPhotoOverlayLines = () => {
  const occurrence = (occurrenceNumberInput?.value || '--').trim() || '--';
  const location = (locationInput?.value || '--').trim() || '--';
  const now = new Date();
  const date = formatDateBr((dateInput?.value || '').trim()) || formatDateBr(formatDate(now));
  const time = (timeInput?.value || '').trim() || formatTime(now);
  const agent = (agentSelect?.value || getLoggedAgentName() || '--').trim() || '--';
  const institution =
    (institutionInput?.value || getInstitutionLabel(getLoggedInstitutionKey()) || '--').trim() || '--';

  return [
    'Veículos na Praia Não',
    `Ocorrencia: ${occurrence}`,
    `Data/Hora: ${date}, ${time}`,
    `Localizacao: ${location}`,
    `Agente: ${agent}`,
    `Instituicao: ${institution}`,
  ];
};

const drawPhotoMetadataOverlay = (context, imageWidth, imageHeight) => {
  const lines = getPhotoOverlayLines();
  if (!lines.length) return;

  const baseFontSize = Math.max(17, Math.round(imageWidth * 0.018));
  const lineHeight = Math.round(baseFontSize * 1.25);
  const padding = Math.round(baseFontSize * 0.7);
  const margin = Math.round(baseFontSize * 0.8);
  const boxRadius = Math.max(8, Math.round(baseFontSize * 0.5));

  context.save();
  context.font = `700 ${baseFontSize}px Inter, Arial, sans-serif`;

  const maxTextWidth = lines.reduce(
    (maxWidth, line) => Math.max(maxWidth, context.measureText(line).width),
    0
  );

  const boxWidth = Math.min(imageWidth - margin * 2, Math.ceil(maxTextWidth + padding * 2));
  const boxHeight = Math.ceil(lines.length * lineHeight + padding * 2);
  const boxX = margin;
  const boxY = margin;

  drawRoundedRect(context, boxX, boxY, boxWidth, boxHeight, boxRadius);
  context.fillStyle = 'rgba(0, 0, 0, 0.58)';
  context.fill();

  context.fillStyle = '#ffffff';
  context.textBaseline = 'top';
  lines.forEach((line, index) => {
    context.fillText(line, boxX + padding, boxY + padding + index * lineHeight);
  });

  context.restore();
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
  if (addRecordBtn) {
    addRecordBtn.disabled = Boolean(isSaving);
  }
  if (uploadPhotoBtn) {
    uploadPhotoBtn.disabled = Boolean(isSaving);
  }
};

const updateSavingProgress = (percent, stepText) => {
  const safePercent = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
  if (savingProgressBar) {
    savingProgressBar.style.width = `${safePercent}%`;
  }
  if (savingProgressPercent) {
    savingProgressPercent.textContent = `${safePercent}%`;
  }
  if (savingStepText && stepText) {
    savingStepText.textContent = stepText;
  }
};

const updateLoginAgentMode = () => {
  if (!loginInstitution || !loginAgent || !loginAgentLabel) return;
  const selectedInstitution = loginInstitution.value;
  loginAgentLabel.textContent = 'Nome do Agente';
  loginAgent.required = Boolean(selectedInstitution);
  populateLoginAgents(selectedInstitution);
};

const populateLoginAgents = (institutionKey = loginInstitution?.value || '') => {
  if (!loginAgent) return;
  loginAgent.innerHTML = '<option value="">Selecione um agente</option>';
  if (!institutionKey) return;

  managedUsers
    .filter((user) => user.institutionKey === institutionKey && user.active !== false)
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
    .forEach((user) => {
      const loginOption = document.createElement('option');
      loginOption.value = user.name;
      loginOption.textContent = user.name;
      loginAgent.appendChild(loginOption);
    });
};

const resetAdminUserForm = () => {
  if (!adminUserForm) return;
  adminUserForm.reset();
  if (adminEditingUserId) adminEditingUserId.value = '';
  if (adminFormTitle) adminFormTitle.textContent = 'Cadastrar usuário';
  if (adminSaveUserBtn) adminSaveUserBtn.textContent = 'Salvar usuário';
  if (adminPasswordHint) adminPasswordHint.textContent = 'Ao editar: deixe em branco para manter a senha atual.';
  if (adminUserPassword) adminUserPassword.required = true;
  if (adminCancelEditBtn) adminCancelEditBtn.classList.add('hidden');
};

const getInstitutionKeysByFilter = () => {
  const selectedFilter = (adminInstitutionFilter?.value || '').trim();
  if (selectedFilter) return [selectedFilter];
  return Object.keys(institutions);
};

const renderAdminUsers = () => {
  if (!adminUsersByInstitution) return;
  adminUsersByInstitution.innerHTML = '';

  const institutionKeys = getInstitutionKeysByFilter();
  institutionKeys.forEach((institutionKey) => {
    const section = document.createElement('section');
    section.className = 'admin-institution-section';

    const title = document.createElement('h4');
    title.className = 'admin-institution-title';
    title.textContent = getInstitutionLabel(institutionKey) || institutionKey;
    section.appendChild(title);

    const users = managedUsers
      .filter((user) => user.institutionKey === institutionKey && user.active !== false)
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

    if (!users.length) {
      const empty = document.createElement('p');
      empty.className = 'admin-empty-state';
      empty.textContent = 'Nenhum usuário cadastrado nesta instituição.';
      section.appendChild(empty);
      adminUsersByInstitution.appendChild(section);
      return;
    }

    users.forEach((user) => {
      const item = document.createElement('div');
      item.className = 'admin-user-item';

      const badges = [];
      if (user.isAdmin) badges.push('<span class="admin-user-badge">Administrador</span>');
      if (user.canVerifyExternalReports) badges.push('<span class="admin-user-badge">Verificador</span>');

      item.innerHTML = `
        <div class="admin-user-main">
          <span class="admin-user-name">${user.name}</span>
          <div class="admin-user-badges">${badges.join('')}</div>
        </div>
        <div class="admin-user-actions">
          <button type="button" class="ghost-btn admin-user-edit" data-user-id="${user.id}">Editar</button>
          <button type="button" class="ghost-btn admin-user-delete" data-user-id="${user.id}">Excluir</button>
        </div>
      `;
      section.appendChild(item);
    });

    adminUsersByInstitution.appendChild(section);
  });

  adminUsersByInstitution.querySelectorAll('.admin-user-edit').forEach((button) => {
    button.addEventListener('click', () => {
      const user = managedUsers.find((entry) => entry.id === button.dataset.userId);
      if (!user) return;
      if (adminEditingUserId) adminEditingUserId.value = user.id;
      if (adminUserInstitution) adminUserInstitution.value = user.institutionKey;
      if (adminUserName) adminUserName.value = user.name;
      if (adminUserPassword) {
        adminUserPassword.value = '';
        adminUserPassword.required = false;
      }
      if (adminUserIsAdmin) adminUserIsAdmin.checked = Boolean(user.isAdmin);
      if (adminUserCanVerify) adminUserCanVerify.checked = Boolean(user.canVerifyExternalReports);
      if (adminFormTitle) adminFormTitle.textContent = 'Editar usuário';
      if (adminSaveUserBtn) adminSaveUserBtn.textContent = 'Atualizar usuário';
      if (adminPasswordHint) adminPasswordHint.textContent = 'Deixe em branco para manter a senha atual.';
      if (adminCancelEditBtn) adminCancelEditBtn.classList.remove('hidden');
      adminUserForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  adminUsersByInstitution.querySelectorAll('.admin-user-delete').forEach((button) => {
    button.addEventListener('click', async () => {
      const userId = button.dataset.userId;
      const target = managedUsers.find((entry) => entry.id === userId);
      if (!target) return;

      const isLastAdmin = target.isAdmin && managedUsers.filter((entry) => entry.isAdmin && entry.active !== false).length <= 1;
      if (isLastAdmin) {
        showAlert(adminUserError, 'Não é possível excluir o último administrador do sistema.');
        return;
      }

      const confirmed = window.confirm(`Deseja excluir o usuário ${target.name}?`);
      if (!confirmed) return;

      try {
        if (db) {
          await db.collection(usersCollection).doc(target.id).delete();
        }
        managedUsers = managedUsers.filter((entry) => entry.id !== target.id);
        saveUsersToCache(managedUsers);
        populateLoginAgents();
        renderAdminUsers();
        showAlert(adminUserSuccess, `Usuário ${target.name} excluído com sucesso.`);

        if (target.id === getLoggedUserId()) {
          clearSession();
        }
      } catch {
        showAlert(adminUserError, 'Não foi possível excluir o usuário selecionado.');
      }
    });
  });
};

const updateAdminPanelAccess = () => {
  const canManageUsers = isAdminUser();
  if (toggleAdminPanelBtn) {
    toggleAdminPanelBtn.classList.toggle('hidden', !canManageUsers);
  }
  if (!canManageUsers && adminPanel) {
    adminPanel.classList.add('hidden');
    if (toggleAdminPanelBtn) toggleAdminPanelBtn.textContent = 'Administração';
    return;
  }
  renderAdminUsers();
};

const saveManagedUser = async (userPayload) => {
  if (!db) return;
  await db
    .collection(usersCollection)
    .doc(userPayload.id)
    .set(
      {
        ...userPayload,
        reportType: userRecordType,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
};

const handleAdminUserSubmit = async () => {
  if (!isAdminUser()) {
    showAlert(adminUserError, 'Apenas administradores podem gerenciar usuários.');
    return;
  }

  const editingUserId = (adminEditingUserId?.value || '').trim();
  const institutionKey = (adminUserInstitution?.value || '').trim();
  const name = normalizeUpperText(adminUserName?.value || '');
  const plainPassword = (adminUserPassword?.value || '').trim();
  const isAdmin = Boolean(adminUserIsAdmin?.checked);
  const canVerifyExternalReports = Boolean(adminUserCanVerify?.checked);

  if (!institutionKey || !name) {
    showAlert(adminUserError, 'Informe instituição e nome do perfil.');
    return;
  }

  const duplicated = managedUsers.find(
    (user) =>
      user.institutionKey === institutionKey &&
      normalizeUpperText(user.name) === name &&
      user.id !== editingUserId &&
      user.active !== false
  );
  if (duplicated) {
    showAlert(adminUserError, 'Já existe um usuário com este nome nessa instituição.');
    return;
  }

  if (!editingUserId && !plainPassword) {
    showAlert(adminUserError, 'Informe uma senha para o novo usuário.');
    return;
  }

  const existing = managedUsers.find((user) => user.id === editingUserId);
  let nextUser;

  if (existing) {
    const wasAdmin = Boolean(existing.isAdmin);
    const adminsCount = managedUsers.filter((user) => user.isAdmin && user.active !== false).length;
    if (wasAdmin && !isAdmin && adminsCount <= 1) {
      showAlert(adminUserError, 'Não é possível remover o papel do último administrador.');
      return;
    }

    nextUser = {
      ...existing,
      name,
      institutionKey,
      institutionLabel: getInstitutionLabel(institutionKey),
      isAdmin,
      canVerifyExternalReports,
      active: true,
    };

    if (plainPassword) {
      const salt = randomSalt();
      nextUser.passwordSalt = salt;
      nextUser.passwordHash = await hashPassword(plainPassword, salt);
    }
  } else {
    nextUser = await createManagedUserRecord(name, institutionKey, plainPassword, {
      isAdmin,
      canVerifyExternalReports,
    });
  }

  try {
    await saveManagedUser(nextUser);
    const withoutCurrent = managedUsers.filter((user) => user.id !== nextUser.id);
    managedUsers = [...withoutCurrent, nextUser];
    saveUsersToCache(managedUsers);
    populateLoginAgents();
    renderAdminUsers();
    updateExternalReportsAccess();
    updateAdminPanelAccess();
    resetAdminUserForm();
    showAlert(adminUserSuccess, existing ? 'Usuário atualizado com sucesso.' : 'Usuário criado com sucesso.');
  } catch (error) {
    const message = (error && error.message ? String(error.message) : '').trim();
    showAlert(
      adminUserError,
      message ? `Não foi possível salvar o usuário agora: ${message}` : 'Não foi possível salvar o usuário agora.'
    );
  }
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

const setLoggedUser = (agentName, institutionKey, userProfile = null) => {
  if (entryScreen) entryScreen.classList.add('hidden');
  if (publicReportScreen) publicReportScreen.classList.add('hidden');
  localStorage.setItem(sessionKey, agentName);
  localStorage.setItem(sessionInstitutionKey, institutionKey);
  const resolvedUser = userProfile || findManagedUser(institutionKey, agentName);
  if (resolvedUser?.id) {
    localStorage.setItem(sessionUserIdKey, resolvedUser.id);
  } else {
    localStorage.removeItem(sessionUserIdKey);
  }
  loginScreen.classList.add('hidden');
  appShell.classList.remove('hidden');
  const institutionLabel = getInstitutionLabel(institutionKey);
  currentAgent.textContent = `${institutionLabel} • Agente: ${agentName}`;
  if (institutionInput) institutionInput.value = institutionLabel;
  if (institutionDisplay) institutionDisplay.textContent = institutionLabel || '[Instituição]';
  agentSelect.value = agentName;
  agentSelect.readOnly = true;
  updateAgentName();
  updateExternalReportsAccess();
  updateAdminPanelAccess();
  refreshExternalReports();
};

const showEntryScreen = () => {
  if (entryScreen) entryScreen.classList.remove('hidden');
  if (publicReportScreen) publicReportScreen.classList.add('hidden');
  if (loginScreen) loginScreen.classList.add('hidden');
  if (appShell) appShell.classList.add('hidden');
  if (trackProtocolPanel) trackProtocolPanel.classList.add('hidden');
  if (trackProtocolResult) trackProtocolResult.innerHTML = '';
  if (trackProtocolInput) trackProtocolInput.value = '';
  if (toggleTrackProtocolBtn) toggleTrackProtocolBtn.textContent = 'Acompanhar minha denúncia';
};

const showLoginScreen = () => {
  if (entryScreen) entryScreen.classList.add('hidden');
  if (publicReportScreen) publicReportScreen.classList.add('hidden');
  if (loginScreen) loginScreen.classList.remove('hidden');
  if (appShell) appShell.classList.add('hidden');
};

const showPublicReportScreen = () => {
  if (entryScreen) entryScreen.classList.add('hidden');
  if (loginScreen) loginScreen.classList.add('hidden');
  if (publicReportScreen) publicReportScreen.classList.remove('hidden');
  if (appShell) appShell.classList.add('hidden');
};

const clearSession = () => {
  localStorage.removeItem(sessionKey);
  localStorage.removeItem(sessionInstitutionKey);
  localStorage.removeItem(sessionUserIdKey);
  showEntryScreen();
  loginPassword.value = '';
  loginInstitution.value = '';
  loginAgent.value = '';
  if (institutionInput) institutionInput.value = '';
  if (institutionDisplay) institutionDisplay.textContent = '[Instituição]';
  currentAgent.textContent = 'Agente: --';
  agentSelect.value = '';
  agentSelect.readOnly = false;
  updateLoginAgentMode();
  updateAgentName();
  updateExternalReportsAccess();
  updateAdminPanelAccess();
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

const handleLogin = async () => {
  const selectedInstitution = loginInstitution.value;
  const selectedAgent = getCurrentLoginAgent();
  const password = loginPassword.value.trim();
  loginError.style.display = 'none';
  if (!selectedInstitution || !selectedAgent || !password) {
    showAlert(loginError, 'Selecione a instituição, informe o agente e digite a senha.');
    return false;
  }

  const user = findManagedUser(selectedInstitution, selectedAgent);
  if (!user) {
    showAlert(loginError, 'Usuário não encontrado para a instituição selecionada.');
    return false;
  }

  const isValidPassword = await verifyManagedUserPassword(user, password);
  if (!isValidPassword) {
    showAlert(loginError, 'Senha incorreta.');
    return false;
  }

  setLoggedUser(user.name, selectedInstitution, user);
  return true;
};

const loadRecordsFromStorage = (key = storageKey) => {
  const stored = localStorage.getItem(key);
  if (!stored) return [];
  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const openOfflineRecordsDb = () =>
  new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      resolve(null);
      return;
    }

    const request = window.indexedDB.open(indexedDbName, indexedDbVersion);
    request.onerror = () => reject(request.error || new Error('Falha ao abrir o IndexedDB.'));
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(indexedDbStoreName)) {
        database.createObjectStore(indexedDbStoreName, { keyPath: 'cacheKey' });
      }
    };
    request.onsuccess = () => resolve(request.result);
  });

const loadRecordsFromIndexedDb = async (key = storageKey) => {
  try {
    const database = await openOfflineRecordsDb();
    if (!database) return [];

    const result = await new Promise((resolve, reject) => {
      const transaction = database.transaction(indexedDbStoreName, 'readonly');
      const store = transaction.objectStore(indexedDbStoreName);
      const request = store.get(key);
      request.onerror = () => reject(request.error || new Error('Falha ao ler cache offline.'));
      request.onsuccess = () => resolve(request.result);
    });

    database.close();
    const records = Array.isArray(result?.records) ? result.records : [];
    return records;
  } catch (error) {
    return [];
  }
};

const saveRecordsToIndexedDb = async (key, records) => {
  try {
    const database = await openOfflineRecordsDb();
    if (!database) return false;

    await new Promise((resolve, reject) => {
      const transaction = database.transaction(indexedDbStoreName, 'readwrite');
      const store = transaction.objectStore(indexedDbStoreName);
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error || new Error('Falha ao gravar cache offline.'));
      store.put({
        cacheKey: key,
        records,
        updatedAt: Date.now(),
      });
    });

    database.close();
    return true;
  } catch (error) {
    return false;
  }
};

const loadRecordsFromFirestore = async () => {
  if (!db) return [];
  try {
    const snapshot = await db.collection('records').orderBy('timestamp', 'desc').get();
    firestoreReadBlocked = false;
    return snapshot.docs
      .map((doc) => ({ id: doc.id, photos: [], ...doc.data() }))
      .filter((record) => record.reportType !== 'public_denuncia' && record.reportType !== userRecordType);
  } catch (error) {
    try {
      const snapshot = await db.collection('records').get();
      firestoreReadBlocked = false;
      return snapshot.docs
        .map((doc) => ({ id: doc.id, photos: [], ...doc.data() }))
        .filter((record) => record.reportType !== 'public_denuncia' && record.reportType !== userRecordType);
    } catch (fallbackError) {
      firestoreReadBlocked = true;
      return [];
    }
  }
};

const getRecordMergeKey = (record) =>
  record.id ||
  [
    record.occurrenceNumber || '',
    record.date || '',
    record.time || '',
    normalizeText(record.agent || ''),
    normalizeText(record.infractorName || ''),
  ].join('|');

const normalizePhotoArray = (photos) =>
  Array.isArray(photos)
    ? photos.filter(
        (photo) =>
          Boolean(
            (typeof photo === 'string' && photo.startsWith('http'))
              || (photo && typeof photo === 'object' && (photo.data || photo.url))
          )
      )
    : [];

const normalizePhotoUrlsArray = (photoUrls) =>
  Array.isArray(photoUrls)
    ? photoUrls.filter((url) => typeof url === 'string' && url.startsWith('http'))
    : [];

const mergeRecordVersions = (preferredRecord = {}, fallbackRecord = {}) => {
  const preferredPhotos = normalizePhotoArray(preferredRecord.photos);
  const fallbackPhotos = normalizePhotoArray(fallbackRecord.photos);
  const preferredUrls = normalizePhotoUrlsArray(preferredRecord.photoUrls);
  const fallbackUrls = normalizePhotoUrlsArray(fallbackRecord.photoUrls);
  const preferredSyncIssues = Array.isArray(preferredRecord.syncIssues) ? preferredRecord.syncIssues.filter(Boolean) : [];
  const fallbackSyncIssues = Array.isArray(fallbackRecord.syncIssues) ? fallbackRecord.syncIssues.filter(Boolean) : [];
  const syncPending = Boolean(preferredRecord.syncPending || fallbackRecord.syncPending);

  return {
    ...fallbackRecord,
    ...preferredRecord,
    photos: preferredPhotos.length ? preferredPhotos : fallbackPhotos,
    photoUrls: Array.from(new Set([...fallbackUrls, ...preferredUrls])),
    syncPending,
    syncIssues: syncPending ? Array.from(new Set([...fallbackSyncIssues, ...preferredSyncIssues])) : [],
  };
};

const mergeRecords = (primaryRecords = [], secondaryRecords = []) => {
  const mergedMap = new Map();
  [...secondaryRecords, ...primaryRecords].forEach((record) => {
    const mergeKey = getRecordMergeKey(record || {});
    if (!mergeKey) return;
    const existingRecord = mergedMap.get(mergeKey);
    if (!existingRecord) {
      mergedMap.set(mergeKey, record);
      return;
    }
    mergedMap.set(mergeKey, mergeRecordVersions(record, existingRecord));
  });
  return Array.from(mergedMap.values());
};

const loadRecords = async () => {
  const localRecords = loadRecordsFromStorage(storageKey);
  const backupRecords = loadRecordsFromStorage(backupStorageKey);
  const indexedDbRecords = await loadRecordsFromIndexedDb(storageKey);
  const indexedDbBackupRecords = await loadRecordsFromIndexedDb(backupStorageKey);
  const browserCacheMerged = mergeRecords(localRecords, backupRecords);
  const indexedDbMerged = mergeRecords(indexedDbRecords, indexedDbBackupRecords);
  const localMerged = mergeRecords(browserCacheMerged, indexedDbMerged);

  if (!db) return localMerged;

  const remoteRecords = await loadRecordsFromFirestore();
  const merged = mergeRecords(remoteRecords, localMerged);
  return merged;
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
  try {
    localStorage.setItem(storageKey, JSON.stringify(allRecords));
    localStorage.setItem(backupStorageKey, JSON.stringify(allRecords));
  } catch (error) {
    console.error('Falha ao salvar registros no localStorage:', error);
  }
  void saveRecordsToIndexedDb(storageKey, allRecords);
  void saveRecordsToIndexedDb(backupStorageKey, allRecords);
};

const persistLocalIfNeeded = () => {
  saveRecordsToStorage();
};

const buildRecordPayload = (recordData, isNew) => {
  const payload = { ...recordData };
  delete payload.photos;
  delete payload.syncPending;
  delete payload.syncIssues;
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

const getPendingUploadPhotos = (photos = []) =>
  Array.isArray(photos)
    ? photos.filter(
        (photo) => photo?.data && typeof photo.data === 'string' && photo.data.startsWith('data:image')
      )
    : [];

const clearResolvedPhotoSyncIssues = (issues, expectedPendingPhotos, resolvedPhotoLinks, backendSynced) => {
  if (!Array.isArray(issues) || !issues.length) return [];
  if (!expectedPendingPhotos) {
    return issues;
  }
  if (backendSynced) {
    return issues.filter((issue) => !String(issue).startsWith('Fotos:'));
  }
  if (resolvedPhotoLinks < expectedPendingPhotos) {
    return issues;
  }
  return issues.filter((issue) => !String(issue).startsWith('Fotos:'));
};

const uploadRecordAssets = async (recordData, recordId, onProgress) => {
  const existingUrls = extractPhotoUrls(recordData.photos);
  if (!storage || !recordData.photos || recordData.photos.length === 0) {
    if (typeof onProgress === 'function') {
      onProgress(100, 'Nenhuma imagem nova para enviar.');
    }
    return { pdfUrl: '', photoUrls: existingUrls, failedPhotos: [] };
  }

  const uploadedUrls = [];
  const failedPhotos = [];
  const basePath = `records/${recordId}`;
  const dataPhotos = recordData.photos.filter((photo) => photo?.data && photo.data.startsWith('data:image'));
  const totalPhotos = dataPhotos.length;
  let completedCount = 0;

  if (typeof onProgress === 'function' && totalPhotos > 0) {
    onProgress(0, `Preparando upload de ${totalPhotos} imagem(ns)...`);
  }

  const uploadResults = await Promise.allSettled(
    dataPhotos.map(async (photo, dataIndex) => {
      const originalIndex = recordData.photos.indexOf(photo);
      const displayIndex = originalIndex >= 0 ? originalIndex + 1 : dataIndex + 1;
      const safeName = (photo.name || `foto_${displayIndex}.jpg`).replace(/[^a-zA-Z0-9_.-]/g, '_');
      const storageRef = storage.ref().child(`${basePath}/${Date.now()}_${displayIndex}_${safeName}`);

      await withTimeout(
        storageRef.putString(photo.data, 'data_url'),
        storageUploadTimeoutMs,
        `Timeout no upload da foto ${displayIndex}.`
      );
      const downloadUrl = await withTimeout(
        storageRef.getDownloadURL(),
        storageDownloadUrlTimeoutMs,
        `Timeout ao obter URL da foto ${displayIndex}.`
      );

      return { index: originalIndex >= 0 ? originalIndex : dataIndex, url: downloadUrl };
    })
  );

  uploadResults.forEach((result, resultIndex) => {
    completedCount += 1;
    if (result.status === 'fulfilled' && result.value?.url) {
      uploadedUrls[result.value.index] = result.value.url;
    } else {
      const displayIndex = result.status === 'rejected' ? resultIndex + 1 : resultIndex + 1;
      const reason = result.status === 'rejected' ? result.reason : new Error('falha no upload');
      failedPhotos.push(`foto ${displayIndex}: ${getErrorMessage(reason, 'falha no upload')}`);
    }

    if (typeof onProgress === 'function' && totalPhotos > 0) {
      const uploadPercent = Math.round((completedCount / totalPhotos) * 100);
      onProgress(uploadPercent, `Salvando imagens online (${completedCount}/${totalPhotos})...`);
    }
  });

  if (typeof onProgress === 'function') {
    onProgress(100, failedPhotos.length ? 'Upload de imagens concluido com pendencias.' : 'Upload de imagens concluido.');
  }

  const mergedUrls = Array.from(new Set([...existingUrls, ...uploadedUrls.filter(Boolean)]));
  return { pdfUrl: '', photoUrls: mergedUrls, failedPhotos };
};

const syncRecordPhotosInBackground = (recordData, recordId) => {
  if (!db || !recordId) return;
  const pendingPhotos = getPendingUploadPhotos(recordData.photos);
  if (!pendingPhotos.length) return;

  void (async () => {
    try {
      const backgroundAssets = await uploadRecordAssets({ ...recordData, photos: pendingPhotos }, recordId);
      if (backgroundAssets.photoUrls && backgroundAssets.photoUrls.length) {
        await db.collection('records').doc(recordId).set(
          {
            photoUrls: backgroundAssets.photoUrls,
            photosCount: backgroundAssets.photoUrls.length,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      }
    } catch (error) {
      // Sincronização secundária das fotos não pode bloquear o fluxo principal.
    }
  })();
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

const showPopup = (message, options = {}) => {
  if (!actionUnavailableModal || !actionUnavailableMessage) return;
  const { title = 'Aviso', buttonLabel = 'Ok', onClose = null } = options;
  popupCloseCallback = typeof onClose === 'function' ? onClose : null;
  if (actionUnavailableTitle) {
    actionUnavailableTitle.textContent = title;
  }
  actionUnavailableMessage.textContent = message;
  if (actionUnavailableOkBtn) {
    actionUnavailableOkBtn.textContent = buttonLabel;
  }
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
  if (actionUnavailableTitle) {
    actionUnavailableTitle.textContent = 'Aviso';
  }
  if (actionUnavailableOkBtn) {
    actionUnavailableOkBtn.textContent = 'Ok';
  }
  if (popupCloseCallback) {
    const callback = popupCloseCallback;
    popupCloseCallback = null;
    callback();
  }
};

const toggleTrackProtocolPanel = () => {
  if (!trackProtocolPanel) return;
  const isHidden = trackProtocolPanel.classList.toggle('hidden');
  if (toggleTrackProtocolBtn) {
    toggleTrackProtocolBtn.textContent = isHidden
      ? 'Acompanhar minha denúncia'
      : 'Fechar acompanhamento';
  }

  if (!isHidden) {
    if (trackProtocolInput) {
      trackProtocolInput.focus();
    }
    trackProtocolPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else if (trackProtocolResult) {
    trackProtocolResult.innerHTML = '';
  }
};

const closePublicProtocolModal = () => {
  if (!publicProtocolModal) return;
  publicProtocolModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  latestPublicProtocol = '';
  if (copyProtocolBtn) {
    copyProtocolBtn.disabled = false;
    copyProtocolBtn.textContent = 'Copiar protocolo';
  }
  showPublicReportScreen();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const fallbackCopyText = (text) => {
  const temp = document.createElement('textarea');
  temp.value = text;
  temp.setAttribute('readonly', 'true');
  temp.style.position = 'fixed';
  temp.style.opacity = '0';
  document.body.appendChild(temp);
  temp.select();
  const copied = document.execCommand('copy');
  document.body.removeChild(temp);
  return copied;
};

const copyPublicProtocol = async () => {
  if (!latestPublicProtocol) return;

  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(latestPublicProtocol);
      copied = true;
    }
  } catch (error) {
    copied = false;
  }

  if (!copied) {
    copied = fallbackCopyText(latestPublicProtocol);
  }

  if (copyProtocolBtn) {
    copyProtocolBtn.textContent = copied ? 'Protocolo copiado' : 'Copiar novamente';
  }

  if (publicProtocolMessage) {
    publicProtocolMessage.textContent = copied
      ? 'Protocolo copiado. Guarde este número para acompanhar sua denúncia.'
      : 'Não foi possível copiar automaticamente. Selecione o protocolo e copie manualmente.';
  }
};

const openPublicProtocolModal = (protocol) => {
  if (!publicProtocolModal) return;
  latestPublicProtocol = String(protocol || '').trim();
  if (publicProtocolMessage) {
    publicProtocolMessage.textContent =
      'Sua denúncia foi registrada. Guarde o protocolo para acompanhar a análise posteriormente.';
  }
  if (publicProtocolValue) {
    publicProtocolValue.textContent = latestPublicProtocol;
  }
  if (copyProtocolBtn) {
    copyProtocolBtn.disabled = !latestPublicProtocol;
    copyProtocolBtn.textContent = 'Copiar protocolo';
  }
  publicProtocolModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  if (copyProtocolBtn && !copyProtocolBtn.disabled) {
    copyProtocolBtn.focus();
  } else if (closeProtocolModalBtn) {
    closeProtocolModalBtn.focus();
  }
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

if (publicProtocolModal) {
  publicProtocolModal.addEventListener('click', (event) => {
    if (event.target === publicProtocolModal) {
      closePublicProtocolModal();
    }
  });
}

if (copyProtocolBtn) {
  copyProtocolBtn.addEventListener('click', copyPublicProtocol);
}

if (closeProtocolModalBtn) {
  closeProtocolModalBtn.addEventListener('click', closePublicProtocolModal);
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
    if (publicProtocolModal && !publicProtocolModal.classList.contains('hidden')) {
      closePublicProtocolModal();
      return;
    }
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

const isValidCPF = (cpfValue) => {
  const digits = (cpfValue || '').replace(/\D/g, '');
  if (digits.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(digits)) return false;

  const nums = digits.split('').map((digit) => Number(digit));

  let sum1 = 0;
  for (let i = 0; i < 9; i += 1) {
    sum1 += nums[i] * (10 - i);
  }
  let check1 = (sum1 * 10) % 11;
  if (check1 === 10) check1 = 0;

  let sum2 = 0;
  for (let i = 0; i < 10; i += 1) {
    sum2 += nums[i] * (11 - i);
  }
  let check2 = (sum2 * 10) % 11;
  if (check2 === 10) check2 = 0;

  return check1 === nums[9] && check2 === nums[10];
};

const updateCpfStatus = (cpfValue) => {
  if (!cpfStatus) return;
  const digits = (cpfValue || '').replace(/\D/g, '');

  cpfStatus.textContent = '';
  cpfStatus.classList.remove('valid', 'invalid');

  if (!digits) return;
  if (digits.length < 11) return;

  const isValid = isValidCPF(cpfValue);
  cpfStatus.textContent = isValid ? 'CPF válido' : 'CPF inválido';
  cpfStatus.classList.add(isValid ? 'valid' : 'invalid');
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
      video: {
        facingMode: { ideal: cameraFacingMode },
        width: { ideal: 2560 },
        height: { ideal: 1440 },
      },
    });
    fullscreenCameraPreview.srcObject = stream;
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
  fullscreenCameraModal.classList.add('hidden');
  document.body.style.overflow = '';
};

const captureFullscreenPhoto = async () => {
  if (!stream || !fullscreenCameraPreview.videoWidth) {
    showAlert(alertError, 'Câmera não está pronta. Tente novamente.');
    return;
  }

  const widthScale = uploadImageMaxWidth / fullscreenCameraPreview.videoWidth;
  const heightScale = uploadImageMaxHeight / fullscreenCameraPreview.videoHeight;
  const scale = Math.min(1, widthScale, heightScale);
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(fullscreenCameraPreview.videoWidth * scale));
  canvas.height = Math.max(1, Math.round(fullscreenCameraPreview.videoHeight * scale));
  const context = canvas.getContext('2d');
  context.drawImage(fullscreenCameraPreview, 0, 0, canvas.width, canvas.height);
  drawPhotoMetadataOverlay(context, canvas.width, canvas.height);

  const photoDataUrl = canvas.toDataURL(uploadImageMimeType, uploadImageQuality);
  const fileName = buildCapturedPhotoFileName();
  addPhotoPreview(photoDataUrl, fileName);
  const savedToDevice = await savePhotoToDevice(photoDataUrl, fileName);
  
  closeFullscreenCamera();
  if (savedToDevice) {
    showAlert(alertSuccess, 'Foto capturada com sucesso e download no dispositivo iniciado.');
  } else {
    showAlert(alertSuccess, 'Foto capturada com sucesso!');
    showPopup(
      'A foto foi anexada ao registro, mas o navegador não confirmou o salvamento automático no dispositivo. Use o botão "Salvar" na miniatura para garantir uma cópia local.',
      { title: 'Salvamento local pendente', buttonLabel: 'Entendi' }
    );
  }
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

  if (isDataImage) {
    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-photo';
    saveBtn.type = 'button';
    saveBtn.textContent = 'Salvar';
    saveBtn.addEventListener('click', async () => {
      const saved = await savePhotoToDevice(dataUrl, fileName || 'foto_veiculo.jpg');
      if (saved) {
        showAlert(alertSuccess, 'Download da foto iniciado no dispositivo.');
      } else {
        showAlert(alertError, 'O navegador não permitiu salvar a foto automaticamente.');
      }
    });
    wrapper.appendChild(saveBtn);
  }

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

const handlePhotoUpload = async (event) => {
  const files = event.target.files;
  if (!files || files.length === 0) return;
  const unsupportedFiles = [];

  for (const file of Array.from(files)) {
    const mimeType = (file.type || '').toLowerCase();
    const fileName = file.name || 'arquivo';
    const isHeic = mimeType.includes('heic') || mimeType.includes('heif') || /\.(heic|heif)$/i.test(fileName);
    if (isHeic) {
      unsupportedFiles.push(fileName);
      continue;
    }
    try {
      const optimizedDataUrl = await optimizePhotoFileForUpload(file);
      addPhotoPreview(optimizedDataUrl, file.name);
    } catch (error) {
      unsupportedFiles.push(fileName);
    }
  }

  if (unsupportedFiles.length) {
    showAlert(
      alertError,
      `Formato não suportado: ${unsupportedFiles.join(', ')}. Use JPG, PNG ou WEBP.`
    );
  }

  event.target.value = '';
};

const clearPublicReportForm = () => {
  if (publicReportForm) publicReportForm.reset();
  if (publicReportPhotoPreview) publicReportPhotoPreview.innerHTML = '';
  if (publicLocationError) publicLocationError.textContent = '';
  publicReportPhotos = [];
  setPublicDateTimeNow();
};

const setPublicDateTimeNow = () => {
  const now = new Date();
  if (publicDateInput) {
    publicDateInput.value = formatDate(now);
  }
  if (publicTimeInput) {
    publicTimeInput.value = formatTime(now);
  }
};

const setPublicSavingState = (isSaving) => {
  if (!publicSavingOverlay) return;
  publicSavingOverlay.classList.toggle('hidden', !isSaving);
};

const updatePublicSavingProgress = (percent, stepText) => {
  const safePercent = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
  if (publicSavingProgressBar) {
    publicSavingProgressBar.style.width = `${safePercent}%`;
  }
  if (publicSavingProgressPercent) {
    publicSavingProgressPercent.textContent = `${safePercent}%`;
  }
  if (publicSavingStepText && stepText) {
    publicSavingStepText.textContent = stepText;
  }
};

const addPublicReportPhotoPreview = (dataUrl, fileName) => {
  if (!publicReportPhotoPreview) return;
  const photoId = `pub-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const wrapper = document.createElement('div');
  wrapper.className = 'public-photo-item';
  wrapper.dataset.id = photoId;

  const image = document.createElement('img');
  image.src = dataUrl;
  image.alt = fileName || 'Foto da denúncia';

  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.className = 'public-photo-remove';
  removeBtn.innerHTML = '&times;';
  removeBtn.addEventListener('click', () => {
    wrapper.remove();
    publicReportPhotos = publicReportPhotos.filter((photo) => photo.id !== photoId);
  });

  wrapper.appendChild(image);
  wrapper.appendChild(removeBtn);
  publicReportPhotoPreview.appendChild(wrapper);

  publicReportPhotos.push({
    id: photoId,
    name: fileName || 'foto_denuncia.jpg',
    data: dataUrl,
  });
};

const handlePublicPhotoUpload = async (event) => {
  const files = event.target.files;
  if (!files || !files.length) return;

  const unsupported = [];
  for (const file of Array.from(files)) {
    const mimeType = (file.type || '').toLowerCase();
    const fileName = file.name || 'arquivo';
    const isImage = mimeType.startsWith('image/');
    const isHeic = mimeType.includes('heic') || mimeType.includes('heif') || /\.(heic|heif)$/i.test(fileName);
    if (!isImage || isHeic) {
      unsupported.push(fileName);
      continue;
    }

    try {
      const optimizedDataUrl = await optimizePhotoFileForUpload(file);
      addPublicReportPhotoPreview(optimizedDataUrl, file.name);
    } catch (error) {
      unsupported.push(fileName);
    }
  }

  if (unsupported.length && publicReportError) {
    showAlert(publicReportError, `Formato não suportado: ${unsupported.join(', ')}. Use JPG, PNG ou WEBP.`);
  }

  event.target.value = '';
};

const handlePublicLocation = () => {
  if (!navigator.geolocation || !publicLocationInput) {
    if (publicLocationError) publicLocationError.textContent = 'Geolocalização não disponível neste navegador.';
    return;
  }

  if (publicGetLocationBtn) {
    publicGetLocationBtn.disabled = true;
    publicGetLocationBtn.textContent = 'Obtendo...';
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      publicLocationInput.value = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
      if (publicLocationError) publicLocationError.textContent = '';
      if (publicGetLocationBtn) {
        publicGetLocationBtn.disabled = false;
        publicGetLocationBtn.textContent = 'Obter Coordenadas';
      }
    },
    () => {
      if (publicLocationError) {
        publicLocationError.textContent = 'Não foi possível obter a localização. Verifique as permissões.';
      }
      if (publicGetLocationBtn) {
        publicGetLocationBtn.disabled = false;
        publicGetLocationBtn.textContent = 'Obter Coordenadas';
      }
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
};

const generatePublicProtocol = () => {
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `DEN-${stamp}-${random}`;
};

const buildPublicReportPdfDoc = (payload = {}, extraPhotoData = []) => {
  if (!jsPDF) return null;

  const publicRecord = {
    occurrenceNumber: payload.protocol || 'SEM_PROTOCOLO',
    date: payload.date || '',
    time: payload.time || '',
    location: payload.location || '',
    institution: 'DENUNCIA PUBLICA',
    agent: 'DENUNCIANTE',
    infractorName: payload.infractorName || '',
    infractorDoc: payload.infractorDoc || '',
    whatsapp: payload.reporterContact || '',
    vehiclePlate: payload.vehiclePlate || '',
    vehicleModel: payload.vehicleModel || '',
    vehicleColor: payload.vehicleColor || '',
    vehicleYear: payload.vehicleYear || '',
    observations: payload.observations || '',
  };

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  renderRecordToDoc(doc, publicRecord, {
    includeComunicado: false,
    reportTitle: 'RELATORIO DE DENUNCIA PUBLICA',
  });

  const photos = [...(Array.isArray(payload.photos) ? payload.photos : []), ...extraPhotoData];
  photos.forEach((photo, index) => {
    if (!photo?.data || typeof photo.data !== 'string' || !photo.data.startsWith('data:image')) return;

    doc.addPage('a4', 'portrait');

    const pageWidth = 210;
    const marginLeft = 15;
    const marginRight = 15;
    const contentWidth = pageWidth - marginLeft - marginRight;

    let yPos = 20;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('ANEXO FOTOGRAFICO DA DENUNCIA', pageWidth / 2, yPos, { align: 'center' });
    yPos += 8;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(`Protocolo: ${publicRecord.occurrenceNumber}`, marginLeft, yPos);
    doc.text(`Imagem ${index + 1} de ${photos.length}`, pageWidth - marginRight, yPos, { align: 'right' });
    yPos += 8;

    const maxImageWidth = contentWidth;
    const maxImageHeight = 190;
    let drawWidth = maxImageWidth;
    let drawHeight = maxImageHeight;

    try {
      const props = doc.getImageProperties(photo.data);
      if (props?.width && props?.height) {
        const ratio = Math.min(maxImageWidth / props.width, maxImageHeight / props.height);
        drawWidth = props.width * ratio;
        drawHeight = props.height * ratio;
      }
    } catch (_) {
      drawWidth = maxImageWidth;
      drawHeight = maxImageHeight;
    }

    const imageX = (pageWidth - drawWidth) / 2;
    const imageY = yPos;
    const format = photo.data.includes('image/png') ? 'PNG' : 'JPEG';
    doc.addImage(photo.data, format, imageX, imageY, drawWidth, drawHeight, undefined, 'MEDIUM');

    const legendY = imageY + drawHeight + 8;
    doc.setFont('helvetica', 'bold');
    doc.text('Legenda:', marginLeft, legendY);
    doc.setFont('helvetica', 'normal');
    const legendText = (photo.name || '').trim() || `Foto ${index + 1}`;
    const legendLines = doc.splitTextToSize(legendText, contentWidth);
    doc.text(legendLines, marginLeft, legendY + 5);
  });

  return doc;
};

const generateExternalReportPdf = async (report) => {
  const payload = {
    protocol: report.protocol || '',
    date: report.date || '',
    time: report.time || '',
    location: report.location || '',
    vehiclePlate: report.vehiclePlate || '',
    vehicleModel: report.vehicleModel || '',
    vehicleColor: report.vehicleColor || '',
    vehicleYear: report.vehicleYear || '',
    infractorName: report.infractorName || '',
    infractorDoc: report.infractorDoc || '',
    observations: report.observations || '',
    reporterContact: report.reporterContact || '',
    photos: Array.isArray(report.photos) ? report.photos : [],
  };

  const remotePhotos = [];
  const links = Array.isArray(report.photoUrls)
    ? report.photoUrls.filter((url) => typeof url === 'string' && url.startsWith('http')).slice(0, 8)
    : [];

  for (const [index, link] of links.entries()) {
    try {
      const dataUrl = await fetchImageAsDataUrl(link);
      if (typeof dataUrl === 'string' && dataUrl.startsWith('data:image')) {
        remotePhotos.push({ data: dataUrl, name: `Foto ${index + 1}` });
      }
    } catch (_) {
      // segue com as imagens disponíveis
    }
  }

  const doc = buildPublicReportPdfDoc(payload, remotePhotos);
  if (!doc) throw new Error('PDF indisponível.');

  const safeProtocol = normalizeProtocol(payload.protocol || 'SEM_PROTOCOLO');
  doc.save(`Denuncia_Publica_${safeProtocol}.pdf`);
};

const generatePublicReportPdfPayload = (payload) => {
  const doc = buildPublicReportPdfDoc(payload);
  if (!doc) return null;

  const dataUri = doc.output('datauristring') || '';
  const parts = dataUri.split(',');
  const pdfBase64 = parts.length > 1 ? parts[1] : '';
  if (!pdfBase64 || pdfBase64.length > maxEmailPdfBase64Length) {
    return null;
  }

  return {
    emailPdfBase64: pdfBase64,
    emailPdfFileName: `Denuncia_Publica_${normalizeProtocol(payload.protocol || 'SEM_PROTOCOLO')}.pdf`,
  };
};

const submitPublicReport = async () => {
  if (!publicReportConsentInput?.checked) {
    if (publicReportError) {
      showAlert(publicReportError, 'Confirme a declaração para enviar a denúncia.');
    }
    return;
  }

  const payload = {
    protocol: generatePublicProtocol(),
    date: (publicDateInput?.value || '').trim(),
    time: (publicTimeInput?.value || '').trim(),
    location: (publicLocationInput?.value || '').trim(),
    vehiclePlate: (publicVehiclePlateInput?.value || '').trim().toUpperCase(),
    vehicleModel: (publicVehicleModelInput?.value || '').trim().toUpperCase(),
    vehicleColor: (publicVehicleColorInput?.value || '').trim().toUpperCase(),
    vehicleYear: (publicVehicleYearInput?.value || '').trim(),
    infractorName: (publicInfractorNameInput?.value || '').trim().toUpperCase(),
    infractorDoc: (publicInfractorDocInput?.value || '').trim(),
    observations: (publicObservationsInput?.value || '').trim(),
    reporterContact: (publicReporterContactInput?.value || '').trim(),
    photos: publicReportPhotos.map((photo) => ({ name: photo.name, data: photo.data })),
    reportType: 'public_denuncia',
    source: 'publico',
    status: 'nova',
    targetSheet: 'DENUNCIAS_PUBLICAS',
    sendEmailNotification: true,
    notifyEmail: publicReportNotificationEmail,
    notificationEmail: publicReportNotificationEmail,
    destinationEmail: publicReportNotificationEmail,
    notificationType: 'denuncia_publica',
    timestamp: new Date().toISOString(),
  };

  try {
    const emailPdfPayload = generatePublicReportPdfPayload(payload);
    if (emailPdfPayload?.emailPdfBase64) {
      payload.emailPdfBase64 = emailPdfPayload.emailPdfBase64;
      payload.emailPdfFileName = emailPdfPayload.emailPdfFileName;
    }
  } catch (_) {
    // Se a geração do PDF falhar, o envio da denúncia continua sem anexo em PDF.
  }

  const hasUsefulInfo = Object.entries(payload).some(([key, value]) => {
    if (
      [
        'reportType',
        'source',
        'status',
        'targetSheet',
        'timestamp',
        'protocol',
        'sendEmailNotification',
        'notifyEmail',
        'notificationEmail',
        'destinationEmail',
        'notificationType',
        'emailPdfBase64',
        'emailPdfFileName',
      ].includes(key)
    ) {
      return false;
    }
    if (Array.isArray(value)) return value.length > 0;
    return String(value || '').trim().length > 0;
  });

  if (!hasUsefulInfo) {
    if (publicReportError) {
      showAlert(publicReportError, 'Informe ao menos um dado da denúncia antes de enviar.');
    }
    return;
  }

  if (submitPublicReportBtn) {
    submitPublicReportBtn.disabled = true;
    submitPublicReportBtn.textContent = 'Enviando...';
  }

  setPublicSavingState(true);
  updatePublicSavingProgress(12, 'Preparando envio da denúncia...');

  try {
    updatePublicSavingProgress(42, 'Validando e organizando os dados...');
    await sendToGoogleSheets(payload, {
      mode: 'public',
      successElement: publicReportSuccess,
      successMessage: `Denúncia enviada com sucesso. Protocolo: ${payload.protocol}`,
    });

    try {
      upsertPublicReportCache(payload);
      await savePublicReportToFirestore(payload);
      if (canManageExternalReports()) {
        refreshExternalReports();
      }
    } catch (error) {
      // mantém no cache local mesmo se o Firestore falhar
    }

    updatePublicSavingProgress(100, 'Denúncia enviada com sucesso!');
    clearPublicReportForm();
    setTimeout(() => {
      setPublicSavingState(false);
      updatePublicSavingProgress(0, 'Preparando envio da denúncia...');
      openPublicProtocolModal(payload.protocol);
    }, 350);
  } catch (error) {
    setPublicSavingState(false);
    updatePublicSavingProgress(0, 'Preparando envio da denúncia...');
    if (publicReportError) {
      const serverMessage = (error && error.message ? String(error.message) : '').trim();
      showAlert(
        publicReportError,
        serverMessage
          ? `Não foi possível enviar: ${serverMessage}`
          : 'Não foi possível enviar agora. Tente novamente em instantes.'
      );
    }
  } finally {
    if (submitPublicReportBtn) {
      submitPublicReportBtn.disabled = false;
      submitPublicReportBtn.textContent = 'Enviar denúncia';
    }
  }
};

const sendToGoogleSheets = async (recordData, options = {}) => {
  const isPublicReport = options.mode === 'public';
  if (!scriptUrl) {
    const configError = new Error('URL da planilha online não configurada.');
    if (isPublicReport) {
      throw configError;
    }
    return { photoLinks: [], synced: false, error: configError, usedFallback: false };
  }

  const successElement = options.successElement || alertSuccess;
  const successMessage = options.successMessage || 'Registro salvo na planilha online com sucesso!';
  const pendingUploadPhotos = getPendingUploadPhotos(recordData.photos);

  const payload = isPublicReport
    ? {
        reportType: recordData.reportType || 'public_denuncia',
        source: recordData.source || 'publico',
        status: recordData.status || 'nova',
        targetSheet: recordData.targetSheet || 'DENUNCIAS_PUBLICAS',
        sendEmailNotification:
          typeof recordData.sendEmailNotification === 'boolean'
            ? recordData.sendEmailNotification
            : true,
        notifyEmail: recordData.notifyEmail || publicReportNotificationEmail,
        notificationEmail: recordData.notificationEmail || publicReportNotificationEmail,
        destinationEmail: recordData.destinationEmail || publicReportNotificationEmail,
        notificationType: recordData.notificationType || 'denuncia_publica',
        emailPdfBase64: recordData.emailPdfBase64 || '',
        emailPdfFileName: recordData.emailPdfFileName || '',
        protocol: recordData.protocol || '',
        date: recordData.date || '',
        time: recordData.time || '',
        location: recordData.location || '',
        vehiclePlate: recordData.vehiclePlate || '',
        vehicleModel: recordData.vehicleModel || '',
        vehicleColor: recordData.vehicleColor || '',
        vehicleYear: recordData.vehicleYear || '',
        infractorName: recordData.infractorName || '',
        infractorDoc: recordData.infractorDoc || '',
        observations: recordData.observations || '',
        reporterContact: recordData.reporterContact || '',
        timestamp: recordData.timestamp || new Date().toISOString(),
        photos: recordData.photos || [],
        photoUrls: recordData.photoUrls || [],
      }
    : {
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
        photos: pendingUploadPhotos,
        photoUrls: recordData.photoUrls || [],
      };

  let requestError = null;
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
      googleSheetsTimeoutMs,
      'Timeout ao enviar para planilha online.'
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const responseText = await response.text();
    const result = (() => {
      try {
        return JSON.parse(responseText || '{}');
      } catch (error) {
        return null;
      }
    })();

    if (result && result.success === false) {
      throw new Error(result.error || 'Erro retornado pelo Apps Script.');
    }

    if (successElement) {
      showAlert(successElement, successMessage);
    }

    const photoLinks = Array.isArray(result?.photoLinks) ? result.photoLinks : [];
    return {
      photoLinks: photoLinks.filter((link) => typeof link === 'string' && link.startsWith('http')),
      synced: true,
      error: null,
      usedFallback: false,
    };
  } catch (error) {
    requestError = error;
  }

  if (isPublicReport) {
    throw requestError || new Error('Falha ao enviar denúncia pública para o backend.');
  }

  const isOffline = typeof navigator !== 'undefined' && navigator.onLine === false;
  if (isOffline) {
    return {
      photoLinks: [],
      synced: false,
      error: requestError || new Error('Sem conexão com a internet.'),
      usedFallback: false,
      confirmationUnavailable: false,
    };
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

  return {
    photoLinks: [],
    synced: true,
    error: null,
    usedFallback: true,
    confirmationUnavailable: true,
  };
};

const updateRecordsList = () => {
  recordsList.innerHTML = '';
  if (allRecords.length === 0) {
    if (firestoreReadBlocked) {
      recordsList.innerHTML = '<p>Registros temporariamente indisponíveis (permissão do Firestore). Ajuste as regras para restaurar a visualização.</p>';
    } else {
      recordsList.innerHTML = '<p>Nenhum registro adicionado ainda.</p>';
    }
    updateDashboard();
    return;
  }

  const duplicateMap = buildDuplicateMap(allRecords);
  const orderedRecords = allRecords
    .map((record, originalIndex) => ({ record, originalIndex }))
    .sort((a, b) => {
      const createdA = getRecordCreatedAtTimestamp(a.record);
      const createdB = getRecordCreatedAtTimestamp(b.record);
      if (Number.isFinite(createdA) || Number.isFinite(createdB)) {
        return (createdB || 0) - (createdA || 0);
      }

      const occA = getRecordTimestamp(a.record);
      const occB = getRecordTimestamp(b.record);
      if (Number.isFinite(occA) || Number.isFinite(occB)) {
        return (occB || 0) - (occA || 0);
      }

      return b.originalIndex - a.originalIndex;
    });

  orderedRecords.forEach(({ record, originalIndex }) => {
    const recordItem = document.createElement('div');
    recordItem.className = 'record-item';
    if (isRecordSyncPending(record)) {
      recordItem.classList.add('record-item-pending');
      recordItem.title = getRecordSyncIssuePreview(record);
    }

    const summary = document.createElement('div');
    summary.className = 'record-info';
    const duplicateCount = duplicateMap[getDriverKey(record)] || 0;
    const duplicateBadge =
      duplicateCount > 1
        ? `<span class="badge">${duplicateCount} ocorrências</span>`
        : '';
    const syncBadge = isRecordSyncPending(record)
      ? '<span class="badge badge-warning">Envio pendente</span>'
      : '';
    const institutionLabel = record.institution || '--';
    const syncHint = isRecordSyncPending(record)
      ? '<div class="record-sync-hint">Esse registro ainda não foi sincronizado totalmente com a planilha/fotos online.</div>'
      : '';
    summary.innerHTML = `<strong>${record.infractorName}</strong> ${duplicateBadge} ${syncBadge}<br />Nº ${record.occurrenceNumber} • ${record.vehiclePlate}<br />${institutionLabel} • ${record.agent || '--'}${syncHint}`;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'record-actions';

    const canManage = canManageRecord(record);

    const pdfBtn = document.createElement('button');
    pdfBtn.className = 'edit-record';
    pdfBtn.textContent = 'PDF';
    pdfBtn.type = 'button';
    pdfBtn.addEventListener('click', () => generateSinglePDF(originalIndex));

    if (isRecordSyncPending(record) && canManage) {
      const resendBtn = document.createElement('button');
      resendBtn.className = 'ghost-btn';
      resendBtn.textContent = 'Reenviar agora';
      resendBtn.type = 'button';
      resendBtn.addEventListener('click', () => resendPendingRecord(originalIndex));
      actionsDiv.appendChild(resendBtn);
    }

    if (canManage) {
      const editBtn = document.createElement('button');
      editBtn.className = 'edit-record';
      editBtn.textContent = 'Editar';
      editBtn.type = 'button';
      editBtn.addEventListener('click', () => editRecord(originalIndex));

      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-record';
      removeBtn.textContent = 'Remover';
      removeBtn.type = 'button';
      removeBtn.addEventListener('click', () => removeRecord(originalIndex));

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

const resendPendingRecord = async (index) => {
  const existingRecord = allRecords[index];
  if (!existingRecord) {
    showAlert(alertError, 'Registro não encontrado para reenvio.');
    return;
  }
  if (!canManageRecord(existingRecord)) {
    showAlert(alertError, 'Você não tem permissão para reenviar este registro.');
    return;
  }
  if (isRecordSaveInProgress) return;

  isRecordSaveInProgress = true;
  const recordData = {
    ...existingRecord,
    photos: Array.isArray(existingRecord.photos) ? [...existingRecord.photos] : [],
    photoUrls: Array.isArray(existingRecord.photoUrls) ? [...existingRecord.photoUrls] : [],
  };
  const pendingPhotoCount = getPendingUploadPhotos(recordData.photos).length;
  const syncIssues = [];

  try {
    setSavingState(true);
    updateSavingProgress(8, 'Preparando reenvio do registro...');

    updateSavingProgress(18, 'Salvando informacoes na plataforma...');
    if (db && recordData.id) {
      try {
        const payload = buildRecordPayload(recordData, false);
        await Promise.race([
          db.collection('records').doc(recordData.id).set(payload, { merge: true }),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout Firebase')), firebaseWriteTimeoutMs))
        ]);
      } catch (fbError) {
        syncIssues.push(`Firebase: ${getErrorMessage(fbError, 'falha ao salvar os dados')}`);
      }
    } else if (db) {
      try {
        const payload = buildRecordPayload(recordData, true);
        const docRef = await Promise.race([
          db.collection('records').add(payload),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout Firebase')), firebaseWriteTimeoutMs))
        ]);
        recordData.id = docRef.id;
      } catch (fbError) {
        syncIssues.push(`Firebase: ${getErrorMessage(fbError, 'falha ao salvar os dados')}`);
      }
    }

    updateSavingProgress(76, 'Salvando os dados na planilha online...');
    const sheetResult = await sendToGoogleSheets(recordData);
    const onlinePhotoLinks = sheetResult.photoLinks || [];
    if (!sheetResult.synced) {
      syncIssues.push(`Planilha online: ${getErrorMessage(sheetResult.error, 'falha ao enviar os dados')}`);
    }
    if (onlinePhotoLinks.length) {
      recordData.photoUrls = Array.from(new Set([...(recordData.photoUrls || []), ...onlinePhotoLinks]));
      if (db && recordData.id) {
        try {
          await db.collection('records').doc(recordData.id).set(
            {
              photoUrls: recordData.photoUrls,
              photosCount: recordData.photoUrls.length,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            },
            { merge: true }
          );
        } catch (error) {
          syncIssues.push(`Firebase: ${getErrorMessage(error, 'falha ao atualizar os links das fotos')}`);
        }
      }
    }

    const reconciledIssues = clearResolvedPhotoSyncIssues(
      syncIssues,
      pendingPhotoCount,
      onlinePhotoLinks.length,
      sheetResult.synced
    );

    if (reconciledIssues.length) {
      recordData.syncPending = true;
      recordData.syncIssues = Array.from(new Set(reconciledIssues));
    } else {
      recordData.syncPending = false;
      recordData.syncIssues = [];
    }

    allRecords[index] = recordData;
    updateSavingProgress(92, 'Finalizando e atualizando a lista...');
    updateRecordsList();
    persistLocalIfNeeded();
    populateMonthYearFilters();

    if (reconciledIssues.length) {
      const syncErrorMessage = buildRecordSyncErrorMessage(reconciledIssues);
      setSavingState(false);
      updateSavingProgress(0, 'Preparando salvamento...');
      showAlert(alertError, syncErrorMessage);
      showPopup(syncErrorMessage, { title: 'Falha no reenvio online', buttonLabel: 'Entendi' });
      return;
    }

    updateSavingProgress(100, 'Registro sincronizado com sucesso!');
    setTimeout(() => {
      setSavingState(false);
      updateSavingProgress(0, 'Preparando salvamento...');
    }, 350);
    showAlert(alertSuccess, 'Registro reenviado com sucesso!');
  } finally {
    isRecordSaveInProgress = false;
  }
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

const hasIncompleteMonthYearFilter = () => {
  const month = (filterMonth?.value || '').trim();
  const year = (filterYear?.value || '').trim();
  return Boolean((month && !year) || (!month && year));
};

const applyFilters = (records) => {
  let filtered = [...records];
  const month = (filterMonth?.value || '').trim();
  const year = (filterYear?.value || '').trim();

  if ((month && !year) || (!month && year)) {
    return [];
  }

  if (filterInstitution?.value) {
    filtered = filtered.filter((record) => (record.institution || '') === filterInstitution.value);
  }
  if (filterAgent.value) {
    filtered = filtered.filter((record) => record.agent === filterAgent.value);
  }
  if (month && year) {
    filtered = filtered.filter((record) => (record.date || '').slice(0, 7) === `${year}-${month}`);
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

const renderDuplicateDriversList = (container, data, emptyMessage) => {
  container.innerHTML = '';
  if (!data.length) {
    container.innerHTML = `<p>${emptyMessage}</p>`;
    return;
  }

  data.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'stat-item stat-item-report';

    const driverName = item.name || 'Condutor';
    const driverDoc = item.doc ? `CPF: ${item.doc}` : 'CPF: --';
    const occurrences = `${item.count || 0} ocorrências`;

    row.innerHTML = `
      <div class="stat-main">
        <strong>${driverName}</strong>
        <span>${driverDoc} • ${occurrences}</span>
      </div>
      <button type="button" class="ghost-btn recurrence-report-btn">GERAR RELATÓRIO DE REINCIDÊNCIA</button>
    `;

    const actionBtn = row.querySelector('.recurrence-report-btn');
    if (actionBtn) {
      actionBtn.addEventListener('click', () => openTechnicalReportModal(item.driverKey));
    }

    container.appendChild(row);
  });
};

const destroyDashboardChart = (chartKey) => {
  if (dashboardCharts[chartKey]) {
    dashboardCharts[chartKey].destroy();
    dashboardCharts[chartKey] = null;
  }
};

const formatChartDateLabel = (isoDate) => {
  if (!isoDate) return '--';
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}`;
};

const getTopEntries = (entries, max = 10) =>
  entries
    .sort((a, b) => b[1] - a[1])
    .slice(0, max);

const renderDashboardCharts = (filtered, duplicateMap) => {
  if (!window.Chart) return;

  const dateCountMap = filtered.reduce((acc, record) => {
    const key = (record.date || '').trim();
    if (!key) return acc;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const institutionCountMap = filtered.reduce((acc, record) => {
    const key = (record.institution || 'Sem instituição').trim();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const agentCountMap = filtered.reduce((acc, record) => {
    const key = (record.agent || 'Sem agente').trim();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const locationCountMap = filtered.reduce((acc, record) => {
    const key = (record.location || 'Não informado').trim();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const uniqueDrivers = new Set(filtered.map((record) => getDriverKey(record)));
  const recurrenceDrivers = Object.values(duplicateMap).filter((count) => count > 1).length;
  const nonRecurrenceDrivers = Math.max(uniqueDrivers.size - recurrenceDrivers, 0);

  destroyDashboardChart('byDay');
  destroyDashboardChart('byInstitution');
  destroyDashboardChart('byAgent');
  destroyDashboardChart('byLocation');
  destroyDashboardChart('recurrenceRate');

  if (chartByDay) {
    const byDayEntries = Object.entries(dateCountMap).sort((a, b) => a[0].localeCompare(b[0]));
    dashboardCharts.byDay = new window.Chart(chartByDay, {
      type: 'line',
      data: {
        labels: byDayEntries.map(([dateKey]) => formatChartDateLabel(dateKey)),
        datasets: [
          {
            label: 'Ocorrências',
            data: byDayEntries.map(([, value]) => value),
            borderColor: '#588526',
            backgroundColor: 'rgba(88, 133, 38, 0.18)',
            tension: 0.25,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
      },
    });
  }

  if (chartByInstitution) {
    const byInstitutionEntries = getTopEntries(Object.entries(institutionCountMap), 8);
    dashboardCharts.byInstitution = new window.Chart(chartByInstitution, {
      type: 'doughnut',
      data: {
        labels: byInstitutionEntries.map(([label]) => label),
        datasets: [
          {
            data: byInstitutionEntries.map(([, value]) => value),
            backgroundColor: chartPalette,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } },
      },
    });
  }

  if (chartByAgent) {
    const byAgentEntries = getTopEntries(Object.entries(agentCountMap), 10);
    dashboardCharts.byAgent = new window.Chart(chartByAgent, {
      type: 'bar',
      data: {
        labels: byAgentEntries.map(([label]) => label),
        datasets: [
          {
            label: 'Registros',
            data: byAgentEntries.map(([, value]) => value),
            backgroundColor: '#6f9a2f',
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
      },
    });
  }

  if (chartByLocation) {
    const byLocationEntries = getTopEntries(Object.entries(locationCountMap), 10);
    dashboardCharts.byLocation = new window.Chart(chartByLocation, {
      type: 'bar',
      data: {
        labels: byLocationEntries.map(([label]) => label),
        datasets: [
          {
            label: 'Ocorrências',
            data: byLocationEntries.map(([, value]) => value),
            backgroundColor: '#4e7d24',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
      },
    });
  }

  if (chartRecurrenceRate) {
    dashboardCharts.recurrenceRate = new window.Chart(chartRecurrenceRate, {
      type: 'doughnut',
      data: {
        labels: ['Reincidentes', 'Não reincidentes'],
        datasets: [
          {
            data: [recurrenceDrivers, nonRecurrenceDrivers],
            backgroundColor: ['#9a3412', '#588526'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
          tooltip: {
            callbacks: {
              label: (context) => {
                const total = recurrenceDrivers + nonRecurrenceDrivers;
                const value = context.parsed || 0;
                const pct = total ? ((value * 100) / total).toFixed(1) : '0.0';
                return `${context.label}: ${value} (${pct}%)`;
              },
            },
          },
        },
      },
    });
  }
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
  const uniquePhotoLinks = collectRecordPhotoLinks(record);
  if (uniquePhotoLinks.length) {
    uniquePhotoLinks.forEach((url) => {
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
  const currentYearMonth = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;

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
  const currentMonthCount = filtered.filter((record) => (record.date || '').slice(0, 7) === currentYearMonth)
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
      return {
        driverKey: key,
        name,
        doc: sample?.infractorDoc || '',
        count: value,
      };
    });

  renderStatList(byAgentList, byAgent, 'Nenhum registro no período.');
  renderStatList(byMonthList, byMonth, 'Nenhum registro no período.');
  renderDuplicateDriversList(duplicateDriversList, duplicateDrivers, 'Nenhum reincidente no período.');
  renderDashboardCharts(filtered, duplicateMap);
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
  if (isRecordSaveInProgress) return;
  if (!validateRequiredFields()) return;

  isRecordSaveInProgress = true;

  try {
    setSavingState(true);
    updateSavingProgress(5, 'Preparando salvamento das informacoes...');

    const formData = new FormData(document.getElementById('fiscalizationForm'));
    const recordData = {};
    const startedEditingIndex = currentlyEditingIndex;
    let savedRecordIndex = startedEditingIndex;
    const syncIssues = [];
    formData.forEach((value, key) => {
      recordData[key] = value;
    });
    recordData.syncPending = false;
    recordData.syncIssues = [];

    if (vehicleNoPlateInput?.checked || isNoPlateValue(recordData.vehiclePlate)) {
      recordData.vehiclePlate = noPlateLabel;
    }

    // COPIA AS FOTOS
    recordData.photos = [...photosData];
    const pendingPhotoCount = getPendingUploadPhotos(recordData.photos).length;

    if (!recordData.agent) {
      const loggedAgent = localStorage.getItem(sessionKey);
      recordData.agent = agentSelect.value || loggedAgent || '';
    }
    if (!recordData.institution) {
      const loggedInstitution = getLoggedInstitutionKey();
      recordData.institution = getInstitutionLabel(loggedInstitution);
    }

    if (currentlyEditingIndex < 0) {
      const occurrence = (recordData.occurrenceNumber || '').trim();
      if (occurrence) {
        const exists = allRecords.some((item) => (item.occurrenceNumber || '').trim() === occurrence);
        if (exists) {
          showAlert(alertError, `O numero de ocorrencia ${occurrence} ja foi registrado.`);
          setSavingState(false);
          return;
        }
      }
    }

    try {
      updateSavingProgress(18, 'Salvando informacoes na plataforma...');

    if (currentlyEditingIndex >= 0) {
      const existing = allRecords[currentlyEditingIndex];
      recordData.createdAtLocal = existing?.createdAtLocal || existing?.timestamp || existing?.createdAt || new Date().toISOString();
      const recordId = existing?.id;
      if (db && recordId) {
        try {
          const payload = buildRecordPayload(recordData, false);
          await Promise.race([
            db.collection('records').doc(recordId).set(payload, { merge: true }),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout Firebase')), firebaseWriteTimeoutMs))
          ]);
          recordData.id = recordId;
        } catch (fbError) {
          syncIssues.push(`Firebase: ${getErrorMessage(fbError, 'falha ao salvar os dados')}`);
        }
      } else if (recordId) {
        recordData.id = recordId;
      }
      allRecords[currentlyEditingIndex] = recordData;
      savedRecordIndex = startedEditingIndex;
      currentlyEditingIndex = -1;
      addRecordBtn.textContent = 'Adicionar Registro';
    } else {
      recordData.createdAtLocal = new Date().toISOString();
      if (db) {
        try {
          const payload = buildRecordPayload(recordData, true);
          const docRef = await Promise.race([
            db.collection('records').add(payload),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout Firebase')), firebaseWriteTimeoutMs))
          ]);
          recordData.id = docRef.id;
        } catch (fbError) {
          syncIssues.push(`Firebase: ${getErrorMessage(fbError, 'falha ao salvar os dados')}`);
        }
      }
      allRecords.push(recordData);
      savedRecordIndex = allRecords.length - 1;
    }
    } catch (error) {
      // Erro geral na adição do registro
      if (currentlyEditingIndex >= 0) {
        allRecords[currentlyEditingIndex] = recordData;
        savedRecordIndex = currentlyEditingIndex;
        currentlyEditingIndex = -1;
        addRecordBtn.textContent = 'Adicionar Registro';
      } else {
        allRecords.push(recordData);
        savedRecordIndex = allRecords.length - 1;
      }
    }

    updateSavingProgress(76, 'Salvando os dados na planilha online...');
    const sheetResult = await sendToGoogleSheets(recordData);
    const onlinePhotoLinks = sheetResult.photoLinks || [];
    if (!sheetResult.synced) {
      syncIssues.push(`Planilha online: ${getErrorMessage(sheetResult.error, 'falha ao enviar os dados')}`);
    }
    if (onlinePhotoLinks.length) {
      recordData.photoUrls = Array.from(new Set([...(recordData.photoUrls || []), ...onlinePhotoLinks]));

      if (db && recordData.id) {
        try {
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

    if (sheetResult.synced && db && recordData.id) {
      syncRecordPhotosInBackground(recordData, recordData.id);
    }

    const reconciledIssues = clearResolvedPhotoSyncIssues(
      syncIssues,
      pendingPhotoCount,
      onlinePhotoLinks.length,
      sheetResult.synced
    );

    if (reconciledIssues.length) {
      recordData.syncPending = true;
      recordData.syncIssues = Array.from(new Set(reconciledIssues));
    } else {
      recordData.syncPending = false;
      recordData.syncIssues = [];
    }

    updateSavingProgress(92, 'Finalizando e atualizando a lista...');
    updateRecordsList();
    persistLocalIfNeeded();
    populateMonthYearFilters();

    if (reconciledIssues.length) {
      const syncErrorMessage = buildRecordSyncErrorMessage(reconciledIssues);
      currentlyEditingIndex = savedRecordIndex;
      addRecordBtn.textContent = 'Tentar Reenviar';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setSavingState(false);
      updateSavingProgress(0, 'Preparando salvamento...');
      showAlert(alertError, syncErrorMessage);
      showPopup(syncErrorMessage, { title: 'Falha no envio online', buttonLabel: 'Entendi' });
      return;
    }

    clearFormAfterRecord();

    // Scroll para o topo do formulário
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Mostrar notificação de sucesso
    updateSavingProgress(100, 'Registro salvo com sucesso!');
    setTimeout(() => {
      setSavingState(false);
      updateSavingProgress(0, 'Preparando salvamento...');
    }, 350);
    showAlert(alertSuccess, 'Registro salvo com sucesso!');
  } finally {
    isRecordSaveInProgress = false;
  }
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

  photoPreviewContainer.innerHTML = '';
  photosData = [];
  if (record.photos && record.photos.length) {
    record.photos.forEach((photo) => addPhotoPreview(photo.data, photo.name));
  }
  const uniquePhotoLinks = collectRecordPhotoLinks(record);
  if (uniquePhotoLinks.length) {
    uniquePhotoLinks.forEach((url, index) => {
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
  const password = deleteConfirmPassword.value.trim();
  const loggedUser = getLoggedManagedUser();
  
  if (!password) {
    deletePasswordError.textContent = 'Digite sua senha';
    deletePasswordError.style.display = 'block';
    return;
  }

  const isValidPassword = await verifyManagedUserPassword(loggedUser, password);

  if (!isValidPassword) {
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

const appendRecordPhotoPages = (doc, record, pdfPhotos = []) => {
  if (!Array.isArray(pdfPhotos) || !pdfPhotos.length) return;

  pdfPhotos.forEach((photo, index) => {
    if (!photo?.dataUrl || typeof photo.dataUrl !== 'string') return;

    doc.addPage('a4', 'portrait');

    const pageWidth = 210;
    const marginLeft = 15;
    const marginRight = 15;
    const contentWidth = pageWidth - marginLeft - marginRight;

    let yPos = 20;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('ANEXO FOTOGRAFICO DA OCORRENCIA', pageWidth / 2, yPos, { align: 'center' });
    yPos += 8;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(`Ocorrencia: ${record.occurrenceNumber || '--'}`, marginLeft, yPos);
    doc.text(`Imagem ${index + 1} de ${pdfPhotos.length}`, pageWidth - marginRight, yPos, {
      align: 'right',
    });
    yPos += 8;

    const maxImageWidth = contentWidth;
    const maxImageHeight = 190;
    let drawWidth = maxImageWidth;
    let drawHeight = maxImageHeight;

    try {
      const props = doc.getImageProperties(photo.dataUrl);
      if (props?.width && props?.height) {
        const ratio = Math.min(maxImageWidth / props.width, maxImageHeight / props.height);
        drawWidth = props.width * ratio;
        drawHeight = props.height * ratio;
      }
    } catch (_) {
      drawWidth = maxImageWidth;
      drawHeight = maxImageHeight;
    }

    const imageX = (pageWidth - drawWidth) / 2;
    const imageY = yPos;
    const format = photo.dataUrl.includes('image/png') ? 'PNG' : 'JPEG';
    doc.addImage(photo.dataUrl, format, imageX, imageY, drawWidth, drawHeight, undefined, 'MEDIUM');

    const legendY = imageY + drawHeight + 8;
    doc.setFont('helvetica', 'bold');
    doc.text('Legenda:', marginLeft, legendY);
    doc.setFont('helvetica', 'normal');
    const legendText = (photo.caption || '').trim() || `Foto ${index + 1}`;
    const legendLines = doc.splitTextToSize(legendText, contentWidth);
    doc.text(legendLines, marginLeft, legendY + 5);
  });
};

// Função para preparar links e imagens das fotos do registro para o PDF
const prepareRecordPhotos = async (record) => {
  const externalLinks = collectRecordPhotoLinks(record);
  const preparedPhotos = [];

  if (Array.isArray(record.photos)) {
    record.photos.forEach((photo, index) => {
      if (photo?.data && typeof photo.data === 'string' && photo.data.startsWith('data:image')) {
        preparedPhotos.push({
          dataUrl: photo.data,
          caption: photo.name || `Foto ${index + 1}`,
        });
      }
    });
  }

  if (preparedPhotos.length < maxRecordPdfPhotos) {
    for (const [index, link] of externalLinks.entries()) {
      if (preparedPhotos.length >= maxRecordPdfPhotos) break;
      try {
        const dataUrl = await fetchImageAsDataUrl(link);
        if (typeof dataUrl === 'string' && dataUrl.startsWith('data:image')) {
          preparedPhotos.push({
            dataUrl,
            caption: `Foto online ${index + 1}`,
          });
        }
      } catch (_) {
        // Se alguma foto online falhar, segue com as demais
      }
    }
  }

  return {
    ...record,
    externalPhotoLinks: externalLinks,
    pdfPhotos: preparedPhotos.slice(0, maxRecordPdfPhotos),
  };
};

const generatePDFBlob = async (record) => {
  if (!jsPDF) throw new Error('jsPDF não disponível');
  
  // Prepara as fotos (carrega URLs se necessário)
  const preparedRecord = await prepareRecordPhotos(record);
  
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  renderRecordToDoc(doc, preparedRecord);
  appendRecordPhotoPages(doc, preparedRecord, preparedRecord.pdfPhotos || []);
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

const technicalIgnoredFields = new Set([
  'id',
  'photos',
  'photoUrls',
  'pdfPhotos',
  'externalPhotoLinks',
  'timestamp',
  'createdAt',
  'updatedAt',
  'createdAtLocal',
  'reportType',
  'syncPending',
  'syncIssues',
  'source',
]);

const technicalFieldLabelMap = {
  occurrenceNumber: 'Número da ocorrência',
  date: 'Data',
  time: 'Hora',
  institution: 'Instituição',
  agent: 'Agente',
  infractorName: 'Nome do condutor',
  infractorDoc: 'CPF',
  whatsapp: 'Telefone',
  vehiclePlate: 'Placa',
  vehicleModel: 'Modelo',
  vehicleColor: 'Cor',
  vehicleYear: 'Ano',
  location: 'Local',
  observations: 'Observações',
  municipio: 'Município',
  municipality: 'Município',
  city: 'Município',
  endereco: 'Endereço',
  address: 'Endereço',
};

const toTitleCase = (text) =>
  String(text || '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/^./, (char) => char.toUpperCase());

const getTechnicalFieldLabel = (field) => technicalFieldLabelMap[field] || toTitleCase(field);

const formatTechnicalFieldValue = (value) => {
  if (value === null || value === undefined) return '--';
  if (typeof value === 'string') return value.trim() || '--';
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) {
    if (!value.length) return '--';
    return value.map((item) => formatTechnicalFieldValue(item)).join(' | ');
  }
  if (typeof value === 'object') {
    try {
      const asDate = getFirestoreDateValue(value);
      if (Number.isFinite(asDate)) {
        return new Date(asDate).toLocaleString('pt-BR');
      }
    } catch (_) {}
    try {
      return JSON.stringify(value);
    } catch (_) {
      return String(value);
    }
  }
  return String(value);
};

const formatDateTimeBr = (date) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '--';
  return date.toLocaleString('pt-BR');
};

const extractCoordinates = (locationText) => {
  const source = String(locationText || '');
  const match = source.match(/(-?\d{1,2}\.\d+)\s*,\s*(-?\d{1,3}\.\d+)/);
  if (!match) return '--';
  return `${match[1]}, ${match[2]}`;
};

const getDriverRecordsByKey = (driverKey) =>
  allRecords
    .filter((record) => getDriverKey(record) === driverKey)
    .sort((a, b) => {
      const aTs = getRecordTimestamp(a) ?? getRecordCreatedAtTimestamp(a) ?? 0;
      const bTs = getRecordTimestamp(b) ?? getRecordCreatedAtTimestamp(b) ?? 0;
      return aTs - bTs;
    });

const buildTechnicalReportNumber = () => {
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `RTR-${stamp}-${random}`;
};

const buildTechnicalTexts = (records = []) => {
  const count = records.length;
  const firstDate = records[0]?.date ? formatDateBr(records[0].date) : '--';
  const lastDate = records[count - 1]?.date ? formatDateBr(records[count - 1].date) : '--';

  return {
    section6:
      'O presente relatório foi elaborado com base nas informações registradas na plataforma Veículos na Praia Não, sistema utilizado pela Área de Proteção Ambiental Delta do Parnaíba e instituições parceiras para gerenciamento das ocorrências relacionadas à circulação de veículos automotores em áreas de praia.\n\nApós consulta à base de dados da aplicação, verificou-se a existência de múltiplos registros relacionados ao condutor acima identificado, indicando repetição da conduta em diferentes ações de fiscalização.',
    section7:
      'O Plano de Manejo da Área de Proteção Ambiental Delta do Parnaíba, aprovado pela Portaria ICMBio nº 827, de 05 de agosto de 2020, estabelece como normas gerais da Unidade de Conservação:\n\nItem 12 – É proibida a entrada, permanência e circulação de veículos automotores nas praias litorâneas e restingas, ressalvadas as exceções previstas.\n\nItem 13 – É proibida a entrada, permanência e circulação de veículos automotores nas dunas, ressalvadas as exceções previstas.\n\nAs normas constantes do Plano de Manejo possuem caráter obrigatório para todos os usuários da Unidade de Conservação.',
    section8:
      'O presente relatório possui finalidade exclusivamente técnica e visa subsidiar eventual procedimento administrativo ambiental.\n\nA conduta registrada poderá caracterizar infração administrativa ambiental prevista no Decreto Federal nº 6.514, de 22 de julho de 2008, especialmente em razão do descumprimento das normas estabelecidas para Unidade de Conservação Federal, cabendo à autoridade ambiental competente proceder ao enquadramento legal aplicável ao caso concreto.\n\nA responsabilização administrativa deverá observar as disposições da Lei nº 9.605, de 12 de fevereiro de 1998 (Lei de Crimes Ambientais), da Lei nº 9.985, de 18 de julho de 2000 (Sistema Nacional de Unidades de Conservação da Natureza), do Decreto nº 6.514/2008 e demais normas ambientais pertinentes.',
    section9:
      `Conforme consulta à base de dados da plataforma, verificou-se que o condutor possui ${count} registros distintos relacionados à circulação de veículo automotor em áreas de praia inseridas na Área de Proteção Ambiental Delta do Parnaíba.\n\nAs ocorrências encontram-se distribuídas no período compreendido entre ${firstDate} e ${lastDate}, evidenciando repetição da conduta registrada pelas equipes de fiscalização.`,
    section10:
      'Considerando os registros constantes na plataforma Veículos na Praia Não, conclui-se que o histórico de ocorrências do condutor acima identificado constitui elemento técnico relevante para subsidiar eventual procedimento administrativo ambiental.\n\nO presente relatório consolida todas as informações registradas pelas equipes de fiscalização, incluindo dados cadastrais, registros fotográficos, localização geográfica e demais informações coletadas em campo, competindo à autoridade ambiental competente proceder à análise dos fatos e adotar as providências administrativas cabíveis.',
  };
};

const renderTechnicalExtraPhotos = () => {
  if (!techExtraPhotosList) return;
  techExtraPhotosList.innerHTML = '';

  if (!technicalReportExtraPhotos.length) {
    const empty = document.createElement('span');
    empty.className = 'activity-photo-empty';
    empty.textContent = 'Nenhuma foto complementar adicionada.';
    techExtraPhotosList.appendChild(empty);
    return;
  }

  technicalReportExtraPhotos.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = 'activity-photo-item';

    const thumb = document.createElement('img');
    thumb.className = 'activity-photo-thumb';
    thumb.src = photo.dataUrl;
    thumb.alt = `Foto complementar ${index + 1}`;

    const caption = document.createElement('input');
    caption.type = 'text';
    caption.className = 'activity-photo-caption';
    caption.maxLength = 180;
    caption.placeholder = 'Legenda da foto';
    caption.value = photo.caption || '';
    caption.addEventListener('input', (event) => {
      technicalReportExtraPhotos[index].caption = event.target.value;
    });

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'activity-photo-remove';
    remove.textContent = 'Remover';
    remove.addEventListener('click', () => {
      technicalReportExtraPhotos.splice(index, 1);
      renderTechnicalExtraPhotos();
    });

    item.appendChild(thumb);
    item.appendChild(caption);
    item.appendChild(remove);
    techExtraPhotosList.appendChild(item);
  });
};

const addTechnicalExtraPhotos = async (fileList) => {
  const imageFiles = Array.from(fileList || []).filter((file) => (file.type || '').startsWith('image/'));
  if (!imageFiles.length) return;

  const photos = await Promise.all(
    imageFiles.map(async (file) => ({
      name: file.name || 'foto_complementar.jpg',
      dataUrl: await readImageAsDataUrl(file),
      caption: '',
    }))
  );

  technicalReportExtraPhotos = technicalReportExtraPhotos.concat(photos);
  renderTechnicalExtraPhotos();
};

const closeTechnicalReportModal = () => {
  if (!technicalReportModal) return;
  technicalReportModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const openTechnicalReportModal = (driverKey) => {
  if (!technicalReportModal) return;

  const records = getDriverRecordsByKey(driverKey);
  if (!records.length) {
    showAlert(alertError, 'Nenhum registro encontrado para este condutor.');
    return;
  }
  if (records.length < 2) {
    showAlert(alertError, 'O relatório técnico é exclusivo para condutores reincidentes.');
    return;
  }

  const mostRecent = records[records.length - 1] || {};
  const reportNumber = buildTechnicalReportNumber();
  const issuedAt = new Date();
  const texts = buildTechnicalTexts(records);

  technicalReportContext = {
    driverKey,
    records,
    reportNumber,
    issuedAt,
  };

  technicalReportExtraPhotos = [];
  renderTechnicalExtraPhotos();

  if (technicalReportDriverInfo) {
    technicalReportDriverInfo.textContent = `${mostRecent.infractorName || 'Condutor'} • ${records.length} ocorrências`;
  }
  if (technicalReportNumberInput) technicalReportNumberInput.value = reportNumber;
  if (technicalReportIssuedAtInput) technicalReportIssuedAtInput.value = formatDateTimeBr(issuedAt);

  if (techDriverNameInput) techDriverNameInput.value = mostRecent.infractorName || '--';
  if (techDriverCpfInput) techDriverCpfInput.value = mostRecent.infractorDoc || '--';
  if (techDriverPhoneInput) techDriverPhoneInput.value = mostRecent.whatsapp || '--';

  if (techVehiclePlateInput) techVehiclePlateInput.value = mostRecent.vehiclePlate || '--';
  if (techVehicleModelInput) techVehicleModelInput.value = mostRecent.vehicleModel || '--';
  if (techVehicleColorInput) techVehicleColorInput.value = mostRecent.vehicleColor || '--';
  if (techVehicleYearInput) techVehicleYearInput.value = mostRecent.vehicleYear || '--';

  if (techTextSection6Input) techTextSection6Input.value = texts.section6;
  if (techTextSection7Input) techTextSection7Input.value = texts.section7;
  if (techTextSection8Input) techTextSection8Input.value = texts.section8;
  if (techTextSection9Input) techTextSection9Input.value = texts.section9;
  if (techTextSection10Input) techTextSection10Input.value = texts.section10;

  if (techExtraPhotosInput) {
    techExtraPhotosInput.value = '';
  }

  technicalReportModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const buildOccurrenceAllFieldsRows = (record) => {
  const rows = [];
  Object.entries(record || {}).forEach(([field, value]) => {
    if (technicalIgnoredFields.has(field)) return;
    if (field === 'observations') return;
    const label = getTechnicalFieldLabel(field);
    const formatted = formatTechnicalFieldValue(value);
    rows.push([label, formatted]);
  });
  return rows;
};

const prepareTechnicalPhotoEntries = async (records, extraPhotos = []) => {
  const entries = [];
  const extraPhotosQueue = Array.isArray(extraPhotos)
    ? extraPhotos.filter((photo) => photo?.dataUrl && typeof photo.dataUrl === 'string')
    : [];

  for (const record of records) {
    const occurrenceLabel = record.occurrenceNumber || '--';
    let selectedPhoto = null;

    if (Array.isArray(record.photos)) {
      for (const photo of record.photos) {
        if (!photo?.data || typeof photo.data !== 'string' || !photo.data.startsWith('data:image')) continue;
        selectedPhoto = {
          dataUrl: photo.data,
          caption: photo.name || 'Foto da ocorrência',
          occurrenceNumber: occurrenceLabel,
          source: 'Registro da ocorrência',
        };
        break;
      }
    }

    if (!selectedPhoto) {
      const extraPhoto = extraPhotosQueue.shift();
      if (extraPhoto) {
        selectedPhoto = {
          dataUrl: extraPhoto.dataUrl,
          caption: extraPhoto.caption || extraPhoto.name || 'Foto complementar da ocorrência',
          occurrenceNumber: occurrenceLabel,
          source: 'Adicionada no gerador',
        };
      }
    }

    if (!selectedPhoto) {
      const links = collectRecordPhotoLinks(record);
      for (const link of links) {
        try {
          const dataUrl = await fetchImageAsDataUrl(link);
          if (typeof dataUrl === 'string' && dataUrl.startsWith('data:image')) {
            selectedPhoto = {
              dataUrl,
              caption: 'Foto online da ocorrência',
              occurrenceNumber: occurrenceLabel,
              source: 'Registro da ocorrência',
            };
            break;
          }
        } catch (_) {
          // Ignora fotos indisponíveis e tenta a próxima.
        }
      }
    }

    if (selectedPhoto) {
      entries.push(selectedPhoto);
    }
  }

  return entries;
};

const drawTechnicalHeader = (doc, pageWidth, marginLeft, marginRight) => {
  let yPos = 8;
  try {
    doc.addImage('/Brasão da república quadrado.png', 'PNG', (pageWidth - 14) / 2, yPos, 14, 14);
  } catch (_) {}

  yPos += 17;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.text('MINISTÉRIO DO MEIO AMBIENTE E MUDANÇA DO CLIMA', pageWidth / 2, yPos, { align: 'center' });
  yPos += 3.8;
  doc.text('INSTITUTO CHICO MENDES DE CONSERVAÇÃO DA BIODIVERSIDADE', pageWidth / 2, yPos, {
    align: 'center',
  });
  yPos += 3.8;
  doc.text('ÁREA DE PROTEÇÃO AMBIENTAL DELTA DO PARNAÍBA', pageWidth / 2, yPos, { align: 'center' });
  yPos += 3;
  doc.setDrawColor(0, 69, 33);
  doc.setLineWidth(0.35);
  doc.line(marginLeft, yPos, pageWidth - marginRight, yPos);
};

const drawTechnicalFooter = (doc, pageWidth, pageNumber, totalPages) => {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(95, 95, 95);
  doc.text('Relatório gerado automaticamente pela plataforma Veículos na Praia Não', pageWidth / 2, 286, {
    align: 'center',
  });
  doc.text(`Página ${pageNumber} de ${totalPages}`, pageWidth - 12, 286, { align: 'right' });
  doc.setTextColor(0, 0, 0);
};

const applyTechnicalHeaderFooter = (doc, pageWidth, marginLeft, marginRight) => {
  const totalPages = doc.getNumberOfPages();
  for (let page = 1; page <= totalPages; page += 1) {
    doc.setPage(page);
    drawTechnicalHeader(doc, pageWidth, marginLeft, marginRight);
    drawTechnicalFooter(doc, pageWidth, page, totalPages);
  }
};

const ensureTechnicalSpace = (doc, yPos, requiredHeight, contentTop, contentBottom) => {
  if (yPos + requiredHeight <= contentBottom) return yPos;
  doc.addPage('a4', 'portrait');
  return contentTop;
};

const addTechnicalSectionTitle = (doc, title, yPos, marginLeft, contentTop, contentBottom) => {
  const nextY = ensureTechnicalSpace(doc, yPos, 8, contentTop, contentBottom);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text(title, marginLeft, nextY);
  return nextY + 6;
};

const drawJustifiedTechnicalLine = (doc, line, x, y, width, justify) => {
  const normalizedLine = String(line || '').trim();
  if (!normalizedLine) return;

  if (!justify) {
    doc.text(normalizedLine, x, y);
    return;
  }

  const words = normalizedLine.split(/\s+/).filter(Boolean);
  if (words.length <= 1) {
    doc.text(normalizedLine, x, y);
    return;
  }

  const baseSpaceWidth = doc.getTextWidth(' ');
  const wordsWidth = words.reduce((sum, word) => sum + doc.getTextWidth(word), 0);
  const totalBaseWidth = wordsWidth + baseSpaceWidth * (words.length - 1);
  const extraSpace = (width - totalBaseWidth) / (words.length - 1);

  if (!Number.isFinite(extraSpace) || extraSpace <= 0) {
    doc.text(normalizedLine, x, y);
    return;
  }

  let currentX = x;
  words.forEach((word, index) => {
    doc.text(word, currentX, y);
    currentX += doc.getTextWidth(word);
    if (index < words.length - 1) {
      currentX += baseSpaceWidth + extraSpace;
    }
  });
};

const addTechnicalParagraph = (doc, text, yPos, marginLeft, contentWidth, contentTop, contentBottom) => {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);

  const paragraphs = String(text || '--')
    .split('\n')
    .map((paragraph) => paragraph.trim());

  paragraphs.forEach((paragraph, paragraphIndex) => {
    if (!paragraph) {
      yPos = ensureTechnicalSpace(doc, yPos, 5, contentTop, contentBottom);
      yPos += 5;
      return;
    }

    const lines = doc.splitTextToSize(paragraph, contentWidth);
    lines.forEach((line, lineIndex) => {
      yPos = ensureTechnicalSpace(doc, yPos, 5, contentTop, contentBottom);
      const shouldJustify = lineIndex < lines.length - 1;
      drawJustifiedTechnicalLine(doc, line, marginLeft, yPos, contentWidth, shouldJustify);
      yPos += 5;
    });

    if (paragraphIndex < paragraphs.length - 1) {
      yPos = ensureTechnicalSpace(doc, yPos, 4, contentTop, contentBottom);
      yPos += 4;
    }
  });

  return yPos + 1;
};

const buildTechnicalReportDoc = (payload, hashValue) => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageWidth = 210;
  const marginLeft = 15;
  const marginRight = 15;
  const contentTop = 44;
  const contentBottom = 272;
  const contentWidth = pageWidth - marginLeft - marginRight;

  const records = payload.records || [];
  const orderedRecords = [...records].sort((a, b) => {
    const aTs = getRecordTimestamp(a) ?? getRecordCreatedAtTimestamp(a) ?? 0;
    const bTs = getRecordTimestamp(b) ?? getRecordCreatedAtTimestamp(b) ?? 0;
    return aTs - bTs;
  });

  let yPos = contentTop;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('RELATÓRIO TÉCNICO DE HISTÓRICO DE OCORRÊNCIAS', pageWidth / 2, yPos, { align: 'center' });
  yPos += 6;
  doc.setFontSize(10);
  doc.text('Relatório Técnico de Fiscalização Ambiental', pageWidth / 2, yPos, { align: 'center' });
  yPos += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.text(`Número do Relatório: ${payload.reportNumber}`, marginLeft, yPos);
  doc.text(`Data de emissão: ${payload.issuedAt}`, pageWidth - marginRight, yPos, { align: 'right' });
  yPos += 8;

  yPos = addTechnicalSectionTitle(
    doc,
    '1. Identificação do Condutor',
    yPos,
    marginLeft,
    contentTop,
    contentBottom
  );
  doc.autoTable({
    startY: yPos,
    head: [['Campo', 'Informação']],
    body: [
      ['Nome', payload.driver.name],
      ['CPF', payload.driver.cpf],
      ['Telefone', payload.driver.phone],
    ],
    margin: { left: marginLeft, right: marginRight, top: contentTop, bottom: 20 },
    styles: { fontSize: 9, cellPadding: 2, overflow: 'linebreak' },
    headStyles: { fillColor: [0, 69, 33], textColor: 255 },
    columnStyles: { 0: { cellWidth: 48 }, 1: { cellWidth: 'auto' } },
  });
  yPos = (doc.lastAutoTable?.finalY || yPos) + 6;

  yPos = addTechnicalSectionTitle(
    doc,
    '2. Identificação do Veículo',
    yPos,
    marginLeft,
    contentTop,
    contentBottom
  );
  doc.autoTable({
    startY: yPos,
    head: [['Campo', 'Informação']],
    body: [
      ['Placa', payload.vehicle.plate],
      ['Modelo', payload.vehicle.model],
      ['Cor', payload.vehicle.color],
      ['Ano', payload.vehicle.year],
    ],
    margin: { left: marginLeft, right: marginRight, top: contentTop, bottom: 20 },
    styles: { fontSize: 9, cellPadding: 2, overflow: 'linebreak' },
    headStyles: { fillColor: [0, 69, 33], textColor: 255 },
    columnStyles: { 0: { cellWidth: 48 }, 1: { cellWidth: 'auto' } },
  });
  yPos = (doc.lastAutoTable?.finalY || yPos) + 6;

  yPos = addTechnicalSectionTitle(
    doc,
    '3. Histórico de Ocorrências',
    yPos,
    marginLeft,
    contentTop,
    contentBottom
  );
  doc.autoTable({
    startY: yPos,
    head: [['Nº da ocorrência', 'Data', 'Hora', 'Local', 'Coordenadas', 'Instituição', 'Agente']],
    body: orderedRecords.map((record) => [
      record.occurrenceNumber || '--',
      record.date ? formatDateBr(record.date) : '--',
      record.time || '--',
      record.location || '--',
      extractCoordinates(record.location),
      record.institution || '--',
      record.agent || '--',
    ]),
    margin: { left: marginLeft, right: marginRight, top: contentTop, bottom: 20 },
    styles: { fontSize: 8, cellPadding: 1.8, overflow: 'linebreak' },
    headStyles: { fillColor: [0, 69, 33], textColor: 255 },
  });
  yPos = (doc.lastAutoTable?.finalY || yPos) + 6;

  yPos = addTechnicalSectionTitle(
    doc,
    '4. Informações Coletadas em Campo',
    yPos,
    marginLeft,
    contentTop,
    contentBottom
  );
  orderedRecords.forEach((record) => {
    yPos = ensureTechnicalSpace(doc, yPos, 8, contentTop, contentBottom);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(`Ocorrência nº ${record.occurrenceNumber || '--'}`, marginLeft, yPos);
    yPos += 4;

    const rows = buildOccurrenceAllFieldsRows(record);
    if (!rows.length) {
      yPos = addTechnicalParagraph(
        doc,
        'Sem campos adicionais disponíveis.',
        yPos,
        marginLeft,
        contentWidth,
        contentTop,
        contentBottom
      );
      return;
    }

    doc.autoTable({
      startY: yPos,
      head: [['Campo', 'Valor']],
      body: rows,
      margin: { left: marginLeft, right: marginRight, top: contentTop, bottom: 20 },
      styles: { fontSize: 8, cellPadding: 1.8, overflow: 'linebreak', valign: 'top' },
      headStyles: { fillColor: [0, 69, 33], textColor: 255 },
      columnStyles: { 0: { cellWidth: 55 }, 1: { cellWidth: 'auto' } },
    });
    yPos = (doc.lastAutoTable?.finalY || yPos) + 6;
  });

  yPos = addTechnicalSectionTitle(
    doc,
    '5. Registro Fotográfico',
    yPos,
    marginLeft,
    contentTop,
    contentBottom
  );
  if (!payload.photoEntries.length) {
    yPos = addTechnicalParagraph(
      doc,
      'Não há fotografias disponíveis para este histórico de ocorrências.',
      yPos,
      marginLeft,
      contentWidth,
      contentTop,
      contentBottom
    );
  } else {
    payload.photoEntries.forEach((photo, index) => {
      doc.addPage('a4', 'portrait');
      yPos = contentTop;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(`Figura ${index + 1}`, marginLeft, yPos);
      yPos += 5;

      const maxImageWidth = contentWidth;
      const maxImageHeight = 190;
      let drawWidth = maxImageWidth;
      let drawHeight = maxImageHeight;

      try {
        const props = doc.getImageProperties(photo.dataUrl);
        if (props?.width && props?.height) {
          const ratio = Math.min(maxImageWidth / props.width, maxImageHeight / props.height);
          drawWidth = props.width * ratio;
          drawHeight = props.height * ratio;
        }
      } catch (_) {
        drawWidth = maxImageWidth;
        drawHeight = maxImageHeight;
      }

      const imageX = (pageWidth - drawWidth) / 2;
      const imageY = yPos;
      const format = photo.dataUrl.includes('image/png') ? 'PNG' : 'JPEG';
      doc.addImage(photo.dataUrl, format, imageX, imageY, drawWidth, drawHeight, undefined, 'MEDIUM');

      yPos = imageY + drawHeight + 6;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      const legend = `Ocorrência: ${photo.occurrenceNumber || '--'} | Origem: ${photo.source || '--'} | ${photo.caption || '--'}`;
      const legendLines = doc.splitTextToSize(legend, contentWidth);
      legendLines.forEach((line) => {
        doc.text(line, marginLeft, yPos, { align: 'justify', maxWidth: contentWidth });
        yPos += 4.6;
      });
    });
  }

  doc.addPage('a4', 'portrait');
  yPos = contentTop;
  yPos = addTechnicalSectionTitle(doc, '6. Fundamentação Técnica', yPos, marginLeft, contentTop, contentBottom);
  yPos = addTechnicalParagraph(doc, payload.texts.section6, yPos, marginLeft, contentWidth, contentTop, contentBottom);
  yPos = addTechnicalSectionTitle(doc, '7. Fundamentação Normativa', yPos, marginLeft, contentTop, contentBottom);
  yPos = addTechnicalParagraph(doc, payload.texts.section7, yPos, marginLeft, contentWidth, contentTop, contentBottom);
  yPos = addTechnicalSectionTitle(doc, '8. Fundamentação Legal', yPos, marginLeft, contentTop, contentBottom);
  yPos = addTechnicalParagraph(doc, payload.texts.section8, yPos, marginLeft, contentWidth, contentTop, contentBottom);
  yPos = addTechnicalSectionTitle(doc, '9. Análise Técnica', yPos, marginLeft, contentTop, contentBottom);
  yPos = addTechnicalParagraph(doc, payload.texts.section9, yPos, marginLeft, contentWidth, contentTop, contentBottom);
  yPos = addTechnicalSectionTitle(doc, '10. Conclusão', yPos, marginLeft, contentTop, contentBottom);
  yPos = addTechnicalParagraph(doc, payload.texts.section10, yPos, marginLeft, contentWidth, contentTop, contentBottom);

  applyTechnicalHeaderFooter(doc, pageWidth, marginLeft, marginRight);
  return doc;
};

const sha256Hex = async (buffer) => {
  if (!window.crypto?.subtle) return '--';
  const digest = await window.crypto.subtle.digest('SHA-256', buffer);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
};

const generateTechnicalReport = async () => {
  if (!technicalReportContext) {
    showAlert(alertError, 'Selecione um condutor reincidente para gerar o relatório.');
    return;
  }
  if (!jsPDF) {
    showAlert(alertError, 'Biblioteca jsPDF não carregada.');
    return;
  }

  const records = technicalReportContext.records || [];
  if (records.length < 2) {
    showAlert(alertError, 'É necessário possuir mais de uma ocorrência para gerar este relatório.');
    return;
  }

  try {
    if (technicalReportGenerateBtn) {
      technicalReportGenerateBtn.disabled = true;
      technicalReportGenerateBtn.textContent = 'Gerando relatório...';
    }

    const photoEntries = await prepareTechnicalPhotoEntries(records, technicalReportExtraPhotos);
    const payload = {
      reportNumber: (technicalReportNumberInput?.value || technicalReportContext.reportNumber || buildTechnicalReportNumber()).trim(),
      issuedAt: (technicalReportIssuedAtInput?.value || formatDateTimeBr(new Date())).trim(),
      records,
      photoEntries,
      appVersion: currentAppVersion || (document.getElementById('appVersion')?.textContent || '').replace(/^v/i, ''),
      driver: {
        name: (techDriverNameInput?.value || '--').trim() || '--',
        cpf: (techDriverCpfInput?.value || '--').trim() || '--',
        phone: (techDriverPhoneInput?.value || '--').trim() || '--',
      },
      vehicle: {
        plate: (techVehiclePlateInput?.value || '--').trim() || '--',
        model: (techVehicleModelInput?.value || '--').trim() || '--',
        color: (techVehicleColorInput?.value || '--').trim() || '--',
        year: (techVehicleYearInput?.value || '--').trim() || '--',
      },
      texts: {
        section6: (techTextSection6Input?.value || '--').trim() || '--',
        section7: (techTextSection7Input?.value || '--').trim() || '--',
        section8: (techTextSection8Input?.value || '--').trim() || '--',
        section9: (techTextSection9Input?.value || '--').trim() || '--',
        section10: (techTextSection10Input?.value || '--').trim() || '--',
      },
    };

    const draftDoc = buildTechnicalReportDoc(payload, 'CALCULANDO...');
    const draftHash = await sha256Hex(draftDoc.output('arraybuffer'));
    const finalDoc = buildTechnicalReportDoc(payload, draftHash);
    const safeName = normalizeText(payload.driver.name || 'condutor').replace(/[^a-z0-9]+/g, '_');
    finalDoc.save(`Relatorio_Tecnico_Reincidencia_${safeName || 'condutor'}.pdf`);
    showAlert(alertSuccess, 'Relatório técnico gerado com sucesso.');
  } catch (error) {
    showAlert(alertError, 'Falha ao gerar relatório técnico de reincidência.');
  } finally {
    if (technicalReportGenerateBtn) {
      technicalReportGenerateBtn.disabled = false;
      technicalReportGenerateBtn.textContent = 'GERAR RELATÓRIO DE REINCIDÊNCIA';
    }
  }
};

// ─── Relatório de Atividade ───────────────────────────────────────────────────
let activityAgents = [];
let activityPhotos = [];

const getInstitutionShortName = (institutionLabel) => {
  const normalizedInstitution = normalizeText(institutionLabel);
  if (normalizedInstitution.includes('chico mendes')) return 'ICMBIO';
  if (normalizedInstitution.includes('policia militar')) return 'PMPI';
  if (normalizedInstitution.includes('secretaria de meio ambiente')) return 'SEMARH';
  if (normalizedInstitution.includes('prefeitura municipal')) return 'PREFEITURA';
  return normalizeUpperText(institutionLabel || '--');
};

const populateActivityInstitutionOptions = () => {
  if (!activityAgentInstitutionSelect) return;
  const selected = activityAgentInstitutionSelect.value;
  const allInstitutions = Array.from(
    new Set([
      ...Object.values(institutions),
      ...allRecords.map((record) => (record.institution || '').trim()).filter(Boolean),
    ])
  ).sort((a, b) => a.localeCompare(b, 'pt-BR'));

  activityAgentInstitutionSelect.innerHTML = '';
  allInstitutions.forEach((institutionLabel) => {
    const option = document.createElement('option');
    option.value = institutionLabel;
    option.textContent = institutionLabel;
    activityAgentInstitutionSelect.appendChild(option);
  });

  if (selected && allInstitutions.includes(selected)) {
    activityAgentInstitutionSelect.value = selected;
  }
};

const populateActivityAgentDatalist = () => {
  if (!activityAgentDatalist) return;
  const selectedInstitution = activityAgentInstitutionSelect?.value || '';
  const selectedInstitutionKey =
    Object.keys(institutions).find((key) => institutions[key] === selectedInstitution) || '';
  activityAgentDatalist.innerHTML = '';
  const allAgents = Array.from(
    new Set([
      ...managedUsers
        .filter(
          (user) =>
            user.active !== false &&
            (!selectedInstitutionKey || user.institutionKey === selectedInstitutionKey)
        )
        .map((user) => user.name),
      ...allRecords
        .filter((record) => !selectedInstitution || (record.institution || '').trim() === selectedInstitution)
        .map((record) => (record.agent || '').trim())
        .filter(Boolean),
    ])
  )
    .map((name) => normalizeUpperText(name))
    .sort((a, b) => a.localeCompare(b, 'pt-BR'));
  allAgents.forEach((name) => {
    const opt = document.createElement('option');
    opt.value = name;
    activityAgentDatalist.appendChild(opt);
  });
};

const renderActivityAgentsList = () => {
  if (!activityAgentsListEl) return;
  activityAgentsListEl.innerHTML = '';
  if (activityAgents.length === 0) {
    activityAgentsListEl.innerHTML = '<span class="activity-no-agents">Nenhum agente adicionado.</span>';
    return;
  }
  activityAgents.forEach((agentEntry, idx) => {
    const tag = document.createElement('span');
    tag.className = 'activity-agent-tag';
    const institutionShort = getInstitutionShortName(agentEntry.institution);
    const agentName = normalizeUpperText(agentEntry.name);
    tag.innerHTML = `${institutionShort}: ${agentName} <button type="button" class="activity-agent-remove" aria-label="Remover ${agentName}" data-idx="${idx}">×</button>`;
    activityAgentsListEl.appendChild(tag);
  });
  activityAgentsListEl.querySelectorAll('.activity-agent-remove').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.idx);
      activityAgents.splice(idx, 1);
      renderActivityAgentsList();
    });
  });
};

const renderActivityPhotoList = () => {
  if (!activityPhotoList) return;
  activityPhotoList.innerHTML = '';

  if (!activityPhotos.length) {
    const emptyState = document.createElement('span');
    emptyState.className = 'activity-photo-empty';
    emptyState.textContent = 'Nenhuma foto adicionada.';
    activityPhotoList.appendChild(emptyState);
    return;
  }

  activityPhotos.forEach((photo, idx) => {
    const item = document.createElement('div');
    item.className = 'activity-photo-item';

    const thumb = document.createElement('img');
    thumb.className = 'activity-photo-thumb';
    thumb.src = photo.dataUrl;
    thumb.alt = `Foto da atividade ${idx + 1}`;

    const captionInput = document.createElement('input');
    captionInput.type = 'text';
    captionInput.className = 'activity-photo-caption';
    captionInput.placeholder = 'Legenda da imagem';
    captionInput.value = photo.caption || '';
    captionInput.maxLength = 180;
    captionInput.addEventListener('input', (event) => {
      activityPhotos[idx].caption = event.target.value;
    });

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'activity-photo-remove';
    removeBtn.textContent = 'Remover';
    removeBtn.addEventListener('click', () => {
      activityPhotos.splice(idx, 1);
      renderActivityPhotoList();
    });

    item.appendChild(thumb);
    item.appendChild(captionInput);
    item.appendChild(removeBtn);
    activityPhotoList.appendChild(item);
  });
};

const resetActivityPhotos = () => {
  activityPhotos = [];
  if (activityPhotoInput) {
    activityPhotoInput.value = '';
  }
  renderActivityPhotoList();
};

const readImageAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Falha ao ler imagem.'));
    reader.readAsDataURL(file);
  });

const addActivityPhotos = async (fileList) => {
  const imageFiles = Array.from(fileList || []).filter((file) => (file.type || '').startsWith('image/'));
  if (!imageFiles.length) return;

  const newPhotos = await Promise.all(
    imageFiles.map(async (file) => ({
      name: file.name,
      dataUrl: await readImageAsDataUrl(file),
      caption: '',
    }))
  );

  activityPhotos = activityPhotos.concat(newPhotos);
  renderActivityPhotoList();
};

const updateActivityRecordsSummary = () => {
  if (!activityRecordsSummary || !activityReportDateInput) return;
  const dateVal = activityReportDateInput.value;
  if (!dateVal) {
    activityRecordsSummary.innerHTML = '';
    return;
  }
  const dayRecords = allRecords.filter((r) => r.date === dateVal);
  activityRecordsSummary.innerHTML = `<p class="activity-summary-info">Ocorrências registradas em <strong>${formatDateBr(dateVal)}</strong>: <strong>${dayRecords.length}</strong></p>`;
};

const openActivityReportView = () => {
  activityAgents = [];
  resetActivityPhotos();
  if (activityFieldNotesInput) activityFieldNotesInput.value = '';
  const loggedAgent = normalizeUpperText(getLoggedAgentName());
  const loggedInstitution = getInstitutionLabel(getLoggedInstitutionKey()) || institutions.icmbio;
  populateActivityInstitutionOptions();
  if (activityAgentInstitutionSelect && loggedInstitution) {
    activityAgentInstitutionSelect.value = loggedInstitution;
  }
  if (loggedAgent) {
    activityAgents.push({ name: loggedAgent, institution: loggedInstitution });
  }
  if (activityReportDateInput) activityReportDateInput.value = formatDate(new Date());
  populateActivityAgentDatalist();
  renderActivityAgentsList();
  updateActivityRecordsSummary();
  showView('activityReportView');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const drawActivityPdfFooter = (doc, pageWidth) => {
  doc.setFontSize(7);
  doc.setTextColor(100, 100, 100);
  doc.text(
    'Documento gerado automaticamente pela aplicação Veículos na Praia Não - APA Delta do Parnaíba',
    pageWidth / 2,
    204,
    { align: 'center' }
  );
  doc.setTextColor(0, 0, 0);
};

const drawActivityPdfHeader = (doc, pageWidth, marginLeft, marginRight, title) => {
  let yPos = 10;

  try {
    const brasaoSize = 18;
    doc.addImage(
      '/Brasão da república quadrado.png',
      'PNG',
      (pageWidth - brasaoSize) / 2,
      yPos - 3,
      brasaoSize,
      brasaoSize
    );
  } catch (_) {}
  yPos += 22;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('MINISTÉRIO DO MEIO AMBIENTE E MUDANÇA DO CLIMA', pageWidth / 2, yPos, { align: 'center' });
  yPos += 5;
  doc.text('INSTITUTO CHICO MENDES DE CONSERVAÇÃO DA BIODIVERSIDADE', pageWidth / 2, yPos, { align: 'center' });
  yPos += 5;
  doc.text('ÁREA DE PROTEÇÃO AMBIENTAL DELTA DO PARNAÍBA', pageWidth / 2, yPos, { align: 'center' });
  yPos += 9;

  doc.setDrawColor(0, 69, 33);
  doc.setLineWidth(0.5);
  doc.line(marginLeft, yPos, pageWidth - marginRight, yPos);
  yPos += 7;

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(title, pageWidth / 2, yPos, { align: 'center' });
  yPos += 7;

  return yPos;
};

const appendActivityPhotoPages = (doc, dateVal, pageWidth, marginLeft, marginRight) => {
  if (!activityPhotos.length) return;

  activityPhotos.forEach((photo, index) => {
    if (!photo?.dataUrl) return;
    doc.addPage('a4', 'landscape');

    let yPos = drawActivityPdfHeader(doc, pageWidth, marginLeft, marginRight, 'RELATÓRIO FOTOGRÁFICO');

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(`Data da Atividade: ${formatDateBr(dateVal)}`, marginLeft, yPos);
    doc.text(`Imagem ${index + 1} de ${activityPhotos.length}`, pageWidth - marginRight, yPos, { align: 'right' });
    yPos += 6;

    const maxImageWidth = pageWidth - marginLeft - marginRight;
    const maxImageHeight = 120;
    let drawWidth = maxImageWidth;
    let drawHeight = maxImageHeight;

    try {
      const props = doc.getImageProperties(photo.dataUrl);
      if (props?.width && props?.height) {
        const ratio = Math.min(maxImageWidth / props.width, maxImageHeight / props.height);
        drawWidth = props.width * ratio;
        drawHeight = props.height * ratio;
      }
    } catch (_) {}

    const imageX = (pageWidth - drawWidth) / 2;
    const imageY = yPos;
    const format = photo.dataUrl.includes('image/png') ? 'PNG' : 'JPEG';
    doc.addImage(photo.dataUrl, format, imageX, imageY, drawWidth, drawHeight, undefined, 'MEDIUM');

    const legendY = imageY + drawHeight + 8;
    doc.setFont('helvetica', 'bold');
    doc.text('Legenda:', marginLeft, legendY);
    doc.setFont('helvetica', 'normal');
    const legendText = (photo.caption || '').trim() || 'Sem legenda informada.';
    const legendLines = doc.splitTextToSize(legendText, pageWidth - marginLeft - marginRight);
    doc.text(legendLines, marginLeft, legendY + 5);

    drawActivityPdfFooter(doc, pageWidth);
  });
};

const generateActivityReportPDF = () => {
  if (!activityReportDateInput) return;
  const dateVal = activityReportDateInput.value;
  if (!dateVal) {
    alert('Selecione a data da atividade.');
    return;
  }
  const dayRecords = allRecords
    .filter((r) => r.date === dateVal)
    .sort((a, b) => (a.time || '').localeCompare(b.time || ''));
  const fieldNotes = (activityFieldNotesInput?.value || '').trim();
  if (dayRecords.length === 0) {
    alert(`Nenhuma ocorrência registrada em ${formatDateBr(dateVal)}.`);
    return;
  }
  if (!jsPDF) {
    alert('Biblioteca jsPDF não carregada.');
    return;
  }

  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const pageWidth = 297;
  const marginLeft = 10;
  const marginRight = 10;
  let yPos = drawActivityPdfHeader(
    doc,
    pageWidth,
    marginLeft,
    marginRight,
    'RELATÓRIO DE ATIVIDADE — VEÍCULOS NA PRAIA NÃO'
  );

  // Data e total de ocorrências
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`Data da Atividade: ${formatDateBr(dateVal)}`, marginLeft, yPos);
  doc.text(`Total de ocorrências: ${dayRecords.length}`, pageWidth / 2, yPos, { align: 'center' });
  yPos += 6;

  // Agentes
  if (activityAgents.length > 0) {
    const agentsLabel = `Agente(s) responsável(is): ${activityAgents
      .map((entry) => `${getInstitutionShortName(entry.institution)}: ${normalizeUpperText(entry.name)}`)
      .join('  |  ')}`;
    const agentsLines = doc.splitTextToSize(agentsLabel, pageWidth - marginLeft - marginRight);
    doc.setFont('helvetica', 'bold');
    agentsLines.forEach((line) => {
      doc.text(line, marginLeft, yPos);
      yPos += 5;
    });
  }

  if (fieldNotes) {
    yPos += 2;
    doc.setFont('helvetica', 'bold');
    doc.text('Observações de Campo:', marginLeft, yPos);
    yPos += 5;
    doc.setFont('helvetica', 'normal');
    const noteLines = doc.splitTextToSize(fieldNotes, pageWidth - marginLeft - marginRight);
    doc.text(noteLines, marginLeft, yPos);
    yPos += noteLines.length * 4 + 2;
  }

  yPos += 4;

  // Linha separadora antes da tabela
  doc.setDrawColor(0, 69, 33);
  doc.setLineWidth(0.3);
  doc.line(marginLeft, yPos, pageWidth - marginRight, yPos);
  yPos += 4;

  // Tabela de ocorrências (estilo planilha)
  const tableColumns = [
    { header: 'Nº Ocorr.', dataKey: 'occurrenceNumber' },
    { header: 'Hora', dataKey: 'time' },
    { header: 'Condutor', dataKey: 'infractorName' },
    { header: 'CPF', dataKey: 'infractorDoc' },
    { header: 'WhatsApp', dataKey: 'whatsapp' },
    { header: 'Placa', dataKey: 'vehiclePlate' },
    { header: 'Modelo / Cor / Ano', dataKey: 'vehicle' },
    { header: 'Agente', dataKey: 'agent' },
    { header: 'Instituição', dataKey: 'institution' },
    { header: 'Local', dataKey: 'location' },
    { header: 'Observações', dataKey: 'observations' },
  ];

  const tableRows = dayRecords.map((r) => ({
    occurrenceNumber: r.occurrenceNumber || '--',
    time: r.time || '--',
    infractorName: r.infractorName || '--',
    infractorDoc: r.infractorDoc || '--',
    whatsapp: r.whatsapp || '--',
    vehiclePlate: r.vehiclePlate || '--',
    vehicle: [r.vehicleModel, r.vehicleColor, r.vehicleYear].filter(Boolean).join(' / ') || '--',
    agent: r.agent || '--',
    institution: (r.institution || '--').replace('Instituto Chico Mendes de Conservação da Biodiversidade', 'ICMBio').replace('Secretaria de Meio Ambiente e Recursos Hídridos do Estado do Piauí', 'SEMARH').replace('Polícia Militar do Estado do Piauí', 'PMPI').replace('Prefeitura Municipal de Luís Correia', 'Prefeitura'),
    location: r.location || '--',
    observations: r.observations || '',
  }));

  doc.autoTable({
    startY: yPos,
    columns: tableColumns,
    body: tableRows,
    margin: { left: marginLeft, right: marginRight },
    styles: { fontSize: 6.5, cellPadding: { top: 2, right: 2, bottom: 2, left: 2 }, overflow: 'linebreak', valign: 'top' },
    headStyles: { fillColor: [0, 69, 33], textColor: 255, fontStyle: 'bold', fontSize: 7 },
    alternateRowStyles: { fillColor: [240, 248, 228] },
    columnStyles: {
      0: { cellWidth: 18 },  // Nº Ocorrência
      1: { cellWidth: 10 },  // Hora
      2: { cellWidth: 32 },  // Condutor
      3: { cellWidth: 22 },  // CPF
      4: { cellWidth: 22 },  // WhatsApp
      5: { cellWidth: 16 },  // Placa
      6: { cellWidth: 28 },  // Modelo/Cor/Ano
      7: { cellWidth: 28 },  // Agente
      8: { cellWidth: 18 },  // Instituição
      9: { cellWidth: 42 },  // Local
      10: { cellWidth: 'auto' }, // Observações
    },
    didDrawPage: (data) => {
      drawActivityPdfFooter(doc, pageWidth);
    },
  });

  appendActivityPhotoPages(doc, dateVal, pageWidth, marginLeft, marginRight);

  const dateFormatted = dateVal.replace(/-/g, '');
  doc.save(`Relatorio_Atividade_${dateFormatted}.pdf`);
};
// ─────────────────────────────────────────────────────────────────────────────

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
  } else if (filterMonth.value && filterYear.value) {
    const monthIndex = Number(filterMonth.value) - 1;
    const monthLabel = months[monthIndex] || filterMonth.value;
    const yearLabel = filterYear.value;
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
  if (hasIncompleteMonthYearFilter()) {
    showAlert(alertError, 'Para filtrar por período mensal, selecione mês e ano juntos.');
    return;
  }

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
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageWidth = 297;
    const marginLeft = 10;
    const marginRight = 10;

    const orderedRecords = [...filteredRecords].sort((a, b) => {
      const aTime = getRecordTimestamp(a) || 0;
      const bTime = getRecordTimestamp(b) || 0;
      return aTime - bTime;
    });

    let yPos = drawActivityPdfHeader(
      doc,
      pageWidth,
      marginLeft,
      marginRight,
      'RELATÓRIO DE ATIVIDADE — VEÍCULOS NA PRAIA NÃO'
    );

    const filterParts = [];
    const dateFrom = (filterDateFrom?.value || '').trim();
    const dateTo = (filterDateTo?.value || '').trim();
    const institution = (filterInstitution?.value || '').trim();
    const agent = (filterAgent?.value || '').trim();
    const month = (filterMonth?.value || '').trim();
    const year = (filterYear?.value || '').trim();
    const searchText = (filterSearch?.value || '').trim();

    if (dateFrom || dateTo) {
      const start = dateFrom ? formatDateBr(dateFrom) : '...';
      const end = dateTo ? formatDateBr(dateTo) : '...';
      filterParts.push(`Período: ${start} a ${end}`);
    }
    if (institution) filterParts.push(`Instituição: ${institution}`);
    if (agent) filterParts.push(`Agente: ${agent}`);
    if (month) filterParts.push(`Mês: ${month}`);
    if (year) filterParts.push(`Ano: ${year}`);
    if (searchText) filterParts.push(`Busca: ${searchText}`);
    if (filterDuplicates?.checked) filterParts.push('Somente reincidentes');
    if (!filterParts.length) filterParts.push('Filtros: todos os registros');

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(`Total de ocorrências: ${orderedRecords.length}`, pageWidth / 2, yPos, { align: 'center' });
    yPos += 6;

    const filterText = filterParts.join('  |  ');
    const filterLines = doc.splitTextToSize(filterText, pageWidth - marginLeft - marginRight);
    filterLines.forEach((line) => {
      doc.text(line, marginLeft, yPos);
      yPos += 5;
    });
    yPos += 2;

    doc.setDrawColor(0, 69, 33);
    doc.setLineWidth(0.3);
    doc.line(marginLeft, yPos, pageWidth - marginRight, yPos);
    yPos += 4;

    const tableColumns = [
      { header: 'Nº Ocorr.', dataKey: 'occurrenceNumber' },
      { header: 'Hora', dataKey: 'time' },
      { header: 'Condutor', dataKey: 'infractorName' },
      { header: 'CPF', dataKey: 'infractorDoc' },
      { header: 'WhatsApp', dataKey: 'whatsapp' },
      { header: 'Placa', dataKey: 'vehiclePlate' },
      { header: 'Modelo / Cor / Ano', dataKey: 'vehicle' },
      { header: 'Agente', dataKey: 'agent' },
      { header: 'Instituição', dataKey: 'institution' },
      { header: 'Local', dataKey: 'location' },
      { header: 'Observações', dataKey: 'observations' },
    ];

    const tableRows = orderedRecords.map((r) => ({
      occurrenceNumber: r.occurrenceNumber || '--',
      time: r.time || '--',
      infractorName: r.infractorName || '--',
      infractorDoc: r.infractorDoc || '--',
      whatsapp: r.whatsapp || '--',
      vehiclePlate: r.vehiclePlate || '--',
      vehicle: [r.vehicleModel, r.vehicleColor, r.vehicleYear].filter(Boolean).join(' / ') || '--',
      agent: r.agent || '--',
      institution: (r.institution || '--')
        .replace('Instituto Chico Mendes de Conservação da Biodiversidade', 'ICMBio')
        .replace('Secretaria de Meio Ambiente e Recursos Hídridos do Estado do Piauí', 'SEMARH')
        .replace('Polícia Militar do Estado do Piauí', 'PMPI')
        .replace('Prefeitura Municipal de Luís Correia', 'Prefeitura'),
      location: r.location || '--',
      observations: r.observations || '',
    }));

    doc.autoTable({
      startY: yPos,
      columns: tableColumns,
      body: tableRows,
      margin: { left: marginLeft, right: marginRight },
      styles: {
        fontSize: 6.5,
        cellPadding: { top: 2, right: 2, bottom: 2, left: 2 },
        overflow: 'linebreak',
        valign: 'top',
      },
      headStyles: { fillColor: [0, 69, 33], textColor: 255, fontStyle: 'bold', fontSize: 7 },
      alternateRowStyles: { fillColor: [240, 248, 228] },
      columnStyles: {
        0: { cellWidth: 18 },
        1: { cellWidth: 10 },
        2: { cellWidth: 32 },
        3: { cellWidth: 22 },
        4: { cellWidth: 22 },
        5: { cellWidth: 16 },
        6: { cellWidth: 28 },
        7: { cellWidth: 28 },
        8: { cellWidth: 18 },
        9: { cellWidth: 42 },
        10: { cellWidth: 'auto' },
      },
      didDrawPage: () => {
        drawActivityPdfFooter(doc, pageWidth);
      },
    });

    doc.save('Relatorio_Atividade_Filtrado.pdf');
  } catch (error) {
    showAlert(alertError, 'Erro ao gerar relatório PDF.');
    console.error('Erro ao gerar PDF:', error);
  }
};

window.addEventListener('load', () => {
  (async () => {
    await updateFooterVersion();

    try {
      initFirebase();
      await ensureFirebaseAuth();
      await initManagedUsers();

      populateLoginAgents();
      updateLoginAgentMode();
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
      const loggedUser = getLoggedManagedUser();
      if (loggedAgent && loggedUser) {
        setLoggedUser(loggedUser.name, loggedUser.institutionKey || loggedInstitution, loggedUser);
        showView('dashboardView');
      } else {
        clearSession();
        showEntryScreen();
        updateExternalReportsAccess();
        updateAdminPanelAccess();
      }

      const params = new URLSearchParams(window.location.search);
      const recordId = params.get('recordId');
      if (recordId) {
        await showRecordDetail(recordId);
      }
    } catch (error) {
      managedUsers = loadUsersFromCache();
      allRecords = mergeRecords(
        loadRecordsFromStorage(storageKey),
        await loadRecordsFromIndexedDb(storageKey)
      );
      if (!allRecords.length) {
        allRecords = mergeRecords(
          loadRecordsFromStorage(backupStorageKey),
          await loadRecordsFromIndexedDb(backupStorageKey)
        );
      }
      updateRecordsList();
      populateFilterAgents();
      populateInstitutionFilter();
      populateMonthYearFilters();
      populateLoginAgents();
      updateLoginAgentMode();
      showEntryScreen();
      updateExternalReportsAccess();
      updateAdminPanelAccess();
    }
  })();
});

agentSelect.addEventListener('change', updateAgentName);
setTimeBtn.addEventListener('click', setCurrentTime);
locationBtn.addEventListener('click', getCurrentLocation);
if (vehicleNoPlateInput) {
  vehicleNoPlateInput.addEventListener('change', syncVehiclePlateState);
}
cpfInput.addEventListener('input', (event) => {
  event.target.value = formatCPF(event.target.value);
  updateCpfStatus(event.target.value);
});
whatsappInput.addEventListener('input', (event) => {
  event.target.value = formatWhatsApp(event.target.value);
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

if (cancelExternalDeleteBtn) {
  cancelExternalDeleteBtn.addEventListener('click', closeExternalDeleteModal);
}

if (confirmExternalDeleteBtn) {
  confirmExternalDeleteBtn.addEventListener('click', confirmExternalDeleteReport);
}

if (externalDeleteConfirmModal) {
  externalDeleteConfirmModal.addEventListener('click', (event) => {
    if (event.target === externalDeleteConfirmModal) {
      closeExternalDeleteModal();
    }
  });
}

if (externalDeleteConfirmPassword) {
  externalDeleteConfirmPassword.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      confirmExternalDeleteReport();
    }
  });
}

['infractorName', 'vehiclePlate', 'vehicleModel', 'vehicleColor'].forEach((id) => {
  const field = document.getElementById(id);
  field.addEventListener('input', () => {
    field.value = field.value.toUpperCase();
  });
});

const executeLogin = async (event) => {
  if (event) event.preventDefault();
  const logged = await handleLogin();
  if (logged) {
    showView('dashboardView');
  }
};

loginForm.addEventListener('submit', executeLogin);

// Adicionar também um listener direto no botão para mobile
if (loginBtn) {
  loginBtn.addEventListener('click', executeLogin);
}

// Permitir login ao pressionar Enter no campo de senha
loginPassword.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    executeLogin(event);
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

if (openPublicReportBtn) {
  openPublicReportBtn.addEventListener('click', () => {
    clearPublicReportForm();
    showPublicReportScreen();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (openLoginBtn) {
  openLoginBtn.addEventListener('click', () => {
    showLoginScreen();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (backFromLoginBtn) {
  backFromLoginBtn.addEventListener('click', () => {
    showEntryScreen();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (toggleTrackProtocolBtn) {
  toggleTrackProtocolBtn.addEventListener('click', toggleTrackProtocolPanel);
}

if (backFromPublicReportBtn) {
  backFromPublicReportBtn.addEventListener('click', () => {
    showEntryScreen();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (publicReportPhotosInput) {
  publicReportPhotosInput.addEventListener('change', handlePublicPhotoUpload);
}

if (publicGetLocationBtn) {
  publicGetLocationBtn.addEventListener('click', handlePublicLocation);
}

if (publicInfractorDocInput) {
  publicInfractorDocInput.addEventListener('input', (event) => {
    event.target.value = formatCPF(event.target.value);
  });
}

[publicVehiclePlateInput, publicVehicleModelInput, publicVehicleColorInput, publicInfractorNameInput].forEach(
  (field) => {
    if (!field) return;
    field.addEventListener('input', () => {
      field.value = field.value.toUpperCase();
    });
  }
);

if (publicReportForm) {
  publicReportForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await submitPublicReport();
  });
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
  applyFiltersBtn.addEventListener('click', () => {
    if (hasIncompleteMonthYearFilter()) {
      showAlert(alertError, 'Selecione mês e ano juntos para aplicar esse filtro.');
      return;
    }
    updateDashboard();
  });
}

if (toggleFiltersBtn && dashboardFiltersPanel) {
  toggleFiltersBtn.addEventListener('click', () => {
    const isHidden = dashboardFiltersPanel.classList.toggle('hidden');
    toggleFiltersBtn.textContent = isHidden ? 'Mostrar filtros' : 'Ocultar filtros';
    if (!isHidden) {
      updateDashboard();
    }
  });
}

if (toggleChartsBtn && dashboardChartsPanel) {
  toggleChartsBtn.addEventListener('click', () => {
    const isHidden = dashboardChartsPanel.classList.toggle('hidden');
    toggleChartsBtn.textContent = isHidden ? 'Mostrar gráficos' : 'Ocultar gráficos';
    if (!isHidden) {
      updateDashboard();
    }
  });
}

if (toggleExternalReportsBtn && externalReportsPanel) {
  toggleExternalReportsBtn.addEventListener('click', async () => {
    const isHidden = externalReportsPanel.classList.toggle('hidden');
    if (!isHidden) {
      await refreshExternalReports();
      markPublicReportsAsSeen(publicReports);
      updateExternalReportsToggleLabel();
      externalReportsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    updateExternalReportsToggleLabel();
  });
}

if (trackProtocolBtn) {
  trackProtocolBtn.addEventListener('click', handleTrackProtocol);
}

if (trackProtocolInput) {
  trackProtocolInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleTrackProtocol();
    }
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

if (technicalReportCloseBtn) {
  technicalReportCloseBtn.addEventListener('click', closeTechnicalReportModal);
}

if (technicalReportModal) {
  technicalReportModal.addEventListener('click', (event) => {
    if (event.target === technicalReportModal) {
      closeTechnicalReportModal();
    }
  });
}

if (techExtraPhotosInput) {
  techExtraPhotosInput.addEventListener('change', async (event) => {
    try {
      await addTechnicalExtraPhotos(event.target.files);
      techExtraPhotosInput.value = '';
    } catch (_) {
      showAlert(alertError, 'Não foi possível carregar uma ou mais fotos complementares.');
    }
  });
}

if (technicalReportGenerateBtn) {
  technicalReportGenerateBtn.addEventListener('click', generateTechnicalReport);
}

if (loginInstitution) {
  loginInstitution.addEventListener('change', updateLoginAgentMode);
}

if (toggleAdminPanelBtn && adminPanel) {
  toggleAdminPanelBtn.addEventListener('click', () => {
    const isHidden = adminPanel.classList.toggle('hidden');
    toggleAdminPanelBtn.textContent = isHidden ? 'Administração' : 'Ocultar administração';
    if (!isHidden) {
      renderAdminUsers();
      adminPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

if (adminInstitutionFilter) {
  adminInstitutionFilter.addEventListener('change', renderAdminUsers);
}

if (adminCancelEditBtn) {
  adminCancelEditBtn.addEventListener('click', resetAdminUserForm);
}

if (adminUserName) {
  adminUserName.addEventListener('input', (event) => {
    event.target.value = event.target.value.toUpperCase();
  });
}

if (adminUserForm) {
  adminUserForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await handleAdminUserSubmit();
  });
}

// ─── Event listeners – Relatório de Atividade ────────────────────────────────
if (openActivityReportBtn) {
  openActivityReportBtn.addEventListener('click', openActivityReportView);
}

if (backToDashboardFromActivity) {
  backToDashboardFromActivity.addEventListener('click', () => showView('dashboardView'));
}

if (addActivityAgentBtn) {
  addActivityAgentBtn.addEventListener('click', () => {
    const agentName = normalizeUpperText(activityAgentInput.value || '');
    const institutionLabel = (activityAgentInstitutionSelect?.value || '').trim();
    if (!agentName || !institutionLabel) return;
    const alreadyAdded = activityAgents.some(
      (entry) => normalizeUpperText(entry.name) === agentName && (entry.institution || '').trim() === institutionLabel
    );
    if (alreadyAdded) {
      activityAgentInput.value = '';
      return;
    }
    activityAgents.push({ name: agentName, institution: institutionLabel });
    activityAgentInput.value = '';
    renderActivityAgentsList();
  });
}

if (activityAgentInput) {
  activityAgentInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addActivityAgentBtn && addActivityAgentBtn.click();
    }
  });
  activityAgentInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.toUpperCase();
  });
}

if (activityReportDateInput) {
  activityReportDateInput.addEventListener('change', updateActivityRecordsSummary);
}

if (activityAgentInstitutionSelect) {
  activityAgentInstitutionSelect.addEventListener('change', populateActivityAgentDatalist);
}

if (activityPhotoInput) {
  activityPhotoInput.addEventListener('change', async (event) => {
    try {
      await addActivityPhotos(event.target.files);
      activityPhotoInput.value = '';
    } catch (_) {
      alert('Não foi possível carregar uma ou mais fotos selecionadas.');
    }
  });
}

if (generateActivityReportBtn) {
  generateActivityReportBtn.addEventListener('click', generateActivityReportPDF);
}
// ─────────────────────────────────────────────────────────────────────────────
