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
const whatsappBtn = document.getElementById('sendWhatsAppBtn');
const addRecordBtn = document.getElementById('addRecordBtn');
const generatePdfBtn = document.getElementById('generatePdfBtn');
const recordsList = document.getElementById('records-list');
const alertSuccess = document.getElementById('alertSuccess');
const alertError = document.getElementById('alertError');
const uploadPhotoBtn = document.getElementById('uploadPhoto');
const photosInput = document.getElementById('photosInput');
const photoPreviewContainer = document.getElementById('photoPreviewContainer');
const cameraContainer = document.querySelector('.camera-container');
const cameraPreview = document.getElementById('cameraPreview');
const capturePhotoBtn = document.getElementById('capturePhoto');
const cancelCameraBtn = document.getElementById('cancelCamera');
const switchCameraBtn = document.getElementById('switchCamera');
const cameraOverlayBox = document.getElementById('cameraOverlayBox');
const cameraOverlayCoords = document.getElementById('cameraOverlayCoords');
const cameraOverlayLogo = document.getElementById('cameraOverlayLogo');
const loginScreen = document.getElementById('loginScreen');
const appShell = document.getElementById('appShell');
const loginForm = document.getElementById('loginForm');
const loginAgent = document.getElementById('loginAgent');
const loginPassword = document.getElementById('loginPassword');
const loginError = document.getElementById('loginError');
const currentAgent = document.getElementById('currentAgent');
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

let allRecords = [];
let currentlyEditingIndex = -1;
let stream = null;
let photosData = [];
let currentFacingMode = 'environment';
let hasMultipleCameras = false;
const usedOccurrenceNumbers = new Set();

const icmbioLogo = new Image();
icmbioLogo.src = '/icmbio%20horizontal@1000x-8.png';

const scriptUrl = '';
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

const normalizeText = (text) =>
  (text || '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();

const getAgentPassword = (agentName) => {
  const firstName = normalizeText(agentName.split(' ')[0] || '');
  return `${firstName}2026`;
};

const getDriverKey = (record) => {
  const cpf = (record.infractorDoc || '').replace(/\D/g, '');
  if (cpf) return `cpf:${cpf}`;
  return `name:${normalizeText(record.infractorName)}`;
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

const withTimeout = (promise, ms, message) =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(message || 'Tempo esgotado'));
    }, ms);
    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });

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
  updateCameraOverlayCoords();
};

const setSavingState = (isSaving) => {
  if (!savingOverlay) return;
  savingOverlay.classList.toggle('hidden', !isSaving);
};

