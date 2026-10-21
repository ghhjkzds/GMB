const TYPES = {
  RINON: {
    icon:'🫀', name:'1) Riñón para trasplante (extrahospitalario)', badge:'primary', un:'EXENTO (órgano para trasplante)',
    short:'Órgano humano para trasplante entre centros sanitarios.',
    desc:'El órgano para trasplante no se gestiona como mercancía peligrosa infecciosa, pero se mantiene el sistema de embalaje seguro y cadena de custodia/cadena térmica.',
    req:['Contenedor primario estanco con solución de preservación','Segundo contenedor estanco y resistente a fugas','Embalaje exterior rígido con aislamiento térmico','Control de temperatura según protocolo de trasplantes'],
    mark:['Identificación completa de remitente/destinatario','Etiqueta de transporte de órgano para trasplante','Registro de hora de extracción y de envío'],
    absorbent:true, rigidOuter:true,
    steps: [
      { item:'kidneySample', target:'primary', txt:'Arrastra el <strong>riñón</strong> al embalaje primario.', action:'placePrimaryItem' },
      { item:'preservationSolution', target:'primary', txt:'Añade <strong>solución de preservación</strong> y sella el primario.', action:'sealPrimary' },
      { item:'sealedPrimary', target:'secondary', txt:'Arrastra el <strong>primario sellado</strong> al secundario.', action:'movePrimaryToSecondary' },
      { item:'secondarySealKit', target:'secondary', txt:'Completa el <strong>sellado estanco</strong> del secundario.', action:'sealSecondary' },
      { item:'sealedSecondary', target:'outer', txt:'Arrastra el <strong>secundario sellado</strong> al exterior.', action:'moveSecondaryToOuter' },
      { item:'transplantLabel', target:'outer', txt:'Añade <strong>etiqueta de órgano para trasplante</strong>.', action:'addOuterLabel', labelText:'ÓRGANO PARA TRASPLANTE' },
      { item:'tempLogger', target:'outer', txt:'Añade <strong>control de temperatura y trazabilidad</strong>.', action:'addOuterChecklist' }
    ]
  },
  HUESO: {
    icon:'🧊', name:'2) Hueso ultracongelado (mínima probabilidad de patógenos)', badge:'info', un:'MUESTRA EXENTA + UN1845',
    short:'Tejido ultracongelado con historia clínica de bajo riesgo biológico.',
    desc:'Al existir documentación clínica de mínima probabilidad de patógenos, se trata como muestra exenta; al transportarse con hielo seco, se añade el marcado UN1845.',
    req:['Recipiente primario estanco','Recipiente secundario estanco con absorbente','Embalaje exterior rígido apto para ultracongelación','Hielo seco por fuera del secundario y ventilación para CO₂'],
    mark:['Leyenda «Muestra humana exenta»','UN1845 «Dióxido de carbono sólido»','Peso neto de hielo seco (kg) en el exterior'],
    absorbent:true, rigidOuter:true,
    steps: [
      { item:'boneSample', target:'primary', txt:'Arrastra el <strong>hueso ultracongelado</strong> al primario.', action:'placePrimaryItem' },
      { item:'absorbentPrimary', target:'primary', txt:'Añade absorbente y sella el primario.', action:'sealPrimary' },
      { item:'sealedPrimary', target:'secondary', txt:'Arrastra el primario sellado al secundario.', action:'movePrimaryToSecondary' },
      { item:'secondarySealKit', target:'secondary', txt:'Sella el secundario y verifica estanqueidad.', action:'sealSecondary' },
      { item:'sealedSecondary', target:'outer', txt:'Arrastra el secundario sellado al embalaje exterior.', action:'moveSecondaryToOuter' },
      { item:'dryIce', target:'outer', txt:'Añade <strong>hielo seco</strong> fuera del secundario.', action:'addOuterChecklist' },
      { item:'exemptAndDryIceLabel', target:'outer', txt:'Coloca marcado <strong>Muestra exenta + UN1845</strong>.', action:'addOuterLabel', labelText:'MUESTRA EXENTA + UN1845' }
    ]
  },
  ESPUTO: {
    icon:'🧫', name:'3) Esputo UE sin historia clínica/informe médico', badge:'warning', un:'UN3373',
    short:'Muestra diagnóstica sin información clínica adjunta.',
    desc:'Ante la ausencia de historia clínica e informe médico, se aplica criterio conservador y se embala como Sustancia biológica, categoría B (UN3373).',
    req:['Embalaje primario estanco','Embalaje secundario estanco','Material absorbente entre primario y secundario','Embalaje exterior rígido (al menos una cara de 100×100 mm)','Prueba de caída de 1,2 m'],
    mark:['Rombo UN3373 «Substancia biológica, categoría B»','Nombre y teléfono del responsable','Dirección del remitente y destinatario','Lista de contenido entre secundario y exterior'],
    absorbent:true, rigidOuter:true,
    steps: [
      { item:'sputumSample', target:'primary', txt:'Arrastra la <strong>muestra de esputo</strong> al primario.', action:'placePrimaryItem' },
      { item:'absorbentPrimary', target:'primary', txt:'Añade absorbente y sella el primario.', action:'sealPrimary' },
      { item:'sealedPrimary', target:'secondary', txt:'Arrastra el primario sellado al secundario.', action:'movePrimaryToSecondary' },
      { item:'secondarySealKit', target:'secondary', txt:'Sella el secundario con absorbente de seguridad.', action:'sealSecondary' },
      { item:'sealedSecondary', target:'outer', txt:'Arrastra el secundario sellado al exterior.', action:'moveSecondaryToOuter' },
      { item:'un3373Label', target:'outer', txt:'Coloca el <strong>rombo UN3373</strong>.', action:'addOuterLabel', labelText:'UN3373' },
      { item:'responsibleInfo', target:'outer', txt:'Añade datos del responsable, remitente y destinatario.', action:'addOuterChecklist' }
    ]
  },
  EBOLA: {
    icon:'☣️', name:'4) Paciente de África con sospecha de Ébola', badge:'danger', un:'UN2814',
    short:'Alta sospecha de agente infeccioso grave: manejo como categoría A.',
    desc:'Muestra con sospecha de enfermedad por virus del Ébola: se clasifica y transporta como Sustancia infecciosa categoría A (UN2814).',
    req:['Embalaje primario estanco con material absorbente','Embalaje secundario estanco','Embalaje exterior rígido homologado','Control estricto de bioseguridad y trazabilidad'],
    mark:['Marca UN2814 y designación oficial','Etiqueta de peligro clase 6.2','Persona responsable y teléfono 24 h','Documentación de mercancías peligrosas aplicable'],
    absorbent:true, rigidOuter:true,
    steps: [
      { item:'highRiskSample', target:'primary', txt:'Arrastra la <strong>muestra de alto riesgo</strong> al primario.', action:'placePrimaryItem' },
      { item:'absorbentPrimary', target:'primary', txt:'Añade absorbente y cierre reforzado del primario.', action:'sealPrimary' },
      { item:'sealedPrimary', target:'secondary', txt:'Arrastra el primario sellado al secundario.', action:'movePrimaryToSecondary' },
      { item:'secondarySealKit', target:'secondary', txt:'Sella secundario con verificación de fuga.', action:'sealSecondary' },
      { item:'sealedSecondary', target:'outer', txt:'Arrastra el secundario sellado al exterior homologado.', action:'moveSecondaryToOuter' },
      { item:'un2814Label', target:'outer', txt:'Coloca la etiqueta <strong>UN2814</strong>.', action:'addOuterLabel', labelText:'UN2814' },
      { item:'class62Label', target:'outer', txt:'Añade etiqueta de peligro <strong>clase 6.2</strong>.', action:'addOuterChecklist' },
      { item:'dangerousGoodsDoc', target:'outer', txt:'Incluye documentación de mercancías peligrosas y teléfono 24 h.', action:'addOuterChecklist' }
    ]
  }
};

