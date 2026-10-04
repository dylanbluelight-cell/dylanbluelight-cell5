// ============================================================================
// SURABAYA 1945: MEMORYSCAPE REVOLUSI
// Interactive Logic & Web Audio Controller
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initMapSystem();
  initMonumentsGrid();
  initTimelineScrubber();
  initSpeechAndAudio();
  initQuizEngine();
  initAcademicReferences();
  initNavigationScroll();
});

// ============================================================================
// 1. INTERACTIVE SPATIAL MAP SYSTEM
// ============================================================================
let activeMonumentId = "bambu-runcing";

function initMapSystem() {
  const mapViewport = document.getElementById('mapViewport');
  if (!mapViewport) return;

  renderMapSvg(mapViewport);
  renderMapPins(mapViewport);
  updateMapDrawer(activeMonumentId);
}

function renderMapSvg(container) {
  // Render tactical map of Surabaya showing Tanjung Perak, Kalimas River, and major roads
  const svgHtml = `
    <svg class="map-canvas-svg" viewBox="0 0 1000 700" preserveAspectRatio="none">
      <defs>
        <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e293b" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#080c16" stop-opacity="1"/>
        </radialGradient>
        <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Grid lines -->
      <rect width="1000" height="700" fill="url(#mapGlow)" />
      ${Array.from({ length: 14 }).map((_, i) => 
        `<line x1="0" y1="${i * 50}" x2="1000" y2="${i * 50}" class="map-grid-line" />`
      ).join('')}
      ${Array.from({ length: 20 }).map((_, i) => 
        `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="700" class="map-grid-line" />`
      ).join('')}

      <!-- Pesisir Utara / Selat Madura -->
      <path d="M 0,0 L 1000,0 L 1000,80 Q 750,90 500,75 Q 250,60 0,90 Z" class="map-coast" />
      <text x="500" y="45" fill="#38bdf8" opacity="0.3" font-size="12" letter-spacing="4" text-anchor="middle" font-weight="700">SELAT MADURA & TANJUNG PERAK (SEKTOR UTARA)</text>

      <!-- Sungai Kalimas (Aliran dari Selatan ke Utara) -->
      <path d="M 330,700 C 340,600 370,520 460,420 C 510,360 480,260 450,180 C 430,120 450,75 460,0" class="map-river" />
      <text x="490" y="270" fill="#38bdf8" opacity="0.45" font-size="10" transform="rotate(75, 490, 270)" letter-spacing="3">ALIRAN SUNGAI KALIMAS</text>

      <!-- Jalur Arteri Utama: Tanjung Perak -> Jembatan Merah -> Tunjungan -> Darmo -> Wonokromo -->
      <path d="M 450,75 L 440,160 L 470,310 L 490,400 L 480,500 L 320,620" class="map-road" />

      <!-- Jalur Penghubung Barat - Timur -->
      <path d="M 120,400 Q 490,390 880,410" stroke="rgba(255,255,255,0.08)" stroke-width="2" fill="none" stroke-dasharray="6 4" />
      <path d="M 200,600 Q 480,580 820,600" stroke="rgba(255,255,255,0.08)" stroke-width="2" fill="none" stroke-dasharray="6 4" />

      <!-- Zona Taktis & Label Spasial -->
      <rect x="360" y="120" width="160" height="70" rx="8" fill="rgba(217, 4, 41, 0.08)" stroke="rgba(217, 4, 41, 0.3)" stroke-dasharray="3 3"/>
      <text x="440" y="140" fill="#ff4d6d" font-size="9" text-anchor="middle" font-weight="bold">ZONA JEMBATAN MERAH & INTERNATIO</text>

      <rect x="220" y="560" width="180" height="90" rx="8" fill="rgba(106, 4, 15, 0.1)" stroke="rgba(106, 4, 15, 0.35)" stroke-dasharray="3 3"/>
      <text x="310" y="585" fill="#f87171" font-size="9" text-anchor="middle" font-weight="bold">GARIS PERTAHANAN GUNUNG SARI</text>
      <text x="310" y="602" fill="#94a3b8" font-size="8" text-anchor="middle">Sektor Mundur ke Hinterland</text>

      <text x="850" y="660" fill="#94a3b8" opacity="0.3" font-size="11" letter-spacing="3" text-anchor="end">PETA SPASIAL REVOLUSI SURABAYA 1945</text>
    </svg>
  `;
  container.innerHTML = svgHtml;
}

function renderMapPins(container) {
  SURABAYA_HISTORY_DATA.monuments.forEach(m => {
    const pinEl = document.createElement('div');
    pinEl.className = `map-pin-group ${m.id === activeMonumentId ? 'active' : ''}`;
    pinEl.style.left = `${m.coords.x}%`;
    pinEl.style.top = `${m.coords.y}%`;
    pinEl.style.color = m.badgeColor;
    pinEl.dataset.id = m.id;

    pinEl.innerHTML = `
      <div class="map-pin-pulse"></div>
      <div class="map-pin-core">
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      </div>
      <div class="map-pin-label">${m.name}</div>
    `;

    pinEl.addEventListener('click', () => {
      document.querySelectorAll('.map-pin-group').forEach(p => p.classList.remove('active'));
      pinEl.classList.add('active');
      activeMonumentId = m.id;
      updateMapDrawer(m.id);
    });

    container.appendChild(pinEl);
  });
}