const populateAgentSelects = () => {
  if (!loginAgent || !filterAgent) return;
  loginAgent.innerHTML = '<option value="">Selecione um agente</option>';
  filterAgent.innerHTML = '<option value="">Todos</option>';
  Array.from(agentSelect.options)
    .filter((option) => option.value)
    .forEach((option) => {
      const loginOption = document.createElement('option');
      loginOption.value = option.value;
      loginOption.textContent = option.textContent;
      loginAgent.appendChild(loginOption);

      const filterOption = document.createElement('option');
      filterOption.value = option.value;
      filterOption.textContent = option.textContent;
      filterAgent.appendChild(filterOption);
    });
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

const setLoggedAgent = (agentName) => {
  localStorage.setItem(sessionKey, agentName);
  loginScreen.classList.add('hidden');
  appShell.classList.remove('hidden');
  currentAgent.textContent = `Agente: ${agentName}`;
  agentSelect.value = agentName;
  agentSelect.disabled = true;
  updateAgentName();
};

const clearSession = () => {
  localStorage.removeItem(sessionKey);
  loginScreen.classList.remove('hidden');
  appShell.classList.add('hidden');
  loginPassword.value = '';
  loginAgent.value = '';
  agentSelect.value = '';
  agentSelect.disabled = false;
  updateAgentName();
};

const showView = (viewId) => {
  views.forEach((view) => {
    view.classList.toggle('hidden', view.id !== viewId);
  });
  if (viewId === 'dashboardView') {
    updateDashboard();
  }
};

const handleLogin = () => {
  const selectedAgent = loginAgent.value;
  const password = loginPassword.value.trim();
  loginError.style.display = 'none';
  if (!selectedAgent || !password) {
    showAlert(loginError, 'Selecione o agente e digite a senha.');
    return false;
  }
  const expectedPassword = getAgentPassword(selectedAgent);
  if (password !== expectedPassword) {
    showAlert(loginError, 'Senha incorreta. Use o padrão primeiro nome + 2026.');
    return false;
  }
  setLoggedAgent(selectedAgent);
  return true;
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
  payload.photosCount = recordData.photos?.length || 0;
  payload.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
  if (isNew) {
    payload.timestamp = firebase.firestore.FieldValue.serverTimestamp();
  }
  return payload;
};

const uploadRecordAssets = async (recordData, recordId) => {
  if (!storage) return { pdfUrl: '', photoUrls: [] };
  const photoUrls = [];

  if (recordData.photos && recordData.photos.length) {
    for (const photo of recordData.photos) {
      try {
        const photoPath = `records/${recordId}/photos/${photo.id || Date.now()}.jpg`;
        const photoRef = storage.ref().child(photoPath);
        await withTimeout(
          photoRef.putString(photo.data, 'data_url'),
          20000,
          'Tempo esgotado ao enviar foto.'
        );
        const url = await withTimeout(
          photoRef.getDownloadURL(),
          15000,
          'Tempo esgotado ao obter URL da foto.'
        );
        photoUrls.push(url);
      } catch (error) {
        // Ignora falhas individuais de upload de foto
      }
    }
  }

  let pdfUrl = '';
  try {
    const pdfBlob = await generatePDFBlob(recordData);
    const pdfRef = storage.ref().child(`records/${recordId}/registro.pdf`);
    await withTimeout(
      pdfRef.put(pdfBlob, { contentType: 'application/pdf' }),
      20000,
      'Tempo esgotado ao enviar PDF.'
    );
    pdfUrl = await withTimeout(
      pdfRef.getDownloadURL(),
      15000,
      'Tempo esgotado ao obter URL do PDF.'
    );
  } catch (error) {
    pdfUrl = '';
  }

  return { pdfUrl, photoUrls };
};

const setCurrentTime = () => {
  timeInput.value = formatTime(new Date());
  updateCameraOverlayCoords();
};

const showAlert = (element, message) => {
  element.textContent = message;
  element.style.display = 'block';
  setTimeout(() => {
    element.style.display = 'none';
  }, 5000);
};

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
  updateCameraOverlayCoords();
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

const formatDateForOverlay = (value) => {
  if (!value) return '';
  const [year, month, day] = value.split('-');
  if (!year || !month || !day) return value;
  return `${day}/${month}/${year}`;
};

const buildCameraOverlayText = () => {
  const coords = locationInput.value.trim() || 'Sem coordenadas';
  const dateValue = formatDateForOverlay(dateInput.value);
  const timeValue = timeInput.value || '';
  const dateTime = dateValue && timeValue ? `${dateValue} ${timeValue}` : dateValue || timeValue || '--';
  const sessionAgent = localStorage.getItem(sessionKey) || '';
  const displayAgent = agentDisplay.textContent.replace('Agente: ', '').trim();
  const agentName = agentSelect.value || sessionAgent || displayAgent || '--';
  const occurrenceNumber = occurrenceNumberInput.value || '--';
  return `Ocorrência: ${occurrenceNumber}\n${coords}\n${dateTime}\n${agentName}`;
};

const updateCameraOverlayCoords = () => {
  if (!cameraOverlayCoords) return;
  cameraOverlayCoords.textContent = buildCameraOverlayText();
};

const ensureLogoLoaded = () =>
  new Promise((resolve) => {
    if (icmbioLogo.complete && icmbioLogo.naturalWidth > 0) {
      resolve(true);
      return;
    }
    icmbioLogo.onload = () => resolve(true);
    icmbioLogo.onerror = () => resolve(false);
  });

const updateCameraFlipAvailability = async () => {
  if (!switchCameraBtn || !navigator.mediaDevices?.enumerateDevices) return;
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoInputs = devices.filter((device) => device.kind === 'videoinput');
    hasMultipleCameras = videoInputs.length > 1;
    switchCameraBtn.classList.toggle('hidden', !hasMultipleCameras);
  } catch (error) {
    switchCameraBtn.classList.add('hidden');
  }
};