const STEP_ITEMS = {
  kidneySample: { icon:'🫀', name:'Riñón para trasplante', desc:'Arrástralo al primario.' },
  boneSample: { icon:'🦴', name:'Hueso ultracongelado', desc:'Arrástralo al primario.' },
  sputumSample: { icon:'🧫', name:'Muestra de esputo', desc:'Arrástrala al primario.' },
  highRiskSample: { icon:'☣️', name:'Muestra sospecha Ébola', desc:'Arrástrala al primario.' },
  preservationSolution: { icon:'💧', name:'Solución de preservación', desc:'Añadir y sellar primario.' },
  absorbentPrimary: { icon:'🧻', name:'Absorbente primario', desc:'Protege posibles derrames.' },
  sealedPrimary: { icon:'🧪', name:'Primario sellado', desc:'Llévalo al secundario.' },
  secondarySealKit: { icon:'🧽', name:'Kit de sellado secundario', desc:'Completa cierre estanco.' },
  sealedSecondary: { icon:'📦', name:'Secundario sellado', desc:'Llévalo al embalaje exterior.' },
  dryIce: { icon:'🧊', name:'Hielo seco', desc:'Ubicar fuera del secundario.' },
  exemptAndDryIceLabel: { icon:'🏷️', name:'Marcado EXENTA + UN1845', desc:'Etiquetado exterior.' },
  transplantLabel: { icon:'🏷️', name:'Etiqueta trasplante', desc:'Marcar transporte de órgano.' },
  tempLogger: { icon:'🌡️', name:'Control térmico y trazabilidad', desc:'Registrar temperatura y tiempos.' },
  un3373Label: { icon:'🔶', name:'Rombo UN3373', desc:'Marcado categoría B.' },
  un2814Label: { icon:'🟥', name:'Etiqueta UN2814', desc:'Marcado categoría A.' },
  class62Label: { icon:'⚠️', name:'Etiqueta clase 6.2', desc:'Peligro infeccioso.' },
  dangerousGoodsDoc: { icon:'📄', name:'Documento mercancías peligrosas', desc:'Incluir con teléfono 24 h.' },
  responsibleInfo: { icon:'📞', name:'Datos del responsable', desc:'Remitente/destinatario y contacto.' }
};