function updateMapDrawer(id) {
  const m = SURABAYA_HISTORY_DATA.monuments.find(item => item.id === id);
  if (!m) return;

  const categoryEl = document.getElementById('drawerCategory');
  const titleEl = document.getElementById('drawerTitle');
  const themeEl = document.getElementById('drawerTheme');
  const summaryEl = document.getElementById('drawerSummary');
  const quoteEl = document.getElementById('drawerQuote');
  const specsListEl = document.getElementById('drawerSpecsList');
  const exploreBtn = document.getElementById('btnDrawerExplore');

  if (categoryEl) categoryEl.textContent = m.tag;
  if (titleEl) titleEl.textContent = m.name;
  if (themeEl) {
    themeEl.textContent = m.theme;
    themeEl.style.borderColor = m.badgeColor;
    themeEl.style.color = m.badgeColor;
  }
  if (summaryEl) summaryEl.textContent = m.summary;
  if (quoteEl) quoteEl.textContent = `"${m.quote}"`;

  if (specsListEl) {
    specsListEl.innerHTML = m.tacticalSpecs.map(s => `
      <div class="drawer-spec-item">
        <span class="drawer-spec-label">${s.label}</span>
        <span class="drawer-spec-val">${s.val}</span>
      </div>
    `).join('');
  }

  if (exploreBtn) {
    exploreBtn.onclick = () => openMonumentModal(m.id);
  }
}

// ============================================================================
// 2. 6 MONUMENTS GRID & FILTER SYSTEM
// ============================================================================
function initMonumentsGrid() {
  const gridContainer = document.getElementById('monumentsGrid');
  const filterTabs = document.getElementById('filterTabs');
  if (!gridContainer) return;

  renderMonumentCards(SURABAYA_HISTORY_DATA.monuments);

  if (filterTabs) {
    filterTabs.addEventListener('click', (e) => {
      if (!e.target.classList.contains('filter-btn')) return;
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');

      const filterVal = e.target.dataset.filter;
      if (filterVal === 'all') {
        renderMonumentCards(SURABAYA_HISTORY_DATA.monuments);
      } else {
        const filtered = SURABAYA_HISTORY_DATA.monuments.filter(m => m.id === filterVal);
        renderMonumentCards(filtered);
      }
    });
  }
}