const toggleCameraFacingMode = async () => {
  if (!hasMultipleCameras) return;
  currentFacingMode = currentFacingMode === 'environment' ? 'user' : 'environment';
  stopCamera();
  await startCamera();
};

const setupCameraOverlayDrag = () => {
  if (!cameraOverlayBox || !cameraPreview) return;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let originLeft = 0;
  let originTop = 0;

  const onPointerDown = (event) => {
    if (event.button && event.button !== 0) return;
    isDragging = true;
    cameraOverlayBox.setPointerCapture(event.pointerId);
    const boxRect = cameraOverlayBox.getBoundingClientRect();
    const videoRect = cameraPreview.getBoundingClientRect();
    originLeft = boxRect.left - videoRect.left;
    originTop = boxRect.top - videoRect.top;
    startX = event.clientX;
    startY = event.clientY;
    event.preventDefault();
  };

  const onPointerMove = (event) => {
    if (!isDragging) return;
    const videoRect = cameraPreview.getBoundingClientRect();
    const boxRect = cameraOverlayBox.getBoundingClientRect();
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    const maxLeft = Math.max(0, videoRect.width - boxRect.width);
    const maxTop = Math.max(0, videoRect.height - boxRect.height);
    const nextLeft = Math.min(Math.max(originLeft + dx, 0), maxLeft);
    const nextTop = Math.min(Math.max(originTop + dy, 0), maxTop);
    cameraOverlayBox.style.left = `${nextLeft}px`;
    cameraOverlayBox.style.top = `${nextTop}px`;
  };

  const onPointerUp = () => {
    isDragging = false;
  };

  cameraOverlayBox.addEventListener('pointerdown', onPointerDown);
  cameraOverlayBox.addEventListener('pointermove', onPointerMove);
  cameraOverlayBox.addEventListener('pointerup', onPointerUp);
  cameraOverlayBox.addEventListener('pointercancel', onPointerUp);
};

const startCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: currentFacingMode },
      },
    });
    cameraPreview.srcObject = stream;
    cameraContainer.style.display = 'block';
    await updateCameraFlipAvailability();
    updateCameraOverlayCoords();
  } catch (error) {
    showAlert(alertError, 'Não foi possível acessar a câmera.');
  }
};

const stopCamera = () => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }
  cameraContainer.style.display = 'none';
};