let current = null;
let state = null;

const $ = id => document.getElementById(id);

function populateDetails(key) {
  const type = TYPES[key];
  if (!type) return;

  if ($('dTitle')) {
    $('dTitle').innerHTML = `${type.icon} ${type.name} <span class="badge text-bg-${type.badge}">${type.un}</span>`;
  }
  if ($('dDesc')) {
    $('dDesc').textContent = type.desc;
  }
  if ($('dReq')) {
    $('dReq').innerHTML = type.req.map(item => `<li>${item}</li>`).join('');
  }
  if ($('dMark')) {
    $('dMark').innerHTML = type.mark.map(item => `<li>${item}</li>`).join('');
  }
}

function getCurrentSteps() {
  return current ? TYPES[current].steps : [];
}

function initPage() {
  const selectedCase = document.body.dataset.case;
  if (!selectedCase || !TYPES[selectedCase]) return;
  current = selectedCase;
  populateDetails(current);
  reset();
}

function reset() {
  state = { step:0 };
  ['outer', 'secondary', 'primary'].forEach(id => {
    const box = $(id);
    box.className = `box ${id} empty`;
    box.querySelector(':scope > .closed-lid').style.display = 'none';
    box.classList.remove('drop-ok');
  });
  $('primaryContent').innerHTML = '';
  $('secondaryContent').innerHTML = '';
  $('outerContent').innerHTML = '';
  $('absPri').style.display = 'none';
  $('absSec').style.display = 'none';
  $('unLabel').style.display = 'none';
  $('feedback').innerHTML = '';
  render();
}

function renderSupply(step) {
  const info = STEP_ITEMS[step.item];
  $('supply').innerHTML = `
    <div class="drag-item" draggable="true" data-item="${step.item}">
      <span class="ico">${info.icon}</span>
      <div>
        <div class="name">${info.name}</div>
        <div class="desc">${info.desc}</div>
      </div>
    </div>`;
  $('supply').querySelector('.drag-item').addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', step.item);
  });
}

function render() {
  const steps = getCurrentSteps();
  const stepIndex = state.step;
  $('dots').innerHTML = steps.map((_, index) => (
    `<span class="step-dot ${index < stepIndex ? 'done' : index === stepIndex ? 'current' : ''}">${index < stepIndex ? '✓' : index + 1}</span>`
  )).join('');

  if (stepIndex >= steps.length) {
    $('instruction').className = 'alert alert-success mb-3';
    $('instruction').innerHTML = '🎉 <strong>¡Paquete listo para el transporte!</strong>';
    $('supply').innerHTML = '<div class="text-success small fw-semibold">Simulación completada.</div>';
    ['primary', 'secondary', 'outer'].forEach(id => $(id).classList.remove('drop-ok'));
    showSummary();
    return;
  }

  const step = steps[stepIndex];
  $('instruction').className = 'alert alert-info mb-3 dropzone-hint';
  setTimeout(() => $('instruction').classList.remove('dropzone-hint'), 0);
  $('instruction').innerHTML = `<strong>Paso ${stepIndex + 1}:</strong> ${step.txt}`;
  renderSupply(step);

  ['primary', 'secondary', 'outer'].forEach(id => $(id).classList.remove('drop-ok'));
  $(step.target).classList.add('drop-ok');
}