function getMonumentSvgArtwork(id, color) {
  // Bespoke architectural SVG illustrations for each monument
  switch (id) {
    case 'bambu-runcing':
      return `
        <svg class="card-illustration-svg" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="bambuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#e63946"/>
              <stop offset="100%" stop-color="#4a0000"/>
            </linearGradient>
            <radialGradient id="fountainWater" cx="50%" cy="100%" r="80%">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="400" height="200" fill="#0d1424"/>
          <!-- Water fountain glow -->
          <circle cx="200" cy="180" r="90" fill="url(#fountainWater)" />
          <!-- 5 Bamboo Pillars (Asymmetrical Concrete) -->
          <path d="M 120,180 L 140,70 L 155,50 L 155,180 Z" fill="url(#bambuGrad)"/>
          <path d="M 160,180 L 175,40 L 195,20 L 195,180 Z" fill="#ffd700"/>
          <path d="M 200,180 L 210,30 L 230,10 L 230,180 Z" fill="url(#bambuGrad)"/>
          <path d="M 235,180 L 245,60 L 265,40 L 265,180 Z" fill="#b38f00"/>
          <path d="M 270,180 L 280,90 L 295,75 L 295,180 Z" fill="url(#bambuGrad)"/>
          <!-- Fountain water sprays -->
          <path d="M 200,180 Q 150,110 110,140 M 200,180 Q 250,100 290,140" stroke="#7dd3fc" stroke-width="2" fill="none" opacity="0.6"/>
          <!-- Ground Base -->
          <rect x="90" y="175" width="220" height="25" rx="6" fill="#1e293b" stroke="#d4af37" stroke-width="1.5"/>
          <text x="200" y="192" fill="#fff" font-size="9" text-anchor="middle" font-weight="700">5 PILAR ASIMETRIS BAMBU RUNCING</text>
        </svg>
      `;
    case 'polisi-istimewa':
      return `
        <svg class="card-illustration-svg" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#457b9d"/>
              <stop offset="100%" stop-color="#1d3557"/>
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="#08101e"/>
          <!-- Colonial St. Louis Broederschool Facade Silhouette -->
          <rect x="60" y="70" width="280" height="110" fill="#131e33" stroke="#253553" stroke-width="1.5"/>
          <polygon points="60,70 200,25 340,70" fill="#1e2d4a" stroke="#253553"/>
          <circle cx="200" cy="55" r="14" fill="#d4af37" opacity="0.4"/>
          <!-- Moehammad Jasin Bronze Silhouette & Emblem -->
          <path d="M 200,85 L 230,100 L 230,140 Q 200,170 200,170 Q 170,140 170,100 Z" fill="url(#shieldGrad)" stroke="#ffd700" stroke-width="2"/>
          <polygon points="200,100 205,115 220,115 208,125 212,140 200,130 188,140 192,125 180,115 195,115" fill="#ffd700"/>
          <text x="200" y="188" fill="#ffd700" font-size="9" text-anchor="middle" font-weight="bold">PROKLAMASI POLISI 21 AGUSTUS 1945</text>
        </svg>
      `;
    case 'pers-perjuangan':
      return `
        <svg class="card-illustration-svg" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="goldRadio" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#f4a261"/>
              <stop offset="100%" stop-color="#b3541e"/>
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="#140f0b"/>
          <!-- Art Deco Facade Tunjungan 100 -->
          <path d="M 100,180 L 100,80 L 130,50 L 270,50 L 300,80 L 300,180 Z" fill="#251a14" stroke="#483226"/>
          <!-- Radio Tower & Waves -->
          <line x1="200" y1="50" x2="200" y2="15" stroke="#f4a261" stroke-width="3"/>
          <circle cx="200" cy="15" r="5" fill="#e63946"/>
          <circle cx="200" cy="15" r="20" stroke="#f4a261" stroke-width="1.5" fill="none" opacity="0.6"/>
          <circle cx="200" cy="15" r="35" stroke="#f4a261" stroke-width="1" fill="none" opacity="0.3"/>
          <!-- Ripped Flag Symbolism (Yamato Blue Ripped Off) -->
          <rect x="70" y="90" width="30" height="15" fill="#e63946"/>
          <rect x="70" y="105" width="30" height="15" fill="#ffffff"/>
          <rect x="70" y="120" width="30" height="10" fill="#2563eb" opacity="0.3" stroke-dasharray="2 2" stroke="#fff"/>
          <text x="200" y="188" fill="#f4a261" font-size="9" text-anchor="middle" font-weight="bold">TUNJUNGAN 100 & RRI SURABAYA</text>
        </svg>
      `;
    case 'mobil-mallaby':
      return `
        <svg class="card-illustration-svg" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="fireGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#ff0000"/>
              <stop offset="60%" stop-color="#ff7b00"/>
              <stop offset="100%" stop-color="#ffee00" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="#140608"/>
          <!-- Gedung Internatio Backdrop -->
          <rect x="80" y="50" width="240" height="130" fill="#1e1215" stroke="#3d2025"/>
          <line x1="120" y1="60" x2="120" y2="120" stroke="#4a2a30" stroke-width="2"/>
          <line x1="160" y1="60" x2="160" y2="120" stroke="#4a2a30" stroke-width="2"/>
          <line x1="240" y1="60" x2="240" y2="120" stroke="#4a2a30" stroke-width="2"/>
          <line x1="280" y1="60" x2="280" y2="120" stroke="#4a2a30" stroke-width="2"/>
          <!-- Burned 1939 Buick 8 Sedan Chassis Silhouette -->
          <path d="M 120,165 Q 140,135 180,135 L 240,135 Q 275,135 290,155 L 305,165 Z" fill="#2d1318" stroke="#ff2a3a" stroke-width="1.5"/>
          <!-- Wheels -->
          <circle cx="150" cy="168" r="16" fill="#000" stroke="#666" stroke-width="2"/>
          <circle cx="265" cy="168" r="16" fill="#000" stroke="#666" stroke-width="2"/>
          <!-- Fire & Explosion Smoke -->
          <circle cx="210" cy="130" r="35" fill="url(#fireGrad)"/>
          <circle cx="175" cy="120" r="28" fill="url(#fireGrad)"/>
          <text x="200" y="192" fill="#ff4d6d" font-size="9" text-anchor="middle" font-weight="bold">BUICK 8 1939 MALLABY (TAMAN SEJARAH)</text>
        </svg>
      `;
    case 'palagan-gunungsari':
      return `
        <svg class="card-illustration-svg" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="trenchSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#2d0a0f"/>
              <stop offset="100%" stop-color="#0f0507"/>
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#trenchSky)"/>
          <!-- Gunung Sari Ridge Contour -->
          <path d="M 0,140 Q 150,110 250,125 T 400,105 L 400,200 L 0,200 Z" fill="#1f0e12" stroke="#3d161d"/>
          <!-- Earthen Trench Parit Pertahanan -->
          <path d="M 80,160 L 180,160 L 195,185 L 95,185 Z" fill="#0d0406" stroke="#521f27"/>
          <!-- British Sherman Tank Silhouette on Horizon -->
          <rect x="260" y="95" width="65" height="25" rx="4" fill="#000" stroke="#6a040f"/>
          <line x1="250" y1="102" x2="220" y2="100" stroke="#000" stroke-width="4"/>
          <!-- Shell impact smoke -->
          <path d="M 140,160 Q 130,120 160,110 Q 180,140 170,160 Z" fill="rgba(230, 57, 70, 0.4)"/>
          <text x="200" y="194" fill="#f87171" font-size="9" text-anchor="middle" font-weight="bold">PERTAHANAN TERAKHIR 28 NOV 1945</text>
        </svg>
      `;
    case 'tmp-sepuluh-november':
      return `
        <svg class="card-illustration-svg" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="tmpDawn" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#14213d"/>
              <stop offset="100%" stop-color="#080e1a"/>
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#tmpDawn)"/>
          <!-- Memorial Gates & Banyan Trees -->
          <path d="M 70,180 L 70,60 L 95,60 L 95,180 Z M 305,180 L 305,60 L 330,60 L 330,180 Z" fill="#1b2838" stroke="#d4af37"/>
          <!-- Rows of Heroic Grave Markers with Red-White Ribbons -->
          <rect x="130" y="130" width="6" height="30" fill="#fff"/>
          <rect x="122" y="138" width="22" height="6" fill="#fff"/>
          <rect x="180" y="125" width="6" height="35" fill="#fff"/>
          <rect x="172" y="134" width="22" height="6" fill="#fff"/>
          <rect x="230" y="130" width="6" height="30" fill="#fff"/>
          <rect x="222" y="138" width="22" height="6" fill="#fff"/>
          <circle cx="200" cy="80" r="18" fill="rgba(212, 175, 55, 0.15)" stroke="#ffd700" stroke-width="1.5"/>
          <text x="200" y="188" fill="#cbd5e1" font-size="9" text-anchor="middle" font-weight="bold">NEKROPOLIS JL. MAYJEN SUNGKONO</text>
        </svg>
      `;
    default:
      return `<rect width="400" height="200" fill="#1e293b"/>`;
  }
}