const addPhotoPreview = (dataUrl, fileName) => {
  const photoId = `photo-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const wrapper = document.createElement('div');
  wrapper.className = 'photo-preview';
  wrapper.dataset.id = photoId;

  const img = document.createElement('img');
  img.src = dataUrl;
  img.alt = fileName || 'Foto do veículo';

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
    data: dataUrl,
    name: fileName || 'foto_veiculo.jpg',
  });
};

const handlePhotoUpload = (event) => {
  const files = event.target.files;
  if (!files || files.length === 0) return;
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => addPhotoPreview(e.target.result, file.name);
    reader.readAsDataURL(file);
  });
  event.target.value = '';
};

const capturePhoto = async () => {
  if (!stream) return;
  const canvas = document.createElement('canvas');
  canvas.width = cameraPreview.videoWidth;
  canvas.height = cameraPreview.videoHeight;
  const context = canvas.getContext('2d');
  context.drawImage(cameraPreview, 0, 0, canvas.width, canvas.height);

  const overlayText = buildCameraOverlayText();
  const lines = overlayText.split('\n').map((line) => line.trim());
  const fontSize = Math.max(18, Math.round(canvas.width * 0.03));
  const lineHeight = Math.round(fontSize * 1.25);
  context.font = `${fontSize}px Inter, Arial, sans-serif`;
  const textWidth = Math.max(...lines.map((line) => context.measureText(line).width));
  const textHeight = lineHeight * lines.length;

  const videoRect = cameraPreview.getBoundingClientRect();
  const boxRect = cameraOverlayBox
    ? cameraOverlayBox.getBoundingClientRect()
    : { left: videoRect.left + 10, top: videoRect.top + 10 };
  const scaleX = canvas.width / Math.max(1, videoRect.width);
  const scaleY = canvas.height / Math.max(1, videoRect.height);
  const boxX = Math.max(0, (boxRect.left - videoRect.left) * scaleX);
  const boxY = Math.max(0, (boxRect.top - videoRect.top) * scaleY);
  const paddingX = Math.max(10, Math.round(canvas.width * 0.015));
  const paddingY = Math.max(8, Math.round(canvas.height * 0.015));

  context.fillStyle = 'rgba(0, 0, 0, 0.55)';
  context.fillRect(boxX, boxY, textWidth + paddingX * 2, textHeight + paddingY * 2);
  context.fillStyle = '#ffffff';
  context.textBaseline = 'top';
  lines.forEach((line, index) => {
    const y = boxY + paddingY + lineHeight * index;
    context.fillText(line, boxX + paddingX, y);
  });

  const logoLoaded = await ensureLogoLoaded();
  if (logoLoaded && icmbioLogo.naturalWidth > 0) {
    const logoWidth = Math.round(canvas.width * 0.22);
    const logoHeight = Math.round((logoWidth / icmbioLogo.naturalWidth) * icmbioLogo.naturalHeight);
    const logoMargin = Math.max(10, Math.round(canvas.width * 0.02));
    const logoX = canvas.width - logoWidth - logoMargin;
    const logoY = logoMargin;
    context.fillStyle = 'rgba(255, 255, 255, 0.85)';
    context.fillRect(logoX - 6, logoY - 6, logoWidth + 12, logoHeight + 12);
    context.drawImage(icmbioLogo, logoX, logoY, logoWidth, logoHeight);
  }

  addPhotoPreview(canvas.toDataURL('image/jpeg'), 'camera.jpg');
};

const sendWhatsAppMessage = () => {
  const whatsappNumber = whatsappInput.value.replace(/\D/g, '');
  if (!whatsappNumber) return;
  const message =
    'COMUNICADO \nPrezado visitante, bem-vindo às praias de Luís Correia - PI. Você está dentro de uma das mais belas e importantes unidades de conservação federais brasileiras, a Área de Proteção Ambiental Delta do Parnaíba - APA Delta. Nesta praia, existem ninhos e filhotes de tartarugas marinhas de espécies ameaçadas de extinção, que vivem neste ambiente frágil, de vegetação de restinga e retenção de sedimentos que mantém as feições costeiras. Considerando a importância da biodiversidade nesta área, e da livre de circulação de pessoas, o Plano de Manejo da APA Delta do Parnaíba determinou, em seu artigo 12, a proibição da entrada, da permanência e da circulação de veículos automotores nas praias litorâneas. A desobediência deste dispositivo poderá implicar na aplicação do art. 90 do Decreto 6.514/2008, sujeitando o infrator à multa e apreensão do veículo. Neste sentido, contamos com sua colaboração para a preservação do meio ambiente e pela manutenção deste cenário de grande beleza cênica para as presentes e futuras gerações.';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/55${whatsappNumber}?text=${encodedMessage}`, '_blank');
};