function putInSlot(slotId, icon, text) {
  $(slotId).innerHTML = `<div class="ico">${icon}</div><div class="txt">${text}</div>`;
}

function appendToSlot(slotId, icon, text) {
  $(slotId).innerHTML += `<div class="slot-item">${icon} ${text}</div>`;
}

function setOuterLabel(text) {
  $('unLabel').textContent = text;
  $('unLabel').style.display = 'block';
}

function handleValidDrop(stepIndex) {
  const type = TYPES[current];
  const step = getCurrentSteps()[stepIndex];
  const primary = $('primary');
  const secondary = $('secondary');
  const outer = $('outer');
  const lid = box => box.querySelector(':scope > .closed-lid');

  if (step.action === 'placePrimaryItem') {
    primary.classList.remove('empty');
    primary.classList.add('ready');
    putInSlot('primaryContent', STEP_ITEMS[step.item].icon, 'Muestra en primario');
  }
  if (step.action === 'sealPrimary') {
    $('absPri').style.display = 'block';
    lid(primary).style.display = 'block';
    putInSlot('primaryContent', '🧪', 'Primario sellado');
  }
  if (step.action === 'movePrimaryToSecondary') {
    secondary.classList.remove('empty');
    secondary.classList.add('ready');
    putInSlot('secondaryContent', '🧪', 'Primario en secundario');
  }
  if (step.action === 'sealSecondary') {
    $('absSec').style.display = 'block';
    lid(secondary).style.display = 'block';
    putInSlot('secondaryContent', '📦', 'Secundario sellado');
  }
  if (step.action === 'moveSecondaryToOuter') {
    outer.classList.remove('empty');
    outer.classList.add('ready');
    putInSlot('outerContent', '📦', 'Secundario protegido');
  }
  if (step.action === 'addOuterLabel') {
    lid(outer).style.display = 'block';
    setOuterLabel(step.labelText || type.un);
    appendToSlot('outerContent', STEP_ITEMS[step.item].icon, STEP_ITEMS[step.item].name);
  }
  if (step.action === 'addOuterChecklist') {
    appendToSlot('outerContent', STEP_ITEMS[step.item].icon, STEP_ITEMS[step.item].name);
  }

  state.step += 1;
  render();
}

function tryDrop(targetId, itemKey) {
  const steps = getCurrentSteps();
  if (!state || state.step >= steps.length) return;
  const expected = steps[state.step];
  if (expected.target !== targetId || expected.item !== itemKey) return;
  handleValidDrop(state.step);
}

['primary', 'secondary', 'outer'].forEach(targetId => {
  const target = $(targetId);
  target.addEventListener('dragover', event => {
    const steps = getCurrentSteps();
    if (!state || state.step >= steps.length) return;
    const expected = steps[state.step];
    if (expected.target === targetId) event.preventDefault();
  });
  target.addEventListener('drop', event => {
    event.preventDefault();
    const itemKey = event.dataTransfer.getData('text/plain');
    tryDrop(targetId, itemKey);
  });
});

function showSummary() {
  const type = TYPES[current];
  const specificChecks = {
    RINON: [
      'Etiqueta de órgano para trasplante y cadena de custodia completadas',
      'Control de temperatura y tiempos de traslado registrado'
    ],
    HUESO: [
      'Hielo seco añadido fuera del secundario con ventilación de CO₂',
      'Marcado exterior: Muestra exenta + UN1845 + peso de hielo seco'
    ],
    ESPUTO: [
      'Marcado rombo UN3373 aplicado correctamente',
      'Datos de responsable, remitente y destinatario en el exterior'
    ],
    EBOLA: [
      'Etiquetas UN2814 y clase 6.2 colocadas',
      'Documento de mercancías peligrosas y teléfono 24 h incluidos'
    ]
  };
  $('feedback').innerHTML = `
    <div class="card mb-3 border-success"><div class="card-body">
      <h6 class="text-success">✔ Lista de verificación completada</h6>
      <ul class="small mb-0">
        <li>Muestra colocada en embalaje primario y sellada con absorbente</li>
        <li>Primario introducido y asegurado en embalaje secundario</li>
        <li>Secundario introducido en embalaje exterior ${type.rigidOuter ? 'rígido' : 'adecuado'}</li>
        ${specificChecks[current].map(item => `<li>${item}</li>`).join('')}
        <li>Marcado exterior aplicado: <strong>${type.un}</strong></li>
      </ul>
    </div></div>`;
}

if ($('resetBtn')) {
  $('resetBtn').onclick = reset;
}

initPage();