function renderMonumentCards(items) {
  const container = document.getElementById('monumentsGrid');
  if (!container) return;

  container.innerHTML = items.map(m => `
    <article class="monument-card" data-id="${m.id}">
      <div class="card-visual-header">
        ${getMonumentSvgArtwork(m.id, m.badgeColor)}
        <div class="card-overlay-badge" style="color: ${m.badgeColor}; border-color: ${m.badgeColor}40">
          ${m.tag}
        </div>
        <div class="card-overlay-year">${m.builtYear}</div>
      </div>
      <div class="card-body">
        <span class="card-theme">${m.theme}</span>
        <h3 class="card-title">${m.name}</h3>
        <p class="card-summary">${m.summary}</p>
        <div class="card-features-tag">
          ${m.tacticalSpecs.slice(0, 2).map(s => `
            <span class="spec-badge"><strong>${s.label}:</strong> ${s.val.split('(')[0]}</span>
          `).join('')}
        </div>
        <div class="card-action-bar">
          <button class="btn-card-read" onclick="openMonumentModal('${m.id}')">
            <span>Baca Kajian Historis</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <div class="card-loc-indicator">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>Surabaya</span>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

// ============================================================================
// 3. SCHOLARLY DETAIL MODAL
// ============================================================================
function openMonumentModal(id) {
  const m = SURABAYA_HISTORY_DATA.monuments.find(item => item.id === id);
  if (!m) return;

  const modalBackdrop = document.getElementById('monumentModal');
  const modalPill = document.getElementById('modalMetaPill');
  const modalTitle = document.getElementById('modalTitle');
  const modalLoc = document.getElementById('modalLoc');
  const modalQuote = document.getElementById('modalQuote');
  const modalBody = document.getElementById('modalContentSections');
  const modalSpecs = document.getElementById('modalSpecsTable');

  if (modalPill) modalPill.textContent = m.theme;
  if (modalTitle) modalTitle.textContent = m.name;
  if (modalLoc) modalLoc.textContent = `📍 Lokasi Spasial: ${m.location} • Dibangun/Diresmikan: ${m.builtYear}`;
  if (modalQuote) modalQuote.textContent = `"${m.quote}"`;

  if (modalBody) {
    let sectionsHtml = '';
    
    // Architecture section
    if (m.details.architecture) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Rancang Bangun & Lanskap Urban</h4>
          <p>${m.details.architecture}</p>
        </div>
      `;
    }

    // Historical background & context
    if (m.details.genealogy) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Genealogi Militer & Transformasi Takeyari</h4>
          <p>${m.details.genealogy}</p>
        </div>
      `;
    }

    if (m.details.asymmetry) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Asimetri Kapasitas & Perang Psikologis</h4>
          <p>${m.details.asymmetry}</p>
        </div>
      `;
    }

    if (m.details.theology) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Epistemologi Teologis: Kyai Subchi & Ritual Penyepuhan</h4>
          <p>${m.details.theology}</p>
        </div>
      `;
    }

    if (m.details.institutionalTransition) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Demiliterisasi Hoofdbureau & Tokubetsu Keisatsutai</h4>
          <p>${m.details.institutionalTransition}</p>
        </div>
      `;
    }

    if (m.details.proclamation) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Deklarasi Proklamasi Polisi M. Jasin</h4>
          <p>${m.details.proclamation}</p>
        </div>
      `;
    }

    if (m.details.impact) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Dampak Taktis & Perebutan Gudang Don Bosco</h4>
          <p>${m.details.impact}</p>
        </div>
      `;
    }

    if (m.details.newsAgency) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Akuisisi Kantor Berita Fasis Domei Menjadi ANTARA</h4>
          <p>${m.details.newsAgency}</p>
        </div>
      `;
    }

    if (m.details.visualWarfare) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Persenjataan Visual: Kamera Abdul Wahab Saleh di Yamato</h4>
          <p>${m.details.visualWarfare}</p>
        </div>
      `;
    }

    if (m.details.audioRadio) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Sayap Transmisi Audio: Gelombang RRI & Orasi Bung Tomo</h4>
          <p>${m.details.audioRadio}</p>
        </div>
      `;
    }

    if (m.details.contextMallaby) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Misi Ambigu Sekutu & Pendaratan Brigade 49</h4>
          <p>${m.details.contextMallaby}</p>
        </div>
      `;
    }

    if (m.details.internatioIncident) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Detik-Detik Baku Tembak Gedung Internatio</h4>
          <p>${m.details.internatioIncident}</p>
        </div>
      `;
    }

    if (m.details.fatalEnd) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Ledakan Buick 8 & Kematian Tragis Jenderal Inggris</h4>
          <p>${m.details.fatalEnd}</p>
        </div>
      `;
    }

    if (m.details.retaliation) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Casus Belli Ultimatum Mansergh & Sikap Gubernur Suryo</h4>
          <p>${m.details.retaliation}</p>
        </div>
      `;
    }

    if (m.details.topography) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Topografi Garis Pertahanan Selatan Gunung Sari</h4>
          <p>${m.details.topography}</p>
        </div>
      `;
    }

    if (m.details.studentWarriors) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Heroisme Martir Remaja: Barisan Tentara Pelajar</h4>
          <p>${m.details.studentWarriors}</p>
        </div>
      `;
    }

    if (m.details.tankMassacre) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Tragedi Gilasan Kavaleri Tank Sherman Inggris</h4>
          <p>${m.details.tankMassacre}</p>
        </div>
      `;
    }

    if (m.details.doctrinalShift) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Pergeseran Doktrin Militer ke Perang Gerilya Asimetris</h4>
          <p>${m.details.doctrinalShift}</p>
        </div>
      `;
    }

    if (m.details.memoryPreservation) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Pelestarian Memori: Teatrikal Begandring Surabaia</h4>
          <p>${m.details.memoryPreservation}</p>
        </div>
      `;
    }

    if (m.details.necropolis) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Nekropolis Pahlawan & Penataan Makam Negara</h4>
          <p>${m.details.necropolis}</p>
        </div>
      `;
    }

    if (m.details.commanderParadox) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Paradoks Spasial: Absensi Jasad Mayjen Sungkono</h4>
          <p>${m.details.commanderParadox}</p>
        </div>
      `;
    }

    if (m.details.crossEraIntersection) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Persinggungan Sejarah 1965: Pelda KKO Soegimin</h4>
          <p>${m.details.crossEraIntersection}</p>
        </div>
      `;
    }

    if (m.details.reconciliationSpace) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Lanskap Katarsis & Rekonsiliasi Humanis Lintas Bangsa</h4>
          <p>${m.details.reconciliationSpace}</p>
        </div>
      `;
    }

    if (m.details.militaryRitual) {
      sectionsHtml += `
        <div class="modal-section-block">
          <h4><span></span>Ritualisasi Militer: Hari Armada RI & Tradisi Ziarah</h4>
          <p>${m.details.militaryRitual}</p>
        </div>
      `;
    }

    modalBody.innerHTML = sectionsHtml;
  }

  if (modalSpecs) {
    modalSpecs.innerHTML = m.tacticalSpecs.map(s => `
      <tr>
        <td>${s.label}</td>
        <td>${s.val}</td>
      </tr>
    `).join('');
  }

  if (modalBackdrop) modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMonumentModal() {
  const modalBackdrop = document.getElementById('monumentModal');
  if (modalBackdrop) modalBackdrop.classList.remove('active');
  document.body.style.overflow = 'auto';
}