const sendToGoogleSheets = (recordData) => {
  if (!scriptUrl) {
    showAlert(alertSuccess, 'Registro salvo localmente. Configure o envio para a planilha, se necessário.');
    return;
  }

  const sendBtn = addRecordBtn;
  const originalText = sendBtn.textContent;
  sendBtn.disabled = true;
  sendBtn.innerHTML = '<span class="loading"></span> Enviando...';

  const payload = {
    occurrenceNumber: recordData.occurrenceNumber,
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
  };

  fetch(scriptUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(() => {
      showAlert(alertSuccess, 'Registro salvo na planilha online com sucesso!');
      sendBtn.textContent = originalText;
      sendBtn.disabled = false;
    })
    .catch(() => {
      showAlert(alertError, 'Erro ao enviar para a planilha. Dados salvos localmente.');
      sendBtn.textContent = originalText;
      sendBtn.disabled = false;
    });
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
    summary.innerHTML = `<strong>${record.infractorName}</strong> ${duplicateBadge}<br />Nº ${record.occurrenceNumber} • ${record.vehiclePlate}`;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'record-actions';

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

    const pdfBtn = document.createElement('button');
    pdfBtn.className = 'edit-record';
    pdfBtn.textContent = 'PDF';
    pdfBtn.type = 'button';
    pdfBtn.addEventListener('click', () => generateSinglePDF(index));

    const shareBtn = document.createElement('button');
    shareBtn.className = 'share-record';
    shareBtn.textContent = 'Compartilhar';
    shareBtn.type = 'button';
    shareBtn.addEventListener('click', () => sharePDF(index));

    const linkBtn = document.createElement('button');
    linkBtn.className = 'edit-record';
    linkBtn.textContent = 'Link';
    linkBtn.type = 'button';
    linkBtn.addEventListener('click', () => copyRecordLink(record.id));

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(removeBtn);
    actionsDiv.appendChild(pdfBtn);
    actionsDiv.appendChild(shareBtn);
    actionsDiv.appendChild(linkBtn);

    recordItem.appendChild(summary);
    recordItem.appendChild(actionsDiv);
    recordsList.appendChild(recordItem);
  });

  updateDashboard();
};

const buildDuplicateMap = (records) => {
  const map = {};
  records.forEach((record) => {
    const key = getDriverKey(record);
    map[key] = (map[key] || 0) + 1;
  });
  return map;
};