window.openMonumentModal = openMonumentModal;
window.closeMonumentModal = closeMonumentModal;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMonumentModal();
});

// ============================================================================
// 4. INTERACTIVE TIMELINE REVOLUSI
// ============================================================================
let currentTimelineIndex = 0;

function initTimelineScrubber() {
  const stepperBar = document.getElementById('timelineStepperBar');
  const dateBadgeEl = document.getElementById('timelineDateBadge');
  const locTagEl = document.getElementById('timelineLocTag');
  const titleEl = document.getElementById('timelineTitle');
  const summaryEl = document.getElementById('timelineSummary');
  const prevBtn = document.getElementById('btnTimelinePrev');
  const nextBtn = document.getElementById('btnTimelineNext');

  if (!stepperBar) return;

  const steps = SURABAYA_HISTORY_DATA.chronology;

  // Render Step Nodes
  stepperBar.innerHTML = `
    <div class="timeline-progress-track">
      <div class="timeline-progress-fill" id="timelineProgressFill"></div>
    </div>
    ${steps.map((s, idx) => `
      <div class="timeline-step-node ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <div class="timeline-node-tooltip">${s.date}</div>
      </div>
    `).join('')}
  `;

  stepperBar.querySelectorAll('.timeline-step-node').forEach(node => {
    node.addEventListener('click', () => {
      const idx = parseInt(node.dataset.index, 10);
      setTimelineIndex(idx);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentTimelineIndex > 0) setTimelineIndex(currentTimelineIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentTimelineIndex < steps.length - 1) setTimelineIndex(currentTimelineIndex + 1);
    });
  }

  setTimelineIndex(0);
}

function setTimelineIndex(idx) {
  const steps = SURABAYA_HISTORY_DATA.chronology;
  if (idx < 0 || idx >= steps.length) return;
  currentTimelineIndex = idx;

  const dateBadgeEl = document.getElementById('timelineDateBadge');
  const locTagEl = document.getElementById('timelineLocTag');
  const titleEl = document.getElementById('timelineTitle');
  const summaryEl = document.getElementById('timelineSummary');
  const fillEl = document.getElementById('timelineProgressFill');

  const curr = steps[idx];
  if (dateBadgeEl) dateBadgeEl.textContent = curr.date;
  if (locTagEl) locTagEl.textContent = `📍 ${curr.location}`;
  if (titleEl) titleEl.textContent = curr.title;
  if (summaryEl) summaryEl.textContent = curr.summary;

  const pct = (idx / (steps.length - 1)) * 100;
  if (fillEl) fillEl.style.width = `${pct}%`;

  document.querySelectorAll('.timeline-step-node').forEach((node, nIdx) => {
    node.classList.toggle('active', nIdx === idx);
  });
}

// ============================================================================
// 5. AUDIO SYNTHESIZER & SPEECH PLAYER (WEB AUDIO API + SPEECH SYNTHESIS)
// ============================================================================
let audioCtx = null;
let ambientOsc = null;
let ambientNoise = null;
let isAmbientPlaying = false;
let isSpeechPlaying = false;
let currentSpeechIndex = 0;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function initSpeechAndAudio() {
  const globalAudioToggle = document.getElementById('globalAudioToggle');
  const speechPills = document.getElementById('speechPills');
  const btnPlaySpeech = document.getElementById('btnPlaySpeech');

  if (globalAudioToggle) {
    globalAudioToggle.addEventListener('click', toggleAmbientSoundscape);
  }

  if (speechPills) {
    speechPills.innerHTML = SURABAYA_HISTORY_DATA.speechRecordings.map((sp, idx) => `
      <button class="speech-pill-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
        ${sp.title.split('(')[0]}
      </button>
    `).join('');

    speechPills.addEventListener('click', (e) => {
      if (!e.target.classList.contains('speech-pill-btn')) return;
      document.querySelectorAll('.speech-pill-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      const idx = parseInt(e.target.dataset.idx, 10);
      setSpeechIndex(idx);
    });
  }

  if (btnPlaySpeech) {
    btnPlaySpeech.addEventListener('click', toggleSpeechNarration);
  }

  setSpeechIndex(0);
}

function setSpeechIndex(idx) {
  currentSpeechIndex = idx;
  const sp = SURABAYA_HISTORY_DATA.speechRecordings[idx];
  if (!sp) return;

  const titleEl = document.getElementById('speechTitle');
  const speakerEl = document.getElementById('speechSpeaker');
  const contextEl = document.getElementById('speechContext');
  const transcriptEl = document.getElementById('speechTranscript');

  if (titleEl) titleEl.textContent = sp.title;
  if (speakerEl) speakerEl.textContent = `🎙️ ${sp.speaker}`;
  if (contextEl) contextEl.textContent = sp.context;
  if (transcriptEl) transcriptEl.textContent = sp.transcript;

  if (isSpeechPlaying) {
    window.speechSynthesis.cancel();
    isSpeechPlaying = false;
    updateSpeechPlayButton(false);
  }
}

function toggleSpeechNarration() {
  const sp = SURABAYA_HISTORY_DATA.speechRecordings[currentSpeechIndex];
  if (!sp) return;

  if (isSpeechPlaying) {
    window.speechSynthesis.cancel();
    isSpeechPlaying = false;
    updateSpeechPlayButton(false);
    return;
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(sp.transcript);
    utterance.lang = 'id-ID';
    utterance.rate = sp.speechAudioRate || 1.0;
    utterance.pitch = sp.speechPitch || 1.0;

    // Pick best Indonesian voice if available
    const voices = window.speechSynthesis.getVoices();
    const idVoice = voices.find(v => v.lang.startsWith('id'));
    if (idVoice) utterance.voice = idVoice;

    utterance.onstart = () => {
      isSpeechPlaying = true;
      updateSpeechPlayButton(true);
      playSfx('radio');
    };

    utterance.onend = () => {
      isSpeechPlaying = false;
      updateSpeechPlayButton(false);
    };

    utterance.onerror = () => {
      isSpeechPlaying = false;
      updateSpeechPlayButton(false);
    };

    window.speechSynthesis.speak(utterance);
  } else {
    alert("Fitur Text-to-Speech tidak didukung di browser ini. Anda tetap dapat membaca transkrip otentik.");
  }
}

function updateSpeechPlayButton(playing) {
  const btn = document.getElementById('btnPlaySpeech');
  const avatar = document.getElementById('speechAvatar');
  if (btn) {
    btn.innerHTML = playing ? `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
      <span>Hentikan Orasi</span>
    ` : `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      <span>Dengarkan Orasi Sejarah</span>
    `;
  }
  if (avatar) {
    avatar.classList.toggle('speaking', playing);
  }
}

// Web Audio Ambient Synthesizer
function toggleAmbientSoundscape() {
  const ctx = getAudioContext();
  const toggleBtn = document.getElementById('globalAudioToggle');

  if (isAmbientPlaying) {
    if (ambientOsc) {
      ambientOsc.stop();
      ambientOsc.disconnect();
      ambientOsc = null;
    }
    isAmbientPlaying = false;
    if (toggleBtn) {
      toggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        <span>Suasana Suara 1945</span>
      `;
    }
  } else {
    // Generate low frequency dramatic drone + binaural war atmosphere
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(55, ctx.currentTime); // Low A1 note

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, ctx.currentTime);

    gainNode.gain.setValueAtTime(0.04, ctx.currentTime);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    ambientOsc = osc;
    isAmbientPlaying = true;

    if (toggleBtn) {
      toggleBtn.innerHTML = `
        <div class="audio-pulse"><span></span><span></span><span></span></div>
        <span>Suasana Aktif</span>
      `;
    }
  }
}

// Built-in Sound Effects Synthesizer using Web Audio API
function playSfx(type) {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  if (type === 'morse') {
    // Telegraph Morse Code Beeps
    [0, 0.12, 0.24, 0.44, 0.56].forEach((timeOffset) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(800, now + timeOffset);
      gain.gain.setValueAtTime(0.12, now + timeOffset);
      gain.gain.exponentialRampToValueAtTime(0.001, now + timeOffset + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + timeOffset);
      osc.stop(now + timeOffset + 0.08);
    });
  } else if (type === 'siren') {
    // 1945 Air Raid Siren
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(350, now);
    osc.frequency.linearRampToValueAtTime(750, now + 1.2);
    osc.frequency.linearRampToValueAtTime(350, now + 2.4);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 2.5);
  } else if (type === 'cannon') {
    // Heavy Artillery Shell Boom
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.8);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.9);
  } else if (type === 'radio') {
    // Radio frequency burst
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.linearRampToValueAtTime(400, now + 0.2);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  }
}

window.playSfx = playSfx;

// ============================================================================
// 6. EDU-QUIZ ENGINE
// ============================================================================
let currentQuizIndex = 0;
let quizScore = 0;
let userAnswers = [];

function initQuizEngine() {
  renderQuizQuestion();

  const nextBtn = document.getElementById('btnNextQuestion');
  if (nextBtn) {
    nextBtn.addEventListener('click', handleNextQuizQuestion);
  }
}

function renderQuizQuestion() {
  const q = SURABAYA_HISTORY_DATA.quizQuestions[currentQuizIndex];
  const progressEl = document.getElementById('quizProgress');
  const scoreEl = document.getElementById('quizScore');
  const questionEl = document.getElementById('quizQuestionText');
  const optionsContainer = document.getElementById('quizOptionsList');
  const feedbackBox = document.getElementById('quizFeedbackBox');
  const nextBtn = document.getElementById('btnNextQuestion');

  if (!q) return;

  if (progressEl) progressEl.textContent = `Pertanyaan ${currentQuizIndex + 1} dari ${SURABAYA_HISTORY_DATA.quizQuestions.length}`;
  if (scoreEl) scoreEl.textContent = `Skor: ${quizScore * 10} Poin`;
  if (questionEl) questionEl.textContent = q.question;

  if (feedbackBox) {
    feedbackBox.className = 'quiz-feedback-box';
    feedbackBox.style.display = 'none';
  }

  if (nextBtn) nextBtn.style.display = 'none';

  if (optionsContainer) {
    const letters = ['A', 'B', 'C', 'D'];
    optionsContainer.innerHTML = q.options.map((opt, optIdx) => `
      <button class="quiz-option-btn" data-index="${optIdx}">
        <span class="quiz-option-letter">${letters[optIdx]}</span>
        <span>${opt}</span>
      </button>
    `).join('');

    optionsContainer.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedIdx = parseInt(btn.dataset.index, 10);
        evaluateQuizAnswer(selectedIdx, q);
      });
    });
  }
}

function evaluateQuizAnswer(selectedIdx, q) {
  const options = document.querySelectorAll('.quiz-option-btn');
  const feedbackBox = document.getElementById('quizFeedbackBox');
  const nextBtn = document.getElementById('btnNextQuestion');

  options.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctAnswer) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx) {
      btn.classList.add('wrong');
    }
  });

  const isCorrect = selectedIdx === q.correctAnswer;
  if (isCorrect) {
    quizScore++;
    playSfx('morse');
  }

  userAnswers.push({ questionIdx: currentQuizIndex, selectedIdx, isCorrect });

  if (feedbackBox) {
    feedbackBox.style.display = 'block';
    feedbackBox.className = `quiz-feedback-box active ${isCorrect ? 'correct-fb' : 'wrong-fb'}`;
    feedbackBox.innerHTML = `
      <h4>${isCorrect ? '✅ Jawaban Anda Tepat!' : '❌ Jawaban Kurang Tepat'}</h4>
      <p>${q.explanation}</p>
    `;
  }

  if (nextBtn) {
    nextBtn.style.display = 'inline-flex';
    nextBtn.textContent = (currentQuizIndex === SURABAYA_HISTORY_DATA.quizQuestions.length - 1) 
      ? 'Lihat Hasil Akhir & Gelar' 
      : 'Lanjut ke Soal Berikutnya';
  }
}

function handleNextQuizQuestion() {
  if (currentQuizIndex < SURABAYA_HISTORY_DATA.quizQuestions.length - 1) {
    currentQuizIndex++;
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  const quizCard = document.getElementById('quizCardActive');
  const resultCard = document.getElementById('quizResultView');
  const total = SURABAYA_HISTORY_DATA.quizQuestions.length;
  const pct = Math.round((quizScore / total) * 100);

  if (quizCard) quizCard.style.display = 'none';
  if (resultCard) {
    resultCard.classList.add('active');

    let rankTitle = 'Arek Pejuang Pemula';
    let rankDesc = 'Anda telah menyerap sebagian informasi revolusi fisik. Kunjungi kembali monumen dan baca analisis spasial untuk memperdalam pemahaman!';
    let trophyIcon = '🎖️';

    if (pct >= 90) {
      rankTitle = 'Arsiparis Sejarah Utama (Arek Pahlawan Sejati)';
      rankDesc = 'Luar biasa! Anda menguasai dengan sempurna analisis historiografi, strategi asimetris, dan memori kolektif revolusi Surabaya 1945.';
      trophyIcon = '🏆';
    } else if (pct >= 70) {
      rankTitle = 'Sejarawan Juang Surabaya';
      rankDesc = 'Pemahaman yang sangat tajam mengenai transisi institusi kepolisian, perang informasi pers, dan epilog pertempuran kota.';
      trophyIcon = '⭐';
    }

    resultCard.innerHTML = `
      <div class="result-trophy">${trophyIcon}</div>
      <div class="result-rank">${rankTitle}</div>
      <div class="result-score-highlight">${quizScore * 10} / 100 Poin</div>
      <p class="result-desc">${rankDesc} Anda berhasil menjawab benar <strong>${quizScore}</strong> dari <strong>${total}</strong> pertanyaan berbobot sejarah.</p>
      <button class="btn-primary" onclick="restartQuiz()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
        <span>Ulangi Kuis Literasi</span>
      </button>
    `;
  }
}

function restartQuiz() {
  currentQuizIndex = 0;
  quizScore = 0;
  userAnswers = [];
  const quizCard = document.getElementById('quizCardActive');
  const resultCard = document.getElementById('quizResultView');
  if (resultCard) resultCard.classList.remove('active');
  if (quizCard) quizCard.style.display = 'block';
  renderQuizQuestion();
}

window.restartQuiz = restartQuiz;

// ============================================================================
// 7. ACADEMIC REFERENCES SEARCH & FILTER
// ============================================================================
function initAcademicReferences() {
  const container = document.getElementById('refCardsGrid');
  const searchInput = document.getElementById('academicSearchInput');
  if (!container) return;

  renderReferences(SURABAYA_HISTORY_DATA.academicReferences);

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = SURABAYA_HISTORY_DATA.academicReferences.filter(r => 
        r.title.toLowerCase().includes(q) || r.source.toLowerCase().includes(q)
      );
      renderReferences(filtered);
    });
  }
}

function renderReferences(items) {
  const container = document.getElementById('refCardsGrid');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-dim); padding: 2rem;">Tidak ditemukan dokumen riset yang sesuai pencarian.</p>`;
    return;
  }

  container.innerHTML = items.map(r => `
    <div class="ref-item-card">
      <div>
        <div class="ref-item-source">Dokumen [${r.id}] • ${r.source}</div>
        <div class="ref-item-title">${r.title}</div>
      </div>
      <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="ref-item-link">
        <span>Buka Sumber Rujukan</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
      </a>
    </div>
  `).join('');
}

// ============================================================================
// 8. NAVIGATION SMOOTH SCROLL & ACTIVE LINK OBSERVER
// ============================================================================
function initNavigationScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