const applyFilters = (records) => {
  let filtered = [...records];
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

  const list = Object.values(byDriver).sort((a, b) => b.occurrences - a.occurrences);
  list.forEach((driver) => {
    const card = document.createElement('div');
    card.className = 'driver-card';
    const plates = driver.plates.size ? Array.from(driver.plates).join(', ') : '--';
    const doc = driver.doc ? driver.doc : '--';
    const whatsapp = driver.whatsapp ? driver.whatsapp : '--';
    const lastDate = driver.lastDate ? driver.lastDate : '--';
    const badge = driver.occurrences > 1 ? ' <span class="badge">Reincidente</span>' : '';
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
    filtered.map((record) => normalizeText(record.vehiclePlate)).filter(Boolean)
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
  dateInput.value = formatDate(new Date());
  setCurrentTime();
  occurrenceNumberInput.value = generateUniqueOccurrenceNumber();
  updateAgentName();
};

const clearForm = () => {
  document.getElementById('fiscalizationForm').reset();
  photoPreviewContainer.innerHTML = '';
  photosData = [];
  locationError.textContent = '';
  updateAgentName();
};

const validateRequiredFields = () => {
  const requiredFields = [
    { id: 'occurrenceNumber', name: 'Número da Ocorrência' },
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
  if (plate.length !== 7) {
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

  const formData = new FormData(document.getElementById('fiscalizationForm'));
  const recordData = {};
  formData.forEach((value, key) => {
    recordData[key] = value;
  });
  recordData.photos = [...photosData];
  if (!recordData.agent) {
    const loggedAgent = localStorage.getItem(sessionKey);
    recordData.agent = agentSelect.value || loggedAgent || '';
  }

  try {
    if (currentlyEditingIndex >= 0) {
      const existing = allRecords[currentlyEditingIndex];
      const recordId = existing?.id;
      if (db && recordId) {
        const payload = buildRecordPayload(recordData, false);
        await withTimeout(
          db.collection('records').doc(recordId).set(payload, { merge: true }),
          15000,
          'Tempo esgotado ao salvar o registro.'
        );
        const assets = await uploadRecordAssets(recordData, recordId);
        await withTimeout(
          db.collection('records').doc(recordId).set(assets, { merge: true }),
          15000,
          'Tempo esgotado ao salvar mídias.'
        );
        if (!assets.pdfUrl || (recordData.photos?.length && !assets.photoUrls.length)) {
          showAlert(alertError, 'Não foi possível salvar algumas mídias no Firebase Storage.');
        }
        recordData.pdfUrl = assets.pdfUrl;
        recordData.photoUrls = assets.photoUrls;
        recordData.id = recordId;
      } else if (recordId) {
        recordData.id = recordId;
      }
      allRecords[currentlyEditingIndex] = recordData;
      currentlyEditingIndex = -1;
      addRecordBtn.textContent = 'Adicionar Registro';
    } else {
      if (db) {
        const payload = buildRecordPayload(recordData, true);
        const docRef = await withTimeout(
          db.collection('records').add(payload),
          15000,
          'Tempo esgotado ao criar o registro.'
        );
        const assets = await uploadRecordAssets(recordData, docRef.id);
        await withTimeout(
          db.collection('records').doc(docRef.id).set(assets, { merge: true }),
          15000,
          'Tempo esgotado ao salvar mídias.'
        );
        if (!assets.pdfUrl || (recordData.photos?.length && !assets.photoUrls.length)) {
          showAlert(alertError, 'Não foi possível salvar algumas mídias no Firebase Storage.');
        }
        recordData.pdfUrl = assets.pdfUrl;
        recordData.photoUrls = assets.photoUrls;
        recordData.id = docRef.id;
      }
      allRecords.push(recordData);
    }
  } catch (error) {
    showAlert(
      alertError,
      'Não foi possível salvar no Firebase. Verifique as permissões do Firestore.'
    );
    if (currentlyEditingIndex >= 0) {
      allRecords[currentlyEditingIndex] = recordData;
      currentlyEditingIndex = -1;
      addRecordBtn.textContent = 'Adicionar Registro';
    } else {
      allRecords.push(recordData);
    }
  } finally {
    setSavingState(false);
  }

  sendToGoogleSheets(recordData);
  updateRecordsList();
  persistLocalIfNeeded();
  populateMonthYearFilters();
  clearFormAfterRecord();
};

const editRecord = (index) => {
  const record = allRecords[index];
  clearForm();

  document.getElementById('occurrenceNumber').value = record.occurrenceNumber || '';
  document.getElementById('agent').value = record.agent || '';
  document.getElementById('date').value = record.date || '';
  document.getElementById('time').value = record.time || '';
  document.getElementById('infractorName').value = record.infractorName || '';
  document.getElementById('infractorDoc').value = record.infractorDoc || '';
  document.getElementById('whatsapp').value = record.whatsapp || '';
  document.getElementById('vehiclePlate').value = record.vehiclePlate || '';
  document.getElementById('vehicleModel').value = record.vehicleModel || '';
  document.getElementById('vehicleColor').value = record.vehicleColor || '';
  document.getElementById('vehicleYear').value = record.vehicleYear || '';
  document.getElementById('location').value = record.location || '';
  document.getElementById('observations').value = record.observations || '';
  whatsappBtn.disabled = !document.getElementById('whatsapp').value.trim();

  photoPreviewContainer.innerHTML = '';
  photosData = [];
  if (record.photos && record.photos.length) {
    record.photos.forEach((photo) => addPhotoPreview(photo.data, photo.name));
  }

  currentlyEditingIndex = index;
  addRecordBtn.textContent = 'Salvar Alterações';
  updateAgentName();
};

const removeRecord = async (index) => {
  const record = allRecords[index];
  try {
    if (db && record?.id) {
      await db.collection('records').doc(record.id).delete();
    }
  } catch (error) {
    showAlert(alertError, 'Não foi possível remover no Firebase.');
  }
  allRecords.splice(index, 1);
  updateRecordsList();
  persistLocalIfNeeded();
  populateMonthYearFilters();
};

const addJustifiedText = (doc, text, yPos, marginLeft, contentWidth) => {
  const lines = doc.splitTextToSize(text, contentWidth);
  lines.forEach((line) => {
    doc.text(line, marginLeft, yPos, { align: 'justify' });
    yPos += 5;
  });
  return yPos;
};

const renderRecordToDoc = (doc, record) => {
  const marginLeft = 15;
  const marginRight = 15;
  const pageWidth = 210;
  const contentWidth = pageWidth - marginLeft - marginRight;
  let yPos = 15;

  doc.setFontSize(10);
  doc.setTextColor(0, 69, 33);
  doc.setFont('helvetica', 'bold');
  doc.text('MINISTÉRIO DO MEIO AMBIENTE E MUDANÇA DO CLIMA', 105, yPos + 5, { align: 'center' });
  yPos += 5;
  doc.text('INSTITUTO CHICO MENDES DE CONSERVAÇÃO DA BIODIVERSIDADE', 105, yPos + 5, { align: 'center' });
  yPos += 5;
  doc.text('ÁREA DE PROTEÇÃO AMBIENTAL DELTA DO PARNAÍBA', 105, yPos + 5, { align: 'center' });
  yPos += 10;

  doc.setFontSize(12);
  doc.text('COMUNICADO', 105, yPos + 5, { align: 'center' });
  yPos += 10;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const comunicadoText =
    'Prezado visitante, bem-vindo às praias de Luís Correia - PI. Você está dentro de uma das mais belas e importantes unidades de conservação federais brasileiras, a Área de Proteção Ambiental Delta do Parnaíba - APA Delta. Nesta praia, existem ninhos e filhotes de tartarugas marinhas de espécies ameaçadas de extinção, que vivem neste ambiente frágil, de vegetação de restinga e retenção de sedimentos que mantém as feições costeiras. Considerando a importância da biodiversidade nesta área, e da livre de circulação de pessoas, o Plano de Manejo da APA Delta do Parnaíba determinou, em seu artigo 12, a proibição da entrada, da permanência e da circulação de veículos automotores nas praias litorâneas. A desobediência deste dispositivo poderá implicar na aplicação do art. 90 do Decreto 6.514/2008, sujeitando o infrator à multa e apreensão do veículo. Neste sentido, contamos com sua colaboração para a preservação do meio ambiente e pela manutenção deste cenário de grande beleza cênica para as presentes e futuras gerações.';

  yPos = addJustifiedText(doc, comunicadoText, yPos, marginLeft, contentWidth);
  yPos += 10;

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
  doc.text(`Placa: ${record.vehiclePlate}`, marginLeft, yPos);
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

  if (record.photos && record.photos.length > 0) {
    if (yPos > 200) {
      doc.addPage();
      yPos = 20;
    }

    yPos += 10;
    doc.setFont('helvetica', 'bold');
    doc.text('REGISTRO FOTOGRÁFICO', marginLeft, yPos);
    yPos += 8;

    const photosPerPage = 2;
    let photosAdded = 0;

    for (let i = 0; i < record.photos.length; i++) {
      const photo = record.photos[i];
      if (photosAdded >= photosPerPage) {
        doc.addPage();
        yPos = 20;
        photosAdded = 0;
      }

      const imgWidth = 80;
      const imgHeight = 60;
      doc.addImage(photo.data, 'JPEG', (pageWidth - imgWidth) / 2, yPos, imgWidth, imgHeight);
      yPos += imgHeight + 10;
      photosAdded++;
    }
  }

  doc.setFontSize(8);
  doc.setTextColor(100);
  doc.text(
    'Documento gerado automaticamente pelo Sistema de Fiscalização da APA Delta do Parnaíba',
    105,
    287,
    { align: 'center' }
  );
};

const generatePDFBlob = async (record) => {
  if (!jsPDF) throw new Error('jsPDF não disponível');
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  renderRecordToDoc(doc, record);
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

const generatePDF = async () => {
  if (!allRecords.length) {
    showAlert(alertError, 'Nenhum registro para gerar PDF.');
    return;
  }
  if (!jsPDF) {
    showAlert(alertError, 'Biblioteca jsPDF não carregada.');
    return;
  }
  try {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    allRecords.forEach((record, index) => {
      if (index > 0) {
        doc.addPage();
      }
      renderRecordToDoc(doc, record);
    });
    doc.save('Relatorio_Comunicados.pdf');
  } catch (error) {
    showAlert(alertError, 'Erro ao gerar relatório PDF.');
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
    allRecords.forEach((record) => {
      if (record.occurrenceNumber) usedOccurrenceNumbers.add(record.occurrenceNumber);
    });
    dateInput.value = formatDate(new Date());
    setCurrentTime();
    occurrenceNumberInput.value = generateUniqueOccurrenceNumber();
    updateAgentName();
    updateCameraOverlayCoords();
    setupCameraOverlayDrag();
    updateRecordsList();
    populateAgentSelects();
    populateMonthYearFilters();

    const loggedAgent = localStorage.getItem(sessionKey);
    if (loggedAgent) {
      setLoggedAgent(loggedAgent);
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

agentSelect.addEventListener('change', updateAgentName);
setTimeBtn.addEventListener('click', setCurrentTime);
locationBtn.addEventListener('click', getCurrentLocation);
locationInput.addEventListener('input', updateCameraOverlayCoords);
dateInput.addEventListener('change', updateCameraOverlayCoords);
timeInput.addEventListener('change', updateCameraOverlayCoords);
if (switchCameraBtn) {
  switchCameraBtn.addEventListener('click', toggleCameraFacingMode);
}
if (toggleFiltersBtn && dashboardFiltersPanel) {
  toggleFiltersBtn.addEventListener('click', () => {
    const isHidden = dashboardFiltersPanel.classList.toggle('hidden');
    toggleFiltersBtn.textContent = isHidden ? 'Mostrar filtros' : 'Ocultar filtros';
  });
}
cpfInput.addEventListener('input', (event) => {
  event.target.value = formatCPF(event.target.value);
});
whatsappInput.addEventListener('input', (event) => {
  event.target.value = formatWhatsApp(event.target.value);
  whatsappBtn.disabled = !event.target.value.trim();
});
whatsappBtn.addEventListener('click', sendWhatsAppMessage);
addRecordBtn.addEventListener('click', () => {
  addRecord();
});
generatePdfBtn.addEventListener('click', generatePDF);
uploadPhotoBtn.addEventListener('click', () => {
  photosInput.click();
  startCamera();
});
photosInput.addEventListener('change', handlePhotoUpload);
capturePhotoBtn.addEventListener('click', capturePhoto);
cancelCameraBtn.addEventListener('click', stopCamera);
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

logoutBtn.addEventListener('click', clearSession);

if (openFormBtn) {
  const handleOpenForm = (event) => {
    if (event) event.preventDefault();
    showView('formView');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  openFormBtn.addEventListener('click', handleOpenForm);
  openFormBtn.addEventListener('touchend', handleOpenForm);
}

if (backToDashboardBtn) {
  backToDashboardBtn.addEventListener('click', () => showView('dashboardView'));
}

if (backToDashboardFromDetail) {
  backToDashboardFromDetail.addEventListener('click', () => showView('dashboardView'));
}

if (applyFiltersBtn) {
  applyFiltersBtn.addEventListener('click', updateDashboard);
}

clearFiltersBtn.addEventListener('click', () => {
  filterAgent.value = '';
  filterMonth.value = '';
  filterYear.value = '';
  filterDateFrom.value = '';
  filterDateTo.value = '';
  filterSearch.value = '';
  filterDuplicates.checked = false;
  updateDashboard();
});
