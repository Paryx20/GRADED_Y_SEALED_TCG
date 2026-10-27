const APP_CONFIG = {
  TAX_RATE: 0.15,
  COURIER_SHIPPING_FEE: 5.00,
  PICKUP_SHIPPING_FEE: 0.00,
  ITEMS_PER_PAGE: 4
};

const PRODUCTS = [
  {
    id: 'charizard-base',
    nombre: 'Charizard Base Set 1999 #4/102',
    set: 'Base Set 1999',
    rareza: 'Holo Rare',
    tipo: 'Fuego',
    categoria: 'Solo PSA',
    imagenLocal: 'img/charizard-base.png',
    imagenFallbackUrl: 'https://images.pokemontcg.io/base1/4_hires.png',
    precios: {
      raw: 750.00,
      psa8: 1800.00,
      psa9: 4850.00,
      psa10: 18500.00
    },
    descripcion: 'Holo Rare 1st Edition • Idioma: Inglés • Certificación Bóveda PSA',
    tendencia12m: '+21.7%'
  },
  {
    id: 'gengar-vmax',
    nombre: 'Gengar VMAX Secret Rare Alt Art',
    set: 'Fusion Strike 2021',
    rareza: 'Secret Rare',
    tipo: 'Psíquico',
    categoria: 'Solo PSA',
    imagenLocal: 'img/gengar-vmax.png',
    imagenFallbackUrl: 'https://images.pokemontcg.io/swsh8/271_hires.png',
    precios: {
      raw: 240.00,
      psa8: 340.00,
      psa9: 460.00,
      psa10: 620.00
    },
    descripcion: 'Alt Art Secret Rare #271/264 • Idioma: Inglés • Bóveda PSA',
    tendencia12m: '+14.2%'
  },
  {
    id: 'umbreon-vmax',
    nombre: 'Umbreon VMAX Moonbreon Alt Art',
    set: 'Evolving Skies 2021',
    rareza: 'Secret Rare',
    tipo: 'Oscuridad',
    categoria: 'Cartas Sueltas',
    imagenLocal: 'img/umbreon-vmax.png',
    imagenFallbackUrl: 'https://images.pokemontcg.io/swsh7/215_hires.png',
    precios: {
      raw: 650.00,
      psa8: 720.00,
      psa9: 780.00,
      psa10: 1350.00
    },
    descripcion: 'Alt Art Secret Rare #215/203 • Funda UltraPro • Autenticidad Garantizada',
    tendencia12m: '+18.9%'
  },
  {
    id: 'lugia-neo',
    nombre: 'Lugia 1st Edition Holo #9/111',
    set: 'Neo Genesis 2000',
    rareza: 'Holo Rare',
    tipo: 'Psíquico',
    categoria: 'Solo PSA',
    imagenLocal: 'img/lugia-neo.png',
    imagenFallbackUrl: 'https://images.pokemontcg.io/neo1/9_hires.png',
    precios: {
      raw: 420.00,
      psa8: 980.00,
      psa9: 1450.00,
      psa10: 4200.00
    },
    descripcion: 'Holo Rare Neo Genesis • Grado Inversión • Bóveda PSA',
    tendencia12m: '+9.4%'
  },
  {
    id: 'booster-team-rocket',
    nombre: 'Booster Pack Team Rocket 1999 Heavy',
    set: 'Team Rocket 1999',
    rareza: 'Promo',
    tipo: 'Oscuridad',
    categoria: 'Booster Packs',
    imagenLocal: 'img/booster-team-rocket.png',
    imagenFallbackUrl: 'https://images.pokemontcg.io/base1/logo.png',
    precios: {
      raw: 320.00,
      psa8: 335.00,
      psa9: 350.00,
      psa10: 480.00
    },
    descripcion: 'Sobre vintage sellado WOTC 1999 • Peso Heavy 20.94g • Garantizado sin abrir',
    tendencia12m: '+31.5%'
  },
  {
    id: 'booster-base-set',
    nombre: 'Booster Pack Base Set 1999 Blister',
    set: 'Base Set 1999',
    rareza: 'Promo',
    tipo: 'Fuego',
    categoria: 'Booster Packs',
    imagenLocal: 'img/booster-base.png',
    imagenFallbackUrl: 'https://images.pokemontcg.io/base1/logo.png',
    precios: {
      raw: 450.00,
      psa8: 480.00,
      psa9: 550.00,
      psa10: 890.00
    },
    descripcion: 'Sobre de 11 cartas adicionales • Arte Charizard • Empaque Blister original',
    tendencia12m: '+26.8%'
  },
  {
    id: 'rayquaza-goldstar',
    nombre: 'Rayquaza Gold Star #107/107',
    set: 'EX Deoxys 2005',
    rareza: 'Gold Star',
    tipo: 'Oscuridad',
    categoria: 'Solo PSA',
    imagenLocal: 'img/rayquaza-goldstar.png',
    imagenFallbackUrl: 'https://images.pokemontcg.io/ex8/107_hires.png',
    precios: {
      raw: 1200.00,
      psa8: 3100.00,
      psa9: 6800.00,
      psa10: 24500.00
    },
    descripcion: 'Gold Star Ultra Rara • Estuche acrílico PSA • Colección Privada',
    tendencia12m: '+42.1%'
  },
  {
    id: 'mewtwo-shadowless',
    nombre: 'Mewtwo Shadowless Holo #10/102',
    set: 'Base Set 1999',
    rareza: 'Holo Rare',
    tipo: 'Psíquico',
    categoria: 'Cartas Sueltas',
    imagenLocal: 'img/mewtwo-shadowless.png',
    imagenFallbackUrl: 'https://images.pokemontcg.io/base1/10_hires.png',
    precios: {
      raw: 110.00,
      psa8: 240.00,
      psa9: 510.00,
      psa10: 1250.00
    },
    descripcion: 'Versión Shadowless sin sombra • Centrado impecable • Estado NM',
    tendencia12m: '+11.3%'
  },
  {
    id: 'pikachu-illustrator',
    nombre: 'Pikachu Promo CoroCoro Holo',
    set: 'WOTC Promo 1998',
    rareza: 'Promo',
    tipo: 'Eléctrico',
    categoria: 'Solo PSA',
    imagenLocal: 'img/pikachu-promo.png',
    imagenFallbackUrl: 'https://images.pokemontcg.io/basep/1_hires.png',
    precios: {
      raw: 85.00,
      psa8: 160.00,
      psa9: 310.00,
      psa10: 720.00
    },
    descripcion: 'Promo japonesa clásica • Graduación certificada PSA • Slab sellado',
    tendencia12m: '+16.5%'
  },
  {
    id: 'blastoise-base',
    nombre: 'Blastoise Base Set 1999 #2/102',
    set: 'Base Set 1999',
    rareza: 'Holo Rare',
    tipo: 'Agua',
    categoria: 'Cartas Sueltas',
    imagenLocal: 'img/blastoise-base.png',
    imagenFallbackUrl: 'https://images.pokemontcg.io/base1/2_hires.png',
    precios: {
      raw: 160.00,
      psa8: 390.00,
      psa9: 920.00,
      psa10: 3800.00
    },
    descripcion: 'Holo Rare clásica • Arte de Ken Sugimori • Preservación en TopLoader',
    tendencia12m: '+15.7%'
  },
  {
    id: 'booster-fossil',
    nombre: 'Booster Pack Fossil 1999 Lapras',
    set: 'Fossil 1999',
    rareza: 'Promo',
    tipo: 'Agua',
    categoria: 'Booster Packs',
    imagenLocal: 'img/booster-fossil.png',
    imagenFallbackUrl: 'https://images.pokemontcg.io/base1/logo.png',
    precios: {
      raw: 210.00,
      psa8: 225.00,
      psa9: 260.00,
      psa10: 390.00
    },
    descripcion: 'Arte Lapras original • Sobre cerrado de fábrica • Clima controlado',
    tendencia12m: '+19.2%'
  },
  {
    id: 'espeon-vmax',
    nombre: 'Espeon VMAX Alt Art Promo #188',
    set: 'SWSH Promos 2021',
    rareza: 'Secret Rare',
    tipo: 'Psíquico',
    categoria: 'Cartas Sueltas',
    imagenLocal: 'img/espeon-vmax.png',
    imagenFallbackUrl: 'https://images.pokemontcg.io/swshp/SWSH188_hires.png',
    precios: {
      raw: 140.00,
      psa8: 185.00,
      psa9: 230.00,
      psa10: 360.00
    },
    descripcion: 'Alt Art SWSH Promo • Arte durmiente en tejado • Estado Gem Mint Raw',
    tendencia12m: '+13.8%'
  }
];

const app = {
  state: {
    currentView: 'view-home',
    activeCategory: 'Todas',
    searchQuery: '',
    advancedFilters: {
      type: 'all',
      rarity: 'all',
      minPrice: null,
      maxPrice: null
    },
    currentPage: 1,
    cart: [],
    lastDeletedItem: null,
    pendingDeleteItemId: null,
    deliveryMethod: 'courier',
    shippingFee: APP_CONFIG.COURIER_SHIPPING_FEE,
    currentUser: null,
    currentPdpProduct: PRODUCTS[0],
    pdpSelectedCondition: 'psa10',
    pdpQuantity: 1
  },

  init() {
    this.initCartFromStorage();
    this.initSessionFromStorage();
    this.initUrlParams();
    this.renderCuratedShowcases();
    this.renderCatalog();
    this.renderCart();
    this.renderDynamicPDP();
    this.renderDynamicTracking();
    this.renderConfirmation();
    this.updateCartBadge();
    this.setupSearchSpotlight();
    this.setupPDPChartInteractions();
    this.setupPhoneInput();
    this.setupIdValidation();
    if (window.lucide) {
      window.lucide.createIcons();
    }
  },

  initCartFromStorage() {
    try {
      const saved = localStorage.getItem('gstcg_cart');
      if (saved) {
        this.state.cart = JSON.parse(saved);
      }
    } catch (e) {
      this.state.cart = [];
    }
  },

  saveCartToStorage() {
    try {
      localStorage.setItem('gstcg_cart', JSON.stringify(this.state.cart));
    } catch (e) {}
  },

  initUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('id') || localStorage.getItem('gstcg_current_pdp');
    if (prodId) {
      const found = PRODUCTS.find(p => p.id === prodId);
      if (found) {
        this.state.currentPdpProduct = found;
      }
    }
    const q = params.get('q');
    if (q) {
      this.state.searchQuery = q.toLowerCase().trim();
      const searchInput = document.getElementById('global-search');
      if (searchInput) searchInput.value = q;
    }
  },

  initSessionFromStorage() {
    try {
      const savedUserJson = localStorage.getItem('gstcg_user');
      if (savedUserJson) {
        this.state.currentUser = JSON.parse(savedUserJson);
      }
    } catch (e) {
      this.state.currentUser = null;
    }
    this.updateNavUserDisplay();
  },

  updateNavUserDisplay() {
    const userLabel = document.getElementById('nav-user-label');
    const logoutBtn = document.getElementById('btn-nav-logout');
    if (this.state.currentUser) {
      const firstName = this.state.currentUser.nombre.split(' ')[0];
      if (userLabel) userLabel.textContent = firstName;
      if (logoutBtn) logoutBtn.classList.remove('hidden');
    } else {
      if (userLabel) userLabel.textContent = 'Mi Cuenta';
      if (logoutBtn) logoutBtn.classList.add('hidden');
    }
  },

  openProductPDP(productId) {
    const found = PRODUCTS.find(p => p.id === productId);
    if (found) {
      this.state.currentPdpProduct = found;
      this.state.pdpSelectedCondition = 'psa10';
      this.state.pdpQuantity = 1;
      localStorage.setItem('gstcg_current_pdp', productId);
      const pdpView = document.getElementById('view-pdp');
      if (pdpView && !pdpView.classList.contains('hidden') && pdpView.classList.contains('view-section')) {
        this.activateView('view-pdp');
        this.renderDynamicPDP();
      } else {
        window.location.href = 'pdp.html?id=' + encodeURIComponent(productId);
      }
    }
  },

  activateView(viewId) {
    document.querySelectorAll('.view-section').forEach(section => {
      section.classList.remove('active');
    });
    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add('active');
      this.state.currentView = viewId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.lucide) window.lucide.createIcons();
    }
  },

  navigateTo(target) {
    const mapping = {
      'home': 'home.html',
      'cart': 'cart.html',
      'checkout': 'checkout.html',
      'confirmation': 'confirmation.html',
      'tracking': 'tracking.html',
      'auth': 'login.html',
      'login': 'login.html',
      'error': 'checkout.html'
    };
    const dest = mapping[target] || (target + '.html');
    window.location.href = dest;
  },

  renderCuratedShowcases() {
    const vaultGrid = document.getElementById('curated-vault-grid');
    if (vaultGrid) {
      const featuredIds = ['charizard-base', 'umbreon-vmax', 'lugia-neo', 'gengar-vmax'];
      const featuredCards = featuredIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

      vaultGrid.innerHTML = featuredCards.map(card => `
        <article 
          onclick="app.openProductPDP('${card.id}')" 
          onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();app.openProductPDP('${card.id}');}"
          role="button"
          tabindex="0"
          aria-label="Ver detalles de ${card.nombre}"
          class="cursor-pointer bg-white border border-brand-border rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-brand-red/50 transition-all flex flex-col justify-between group"
        >
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="px-2 py-0.5 text-[10px] font-black bg-amber-100 text-amber-900 rounded">
                PSA 10 GEM MT
              </span>
              <span class="text-[11px] font-bold text-emerald-700">${card.tendencia12m}</span>
            </div>
            <div class="aspect-[3/4] bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center p-3 relative">
              <img 
                src="${card.imagenLocal}" 
                alt="${card.nombre}" 
                class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                onerror="this.onerror=null; this.src='${card.imagenFallbackUrl}'"
              />
            </div>
            <h3 class="mt-3 text-sm font-extrabold text-brand-charcoal group-hover:text-brand-red transition line-clamp-1">
              ${card.nombre}
            </h3>
            <p class="text-[11px] text-brand-muted mt-0.5 line-clamp-1">${card.set}</p>
          </div>
          <div class="mt-4 pt-3 border-t border-brand-border flex items-center justify-between">
            <div>
              <span class="text-[10px] text-brand-muted block">Desde (Raw)</span>
              <span class="text-xs font-bold text-slate-700">$${card.precios.raw.toFixed(2)}</span>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold text-amber-600 block">PSA 10</span>
              <span class="text-sm font-black text-brand-charcoal">$${card.precios.psa10.toFixed(2)}</span>
            </div>
          </div>
        </article>
      `).join('');
    }

    const sealedGrid = document.getElementById('curated-sealed-grid');
    if (sealedGrid) {
      const sealedIds = ['booster-team-rocket', 'booster-base-set'];
      const sealedPacks = sealedIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

      sealedGrid.innerHTML = sealedPacks.map(pack => `
        <article 
          onclick="app.openProductPDP('${pack.id}')" 
          onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();app.openProductPDP('${pack.id}');}"
          role="button"
          tabindex="0"
          aria-label="Ver sobre sellado ${pack.nombre}"
          class="cursor-pointer bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 transition-all group shadow-md"
        >
          <div class="w-28 h-36 sm:w-32 sm:h-40 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-center p-2.5 flex-shrink-0 overflow-hidden">
            <img 
              src="${pack.imagenLocal}" 
              alt="${pack.nombre}" 
              class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" 
              onerror="this.onerror=null; this.src='${pack.imagenFallbackUrl}'"
            />
          </div>
          <div class="flex-1 text-center sm:text-left space-y-2">
            <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <i data-lucide="shield-check" class="w-3 h-3 text-emerald-400"></i>
              <span>SELLADO DE ÉPOCA • NO PESADO / HEAVY</span>
            </div>
            <h3 class="text-base font-black text-white group-hover:text-amber-300 transition leading-snug">
              ${pack.nombre}
            </h3>
            <p class="text-xs text-slate-300 line-clamp-2">${pack.descripcion}</p>
            <div class="pt-2 flex items-center justify-between sm:justify-start gap-4">
              <div>
                <span class="text-[10px] text-slate-400 block uppercase">Inversión Certificada</span>
                <span class="text-base font-black text-amber-400">$${pack.precios.raw.toFixed(2)} USD</span>
              </div>
              <span class="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <i data-lucide="trending-up" class="w-3.5 h-3.5"></i> ${pack.tendencia12m}
              </span>
            </div>
          </div>
        </article>
      `).join('');
    }
  },

  exploreVaultPSA() {
    this.filterCategory('Solo PSA');
    const el = document.getElementById('catalog-complete-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  },

  exploreSealedBoxes() {
    this.filterCategory('Booster Packs');
    const el = document.getElementById('catalog-complete-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  },

  filterCategory(cat) {
    this.state.activeCategory = cat;
    this.state.currentPage = 1;

    document.querySelectorAll('.filter-chip').forEach(btn => {
      const btnCat = btn.getAttribute('data-cat');
      if (btnCat === cat) {
        btn.className = 'filter-chip px-4 py-2 text-xs font-bold rounded-full bg-brand-red text-white transition shadow-sm';
      } else {
        btn.className = 'filter-chip px-4 py-2 text-xs font-bold rounded-full border border-slate-300 text-brand-charcoal hover:bg-slate-100 transition';
      }
    });

    this.renderCatalog();
  },

  openAdvancedFilters() {
    const drawer = document.getElementById('advanced-filters-drawer');
    if (drawer) drawer.classList.add('active');
  },

  closeAdvancedFilters() {
    const drawer = document.getElementById('advanced-filters-drawer');
    if (drawer) drawer.classList.remove('active');
  },

  applyAdvancedFilters() {
    const typeSelect = document.getElementById('filter-type');
    const raritySelect = document.getElementById('filter-rarity');
    const minInput = document.getElementById('filter-min-price');
    const maxInput = document.getElementById('filter-max-price');

    this.state.advancedFilters.type = typeSelect ? typeSelect.value : 'all';
    this.state.advancedFilters.rarity = raritySelect ? raritySelect.value : 'all';
    this.state.advancedFilters.minPrice = minInput && minInput.value ? parseFloat(minInput.value) : null;
    this.state.advancedFilters.maxPrice = maxInput && maxInput.value ? parseFloat(maxInput.value) : null;

    this.state.currentPage = 1;
    this.closeAdvancedFilters();
    this.renderCatalog();
    this.showToast('Filtros avanzados aplicados al catálogo.', 'success');
  },

  resetAdvancedFilters() {
    this.state.advancedFilters = { type: 'all', rarity: 'all', minPrice: null, maxPrice: null };
    const t = document.getElementById('filter-type'); if (t) t.value = 'all';
    const r = document.getElementById('filter-rarity'); if (r) r.value = 'all';
    const min = document.getElementById('filter-min-price'); if (min) min.value = '';
    const max = document.getElementById('filter-max-price'); if (max) max.value = '';

    this.state.currentPage = 1;
    this.closeAdvancedFilters();
    this.renderCatalog();
    this.showToast('Filtros restablecidos.', 'info');
  },

  setPage(page) {
    this.state.currentPage = page;
    this.renderCatalog();
    const catalogSec = document.getElementById('catalog-complete-section');
    if (catalogSec) {
      catalogSec.scrollIntoView({ behavior: 'smooth' });
    }
  },

  getFilteredCatalog() {
    return PRODUCTS.filter(card => {
      if (this.state.activeCategory !== 'Todas' && card.categoria !== this.state.activeCategory) {
        return false;
      }
      if (this.state.searchQuery) {
        const q = this.state.searchQuery;
        const match = card.nombre.toLowerCase().includes(q) ||
                      card.set.toLowerCase().includes(q) ||
                      card.tipo.toLowerCase().includes(q) ||
                      card.rareza.toLowerCase().includes(q);
        if (!match) return false;
      }
      const af = this.state.advancedFilters;
      if (af.type !== 'all' && card.tipo !== af.type) return false;
      if (af.rarity !== 'all' && card.rareza !== af.rarity) return false;
      if (af.minPrice !== null && card.precios.raw < af.minPrice) return false;
      if (af.maxPrice !== null && card.precios.raw > af.maxPrice) return false;
      return true;
    });
  },

  renderCatalog() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const filtered = this.getFilteredCatalog();
    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / APP_CONFIG.ITEMS_PER_PAGE) || 1;

    if (this.state.currentPage > totalPages) this.state.currentPage = 1;

    const startIndex = (this.state.currentPage - 1) * APP_CONFIG.ITEMS_PER_PAGE;
    const pageItems = filtered.slice(startIndex, startIndex + APP_CONFIG.ITEMS_PER_PAGE);

    if (pageItems.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full bg-white border border-brand-border rounded-xl p-12 text-center text-brand-muted">
          <i data-lucide="package-x" class="w-12 h-12 mx-auto mb-3 text-slate-300"></i>
          <p class="text-sm font-bold text-brand-charcoal">No se encontraron productos con los filtros seleccionados.</p>
          <button onclick="app.resetAdvancedFilters(); app.filterCategory('Todas');" class="mt-4 px-4 py-2 bg-brand-red text-white text-xs font-bold rounded-lg">
            Limpiar todos los filtros
          </button>
        </div>
      `;
      this.renderPagination(0, 1, 1);
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    grid.innerHTML = pageItems.map(card => `
      <div 
        onclick="app.openProductPDP('${card.id}')" 
        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();app.openProductPDP('${card.id}');}"
        role="button"
        tabindex="0"
        aria-label="Ver detalles de ${card.nombre}"
        class="cursor-pointer bg-white border border-brand-border rounded-xl p-4 shadow-sm hover:shadow-md hover:border-brand-red/50 transition flex flex-col justify-between group"
      >
        <div>
          <div class="aspect-[3/4] bg-slate-50 rounded-lg border border-slate-200 overflow-hidden flex items-center justify-center p-3 relative">
            <img 
              src="${card.imagenLocal}" 
              alt="${card.nombre}" 
              class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" 
              onerror="this.onerror=null; this.src='${card.imagenFallbackUrl}'"
            />
            <span class="absolute top-2 right-2 px-2 py-0.5 text-[9px] font-black bg-slate-900/80 text-white rounded">
              ${card.tipo}
            </span>
          </div>

          <div class="mt-3">
            <span class="text-[10px] font-bold text-brand-muted uppercase">${card.set}</span>
            <h4 class="text-sm font-extrabold text-brand-charcoal group-hover:text-brand-red transition line-clamp-1">
              ${card.nombre}
            </h4>
            <p class="text-xs text-brand-muted line-clamp-1 mt-0.5">${card.rareza} • ${card.categoria}</p>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-brand-border flex items-center justify-between">
          <div>
            <span class="text-[10px] text-brand-muted block">Precio base</span>
            <span class="text-sm font-black text-brand-charcoal">$${card.precios.raw.toFixed(2)}</span>
          </div>
          <button 
            type="button" 
            onclick="event.stopPropagation(); app.addToCart('${card.id}', '${card.nombre.replace(/'/g, "\\'")}', 'raw', ${card.precios.raw}, '${card.imagenLocal}', '${card.imagenFallbackUrl}', 1)"
            class="px-3 py-1.5 bg-brand-charcoal hover:bg-brand-red text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5 touch-target"
            aria-label="Añadir ${card.nombre} a la bolsa"
          >
            <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
            <span>Añadir</span>
          </button>
        </div>
      </div>
    `).join('');

    this.renderPagination(totalItems, this.state.currentPage, totalPages);
    if (window.lucide) window.lucide.createIcons();
  },

  renderPagination(totalItems, currentPage, totalPages) {
    const nav = document.getElementById('catalog-pagination');
    if (!nav) return;

    if (totalItems === 0) {
      nav.innerHTML = '<span class="text-xs text-brand-muted">0 productos encontrados</span>';
      return;
    }

    const start = (currentPage - 1) * APP_CONFIG.ITEMS_PER_PAGE + 1;
    const end = Math.min(currentPage * APP_CONFIG.ITEMS_PER_PAGE, totalItems);

    let buttonsHtml = '';
    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
        buttonsHtml += `
          <button type="button" aria-current="page" class="w-8 h-8 rounded-lg bg-brand-red text-white font-bold text-xs">
            ${i}
          </button>
        `;
      } else {
        buttonsHtml += `
          <button type="button" onclick="app.setPage(${i})" class="w-8 h-8 rounded-lg border border-slate-300 text-brand-charcoal hover:bg-slate-100 font-bold text-xs transition">
            ${i}
          </button>
        `;
      }
    }

    nav.innerHTML = `
      <div class="text-xs text-brand-muted font-medium">
        Mostrando <span class="font-bold text-brand-charcoal">${start}-${end}</span> de <span class="font-bold text-brand-charcoal">${totalItems}</span> coleccionables
      </div>
      <div class="flex items-center gap-1.5">
        <button 
          type="button" 
          onclick="app.setPage(${currentPage - 1})" 
          ${currentPage === 1 ? 'disabled class="px-2.5 py-1.5 border border-slate-200 text-slate-300 text-xs font-bold rounded-lg cursor-not-allowed"' : 'class="px-2.5 py-1.5 border border-slate-300 text-brand-charcoal hover:bg-slate-100 text-xs font-bold rounded-lg transition"'}
        >
          Anterior
        </button>
        <div class="flex items-center gap-1">
          ${buttonsHtml}
        </div>
        <button 
          type="button" 
          onclick="app.setPage(${currentPage + 1})" 
          ${currentPage === totalPages ? 'disabled class="px-2.5 py-1.5 border border-slate-200 text-slate-300 text-xs font-bold rounded-lg cursor-not-allowed"' : 'class="px-2.5 py-1.5 border border-slate-300 text-brand-charcoal hover:bg-slate-100 text-xs font-bold rounded-lg transition"'}
        >
          Siguiente
        </button>
      </div>
    `;
  },

  renderDynamicPDP() {
    const card = this.state.currentPdpProduct;
    if (!card) return;

    const bSet = document.getElementById('pdp-breadcrumb-set');
    const bName = document.getElementById('pdp-breadcrumb-name');
    const mainImg = document.getElementById('pdp-main-image');
    const certBadge = document.getElementById('pdp-cert-badge');
    const title = document.getElementById('pdp-title');
    const desc = document.getElementById('pdp-desc');
    const rawPrice = document.getElementById('cond-price-raw');
    const psa8Price = document.getElementById('cond-price-psa8');
    const psa9Price = document.getElementById('cond-price-psa9');
    const psa10Price = document.getElementById('cond-price-psa10');
    const currentPrice = document.getElementById('pdp-price');
    const trendPill = document.getElementById('market-trend-pill');
    const qtyValue = document.getElementById('pdp-quantity-value');

    if (bSet) bSet.innerText = card.set;
    if (bName) bName.innerText = card.nombre;
    if (mainImg) {
      mainImg.src = card.imagenLocal;
      mainImg.onerror = () => { mainImg.src = card.imagenFallbackUrl; };
      mainImg.alt = card.nombre;
    }
    if (certBadge) certBadge.innerText = `PSA 10 GEM MT • ${card.id.toUpperCase()}`;
    if (title) title.innerText = card.nombre;
    if (desc) desc.innerText = card.descripcion;
    if (rawPrice) rawPrice.innerText = `$${card.precios.raw.toFixed(2)}`;
    if (psa8Price) psa8Price.innerText = `$${card.precios.psa8.toFixed(2)}`;
    if (psa9Price) psa9Price.innerText = `$${card.precios.psa9.toFixed(2)}`;
    if (psa10Price) psa10Price.innerText = `$${card.precios.psa10.toFixed(2)}`;

    const selectedCond = this.state.pdpSelectedCondition;
    const unitPrice = card.precios[selectedCond] || card.precios.psa10;
    if (currentPrice) currentPrice.innerText = `$${unitPrice.toFixed(2)} USD`;
    if (trendPill) trendPill.innerText = card.tendencia12m;
    if (qtyValue) qtyValue.innerText = this.state.pdpQuantity;

    this.selectPDPCondition(this.state.pdpSelectedCondition);
  },

  selectPDPCondition(cond) {
    this.state.pdpSelectedCondition = cond;
    const card = this.state.currentPdpProduct;
    if (!card) return;

    ['raw', 'psa8', 'psa9', 'psa10'].forEach(c => {
      const btn = document.getElementById(`cond-${c}`);
      if (!btn) return;
      const title = btn.querySelector('.cond-title');
      const price = btn.querySelector('.cond-price');
      const check = btn.querySelector('.check-indicator');

      if (c === cond) {
        btn.className = 'cond-btn p-3 rounded-xl bg-brand-charcoal text-white text-left shadow transition';
        if (title) {
          title.className = 'cond-title text-xs font-bold text-white flex items-center justify-between';
          if (!check) {
            title.innerHTML = `<span>${title.innerText}</span><i data-lucide="check" class="check-indicator w-3.5 h-3.5 text-emerald-400"></i>`;
          }
        }
        if (price) price.className = 'cond-price text-sm font-black text-amber-400';
      } else {
        btn.className = 'cond-btn p-3 rounded-xl border border-slate-200 text-left hover:border-slate-400 transition bg-white';
        if (title) {
          title.className = 'cond-title text-xs font-bold text-brand-charcoal';
          const existingCheck = title.querySelector('.check-indicator');
          if (existingCheck) existingCheck.remove();
        }
        if (price) price.className = 'cond-price text-sm font-black text-brand-muted';
      }
    });

    const activePrice = card.precios[cond] || card.precios.psa10;
    const priceDisplay = document.getElementById('pdp-price');
    if (priceDisplay) priceDisplay.innerText = `$${activePrice.toFixed(2)} USD`;

    if (window.lucide) window.lucide.createIcons();
  },

  updatePDPQuantity(delta) {
    let next = this.state.pdpQuantity + delta;
    if (next < 1) next = 1;
    if (next > 10) {
      this.showToast('Límite de 10 unidades por orden de custodia.', 'info');
      next = 10;
    }
    this.state.pdpQuantity = next;
    const display = document.getElementById('pdp-quantity-value');
    if (display) display.innerText = next;
  },

  openPSAGuideModal() {
    const modal = document.getElementById('psa-guide-modal');
    if (modal) modal.classList.add('active');
  },

  closePSAGuideModal() {
    const modal = document.getElementById('psa-guide-modal');
    if (modal) modal.classList.remove('active');
  },

  addCurrentPDPToCart() {
    const card = this.state.currentPdpProduct;
    if (!card) return;
    const cond = this.state.pdpSelectedCondition;
    const price = card.precios[cond] || card.precios.psa10;
    const qty = this.state.pdpQuantity;

    this.addToCart(
      card.id,
      card.nombre,
      cond,
      price,
      card.imagenLocal,
      card.imagenFallbackUrl,
      qty
    );
  },

  addToCart(id, name, condition, price, imageLocal, imageFallback, qty = 1) {
    const itemKey = `${id}-${condition}`;
    const existing = this.state.cart.find(item => item.id === itemKey);

    if (existing) {
      existing.quantity += qty;
    } else {
      this.state.cart.push({
        id: itemKey,
        productId: id,
        name: name,
        condition: condition.toUpperCase(),
        price: price,
        imageLocal: imageLocal,
        imageFallback: imageFallback,
        quantity: qty
      });
    }

    this.saveCartToStorage();
    this.updateCartBadge();
    this.renderCart();
    this.showToast(`+${qty} "${name}" añadido a la bolsa`, 'success');
  },

  updateQuantity(id, delta) {
    const item = this.state.cart.find(c => c.id === id);
    if (!item) return;

    if (item.quantity + delta <= 0) {
      this.requestRemoveItem(id);
      return;
    }

    item.quantity += delta;
    this.saveCartToStorage();
    this.updateCartBadge();
    this.renderCart();
  },

  requestRemoveItem(id) {
    const item = this.state.cart.find(c => c.id === id);
    if (!item) return;

    this.state.pendingDeleteItemId = id;
    const modal = document.getElementById('delete-confirm-modal');
    const nameEl = document.getElementById('delete-confirm-item-name');
    if (nameEl) {
      nameEl.innerText = `Se eliminará "${item.name} (${item.condition})" de tu bolsa.`;
    }
    if (modal) {
      modal.classList.add('active');
    } else {
      this.confirmRemoveItem();
    }
  },

  cancelRemoveItem() {
    this.state.pendingDeleteItemId = null;
    const modal = document.getElementById('delete-confirm-modal');
    if (modal) modal.classList.remove('active');
  },

  confirmRemoveItem() {
    const id = this.state.pendingDeleteItemId;
    if (id) {
      this.removeItem(id);
      this.state.pendingDeleteItemId = null;
    }
    const modal = document.getElementById('delete-confirm-modal');
    if (modal) modal.classList.remove('active');
  },

  removeItem(id) {
    const index = this.state.cart.findIndex(c => c.id === id);
    if (index === -1) return;

    const removed = this.state.cart.splice(index, 1)[0];
    this.state.lastDeletedItem = { item: removed, index: index };
    this.saveCartToStorage();
    this.updateCartBadge();
    this.renderCart();

    const banner = document.getElementById('undo-banner');
    const text = document.getElementById('undo-text');
    if (banner && text) {
      text.innerText = `Ítem "${removed.name}" eliminado de la bolsa.`;
      banner.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    }
  },

  undoLastDeletion() {
    if (!this.state.lastDeletedItem) return;
    const { item, index } = this.state.lastDeletedItem;
    this.state.cart.splice(index, 0, item);
    this.state.lastDeletedItem = null;

    const banner = document.getElementById('undo-banner');
    if (banner) banner.classList.add('hidden');

    this.saveCartToStorage();
    this.updateCartBadge();
    this.renderCart();
    this.showToast(`Ítem "${item.name}" restaurado`, 'success');
  },

  renderCart() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (this.state.cart.length === 0) {
      container.innerHTML = `
        <div class="bg-white border border-brand-border rounded-xl p-10 text-center text-brand-muted">
          <i data-lucide="shopping-bag" class="w-14 h-14 mx-auto mb-3 text-slate-300"></i>
          <h3 class="font-extrabold text-base text-brand-charcoal">Tu bolsa de compras está vacía</h3>
          <p class="text-xs text-brand-muted mt-1 max-w-sm mx-auto">Añade cartas coleccionables, slabs PSA o booster packs para iniciar tu compra.</p>
          <a href="home.html" class="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red hover:bg-brand-darkred text-white text-xs font-bold rounded-lg shadow-sm transition">
            <i data-lucide="compass" class="w-4 h-4"></i>
            <span>Explorar Catálogo</span>
          </a>
        </div>
      `;
      this.updateCartSummary(0, 0, 0);
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    container.innerHTML = this.state.cart.map(item => `
      <div class="bg-white border border-brand-border rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div class="flex items-center gap-4 w-full sm:w-auto">
          <div class="w-16 h-20 bg-slate-50 rounded-lg border border-slate-200 p-2 flex items-center justify-center flex-shrink-0">
            <img 
              src="${item.imageLocal}" 
              alt="${item.name}" 
              class="max-h-full max-w-full object-contain"
              onerror="this.onerror=null; this.src='${item.imageFallback}'"
            />
          </div>
          <div>
            <div class="inline-block px-2 py-0.5 text-[10px] font-black bg-amber-100 text-amber-900 rounded mb-1">
              ${item.condition}
            </div>
            <h4 class="text-sm font-extrabold text-brand-charcoal">${item.name}</h4>
            <p class="text-xs font-bold text-brand-red mt-0.5">$${item.price.toFixed(2)} USD c/u</p>
          </div>
        </div>

        <div class="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
          <div class="flex items-center border border-slate-300 rounded-lg bg-slate-50">
            <button 
              type="button" 
              onclick="app.updateQuantity('${item.id}', -1)"
              class="w-8 h-8 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-200 rounded-l-lg transition"
              aria-label="Restar una unidad"
            >
              −
            </button>
            <span class="px-3 text-xs font-black text-brand-charcoal">${item.quantity}</span>
            <button 
              type="button" 
              onclick="app.updateQuantity('${item.id}', 1)"
              class="w-8 h-8 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-200 rounded-r-lg transition"
              aria-label="Añadir una unidad"
            >
              +
            </button>
          </div>

          <div class="text-right min-w-[80px]">
            <span class="text-xs text-brand-muted block">Total</span>
            <span class="text-sm font-black text-brand-charcoal">$${(item.price * item.quantity).toFixed(2)}</span>
          </div>

          <button 
            type="button" 
            onclick="app.requestRemoveItem('${item.id}')" 
            class="p-2 text-slate-400 hover:text-brand-red rounded-lg hover:bg-red-50 transition"
            aria-label="Eliminar ${item.name} de la bolsa"
          >
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `).join('');

    const subtotal = this.state.cart.reduce((sum, it) => sum + (it.price * it.quantity), 0);
    const tax = subtotal * APP_CONFIG.TAX_RATE;
    const shipping = this.state.shippingFee;
    this.updateCartSummary(subtotal, tax, shipping);

    if (window.lucide) window.lucide.createIcons();
  },

  updateCartSummary(subtotal, tax, shipping) {
    const sSub = document.getElementById('summary-subtotal');
    const sTax = document.getElementById('summary-tax');
    const sShip = document.getElementById('summary-shipping');
    const sTot = document.getElementById('summary-total');

    if (sSub) sSub.innerText = `$${subtotal.toFixed(2)}`;
    if (sTax) sTax.innerText = `$${tax.toFixed(2)}`;
    if (sShip) sShip.innerText = shipping === 0 ? 'GRATIS' : `$${shipping.toFixed(2)}`;
    if (sTot) sTot.innerText = `$${(subtotal + tax + (subtotal > 0 ? shipping : 0)).toFixed(2)} USD`;
  },

  updateCartBadge() {
    const count = this.state.cart.reduce((acc, it) => acc + it.quantity, 0);
    const badge = document.getElementById('cart-badge');
    if (badge) badge.innerText = count;

    if (window.parent && window.parent.frames && window.parent.frames['menu']) {
      try {
        const topBadge = window.parent.frames['menu'].document.getElementById('cart-badge');
        if (topBadge) topBadge.innerText = count;
      } catch (e) {}
    }
  },

  handleDeliveryChange(method) {
    this.state.deliveryMethod = method;
    const courierContainer = document.getElementById('delivery-courier-container');
    const pickupContainer = document.getElementById('delivery-pickup-container');
    const cashContainer = document.getElementById('payment-cash-container');
    const cashInput = document.getElementById('payment-cash-input');
    const cashTitle = document.getElementById('payment-cash-title');
    const cashDesc = document.getElementById('payment-cash-desc');

    if (method === 'pickup') {
      this.state.shippingFee = APP_CONFIG.PICKUP_SHIPPING_FEE;
      if (courierContainer) courierContainer.className = 'delivery-option p-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 cursor-pointer flex items-start gap-3 transition';
      if (pickupContainer) pickupContainer.className = 'delivery-option p-4 rounded-xl border-2 border-brand-red bg-red-50/40 cursor-pointer flex items-start gap-3 transition';

      if (cashContainer) {
        cashContainer.className = 'payment-option p-3.5 rounded-xl border border-slate-200 bg-white cursor-pointer flex items-center justify-between hover:border-slate-400 transition';
      }
      if (cashInput) cashInput.disabled = false;
      if (cashTitle) cashTitle.className = 'text-sm font-bold text-brand-charcoal';
      if (cashDesc) cashDesc.className = 'text-xs text-brand-muted block';
    } else {
      this.state.shippingFee = APP_CONFIG.COURIER_SHIPPING_FEE;
      if (courierContainer) courierContainer.className = 'delivery-option p-4 rounded-xl border-2 border-brand-red bg-red-50/40 cursor-pointer flex items-start gap-3 transition';
      if (pickupContainer) pickupContainer.className = 'delivery-option p-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 cursor-pointer flex items-start gap-3 transition';

      if (cashInput && cashInput.checked) {
        const cardRadio = document.querySelector('input[name="payment-method"][value="card"]');
        if (cardRadio) cardRadio.checked = true;
      }
      if (cashContainer) {
        cashContainer.className = 'payment-option p-3.5 rounded-xl border border-slate-200 bg-slate-100 opacity-60 cursor-not-allowed flex items-center justify-between';
      }
      if (cashInput) cashInput.disabled = true;
      if (cashTitle) cashTitle.className = 'text-sm font-bold text-slate-500';
      if (cashDesc) cashDesc.className = 'text-xs text-slate-400 block';
    }

    const subtotal = this.state.cart.reduce((sum, it) => sum + (it.price * it.quantity), 0);
    const tax = subtotal * APP_CONFIG.TAX_RATE;
    this.updateCartSummary(subtotal, tax, this.state.shippingFee);
  },

  startPaymentProcessing() {
    if (this.state.cart.length === 0) {
      this.showToast('Tu bolsa está vacía. Añade cartas antes de pagar.', 'error');
      return;
    }

    const nameInput = document.getElementById('guest-name');
    const idInput = document.getElementById('guest-id');
    const emailInput = document.getElementById('guest-email');
    const phoneInput = document.getElementById('guest-phone');

    if (!nameInput || !nameInput.value.trim()) {
      this.showToast('Por favor ingresa tu Nombre Completo.', 'error');
      if (nameInput) nameInput.focus();
      return;
    }
    if (!idInput || !this.validateEcuadorianId(idInput.value.trim())) {
      this.showToast('Cédula o RUC ecuatoriano no válido.', 'error');
      if (idInput) idInput.focus();
      return;
    }
    if (!emailInput || !emailInput.value.includes('@')) {
      this.showToast('Por favor ingresa un correo electrónico válido.', 'error');
      if (emailInput) emailInput.focus();
      return;
    }
    if (!phoneInput || phoneInput.value.trim().length < 9) {
      this.showToast('Por favor ingresa un teléfono celular válido.', 'error');
      if (phoneInput) phoneInput.focus();
      return;
    }

    const selectedPayment = document.querySelector('input[name="payment-method"]:checked');
    const paymentVal = selectedPayment ? selectedPayment.value : 'card';
    const orderId = `PKM-${Math.floor(100000 + Math.random() * 900000)}`;

    if (paymentVal === 'cash') {
      const orderData = this.buildOrderData(orderId, nameInput.value.trim(), emailInput.value.trim(), 'Efectivo en Tienda al Retirar');
      this.saveOrder(orderData);
      this.state.cart = [];
      this.saveCartToStorage();
      this.updateCartBadge();
      window.location.href = 'confirmation.html';
      return;
    }

    const cardNumInput = document.getElementById('card-number');
    const cardNum = (cardNumInput ? cardNumInput.value : '').replace(/\s+/g, '');
    const isSimulatedFailure = cardNum.endsWith('0000');

    const modal = document.getElementById('payment-modal');
    const modalText = document.getElementById('payment-modal-text');
    const progressBar = document.getElementById('payment-progress-bar');

    if (modal) modal.classList.add('active');
    if (progressBar) progressBar.style.width = '30%';
    if (modalText) modalText.innerText = 'Conectando con la pasarela bancaria segura...';

    setTimeout(() => {
      if (progressBar) progressBar.style.width = '70%';
      if (modalText) modalText.innerText = 'Validando protocolo 3D Secure con entidad emisora...';
    }, 1200);

    setTimeout(() => {
      if (progressBar) progressBar.style.width = '100%';
      if (modal) modal.classList.remove('active');

      if (isSimulatedFailure) {
        this.showToast('Transacción rechazada por el emisor bancario.', 'error');
        window.location.href = 'checkout.html#error';
      } else {
        const orderData = this.buildOrderData(orderId, nameInput.value.trim(), emailInput.value.trim(), 'Tarjeta de Crédito / Débito (3D Secure)');
        this.saveOrder(orderData);
        this.state.cart = [];
        this.saveCartToStorage();
        this.updateCartBadge();
        window.location.href = 'confirmation.html';
      }
    }, 2500);
  },

  buildOrderData(orderId, buyerName, buyerEmail, paymentLabel) {
    const subtotal = this.state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * APP_CONFIG.TAX_RATE;
    const shipping = this.state.shippingFee;
    const total = subtotal + tax + shipping;

    const now = new Date();
    const formattedDate = now.toLocaleDateString('es-EC', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    return {
      orderId: orderId,
      date: formattedDate,
      buyerName: buyerName,
      buyerEmail: buyerEmail,
      paymentMethod: paymentLabel,
      deliveryMethod: this.state.deliveryMethod === 'pickup' ? 'Retiro en Local Central Quito' : 'Envío Blindado a Domicilio',
      items: [...this.state.cart],
      subtotal: subtotal,
      tax: tax,
      shipping: shipping,
      total: total,
      statusStage: 2
    };
  },

  saveOrder(orderData) {
    try {
      localStorage.setItem('gstcg_last_order', JSON.stringify(orderData));
    } catch (e) {}
  },

  renderConfirmation() {
    const container = document.getElementById('confirm-breakdown-container');
    const orderIdEl = document.getElementById('confirm-order-id');
    const emailEl = document.getElementById('confirm-email-recipient');
    const cashNotice = document.getElementById('confirm-cash-notice');
    if (!container && !orderIdEl) return;

    try {
      const saved = localStorage.getItem('gstcg_last_order');
      if (!saved) return;
      const order = JSON.parse(saved);

      if (orderIdEl) orderIdEl.innerText = `Número de Orden: #${order.orderId}`;
      if (emailEl) emailEl.innerText = order.buyerEmail;

      if (cashNotice) {
        if (order.paymentMethod.includes('Efectivo')) {
          cashNotice.classList.remove('hidden');
        } else {
          cashNotice.classList.add('hidden');
        }
      }

      if (container) {
        container.innerHTML = `
          <div class="border-b border-slate-200 pb-3">
            <h3 class="font-extrabold text-brand-charcoal">Resumen de Compra Certificada</h3>
            <p class="text-xs text-brand-muted mt-0.5">Método de pago: ${order.paymentMethod} • ${order.deliveryMethod}</p>
          </div>
          <div class="space-y-2 py-2">
            ${order.items.map(it => `
              <div class="flex justify-between items-center text-xs">
                <span>${it.quantity}x ${it.name} (${it.condition})</span>
                <span class="font-bold text-brand-charcoal">$${(it.price * it.quantity).toFixed(2)}</span>
              </div>
            `).join('')}
          </div>
          <div class="border-t border-slate-200 pt-3 space-y-1 text-xs">
            <div class="flex justify-between text-brand-muted">
              <span>Subtotal:</span>
              <span class="font-bold text-brand-charcoal">$${order.subtotal.toFixed(2)}</span>
            </div>
            <div class="flex justify-between text-brand-muted">
              <span>Envío:</span>
              <span class="font-bold text-brand-charcoal">${order.shipping === 0 ? 'GRATIS' : `$${order.shipping.toFixed(2)}`}</span>
            </div>
            <div class="flex justify-between text-brand-muted">
              <span>IVA (15%):</span>
              <span class="font-bold text-brand-charcoal">$${order.tax.toFixed(2)}</span>
            </div>
            <div class="flex justify-between text-base font-extrabold text-brand-charcoal pt-2 border-t border-slate-200">
              <span>Total Pagado:</span>
              <span class="text-brand-red">$${order.total.toFixed(2)} USD</span>
            </div>
          </div>
        `;
      }
    } catch (e) {}
  },

  renderDynamicTracking() {
    const emptyBox = document.getElementById('tracking-empty-state');
    const activeBox = document.getElementById('tracking-active-order-box');
    const orderIdEl = document.getElementById('tracking-order-id');
    const orderDateEl = document.getElementById('tracking-order-date');
    const itemsCont = document.getElementById('tracking-items-container');
    if (!emptyBox && !activeBox) return;

    try {
      const saved = localStorage.getItem('gstcg_last_order');
      if (!saved) {
        if (emptyBox) emptyBox.classList.remove('hidden');
        if (activeBox) activeBox.classList.add('hidden');
        return;
      }

      const order = JSON.parse(saved);
      if (emptyBox) emptyBox.classList.add('hidden');
      if (activeBox) activeBox.classList.remove('hidden');

      if (orderIdEl) orderIdEl.innerText = `ORDEN #${order.orderId}`;
      if (orderDateEl) orderDateEl.innerText = `Fecha de compra: ${order.date} • ${order.deliveryMethod}`;

      if (itemsCont) {
        itemsCont.innerHTML = order.items.map(it => `
          <div class="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50">
            <div class="flex items-center gap-3">
              <div class="w-12 h-14 bg-white rounded border border-slate-200 p-1 flex items-center justify-center">
                <img src="${it.imageLocal}" alt="${it.name}" class="max-h-full max-w-full object-contain" onerror="this.onerror=null; this.src='${it.imageFallback}'" />
              </div>
              <div>
                <span class="text-[10px] font-bold text-brand-muted uppercase">${it.condition}</span>
                <h4 class="text-xs sm:text-sm font-bold text-brand-charcoal">${it.name}</h4>
                <span class="text-xs text-brand-muted">Cantidad: ${it.quantity}</span>
              </div>
            </div>
            <span class="text-xs sm:text-sm font-black text-brand-charcoal">$${(it.price * it.quantity).toFixed(2)}</span>
          </div>
        `).join('');
      }
    } catch (e) {
      if (emptyBox) emptyBox.classList.remove('hidden');
      if (activeBox) activeBox.classList.add('hidden');
    }
  },

  switchAuthTab(tab) {
    const btnLogin = document.getElementById('auth-tab-login');
    const btnReg = document.getElementById('auth-tab-register');
    const secLogin = document.getElementById('auth-section-login');
    const secReg = document.getElementById('auth-section-register');

    if (tab === 'login') {
      if (btnLogin) btnLogin.className = 'flex-1 py-2.5 text-xs font-bold border-b-2 border-brand-red text-brand-charcoal';
      if (btnReg) btnReg.className = 'flex-1 py-2.5 text-xs font-bold border-b-2 border-transparent text-brand-muted hover:text-brand-charcoal';
      if (secLogin) secLogin.classList.remove('hidden');
      if (secReg) secReg.classList.add('hidden');
    } else {
      if (btnReg) btnReg.className = 'flex-1 py-2.5 text-xs font-bold border-b-2 border-brand-red text-brand-charcoal';
      if (btnLogin) btnLogin.className = 'flex-1 py-2.5 text-xs font-bold border-b-2 border-transparent text-brand-muted hover:text-brand-charcoal';
      if (secReg) secReg.classList.remove('hidden');
      if (secLogin) secLogin.classList.add('hidden');
    }
  },

  handleLogin(email, password) {
    if (!email || !password) {
      this.showToast('Por favor completa las credenciales.', 'error');
      return;
    }
    const userObj = {
      nombre: email.split('@')[0],
      email: email,
      cedula: '1710000000',
      telefono: '0991234567'
    };
    try {
      localStorage.setItem('gstcg_user', JSON.stringify(userObj));
    } catch (e) {}
    this.state.currentUser = userObj;
    this.updateNavUserDisplay();
    this.showToast(`Bienvenido a tu bóveda, ${userObj.nombre}`, 'success');

    if (window.parent && window.parent.frames && window.parent.frames['menu']) {
      try {
        window.parent.frames['menu'].syncNavState();
      } catch (e) {}
    }
    window.location.href = 'home.html';
  },

  handleRegister(name, id, email, password) {
    if (!name || !id || !email || !password) {
      this.showToast('Por favor completa todos los campos del registro.', 'error');
      return;
    }
    if (!this.validateEcuadorianId(id)) {
      this.showToast('Cédula o RUC ecuatoriano no válido.', 'error');
      return;
    }
    const newUser = {
      nombre: name,
      cedula: id,
      email: email,
      telefono: '0991234567'
    };
    try {
      localStorage.setItem('gstcg_user', JSON.stringify(newUser));
    } catch (e) {}
    this.state.currentUser = newUser;
    this.updateNavUserDisplay();
    this.showToast(`Cuenta creada exitosamente. ¡Bienvenido, ${name}!`, 'success');

    if (window.parent && window.parent.frames && window.parent.frames['menu']) {
      try {
        window.parent.frames['menu'].syncNavState();
      } catch (e) {}
    }
    window.location.href = 'home.html';
  },

  logoutUser() {
    this.state.currentUser = null;
    try {
      localStorage.removeItem('gstcg_user');
    } catch (e) {}
    this.updateNavUserDisplay();
    this.showToast('Sesión cerrada correctamente.', 'info');
    if (window.parent && window.parent.frames && window.parent.frames['menu']) {
      try {
        window.parent.frames['menu'].syncNavState();
      } catch (e) {}
    }
    window.location.href = 'home.html';
  },

  validateEcuadorianId(id) {
    id = (id || '').trim();
    if (id.length === 13 && id.endsWith('001')) {
      id = id.substring(0, 10);
    }
    if (!/^\d{10}$/.test(id)) return false;

    const province = parseInt(id.substring(0, 2), 10);
    if ((province < 1 || province > 24) && province !== 30) return false;

    const thirdDigit = parseInt(id.charAt(2), 10);
    if (thirdDigit >= 6) return false;

    const coefficients = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    const verifier = parseInt(id.charAt(9), 10);
    let sum = 0;

    for (let i = 0; i < 9; i++) {
      let val = parseInt(id.charAt(i), 10) * coefficients[i];
      if (val >= 10) val -= 9;
      sum += val;
    }

    const mod = sum % 10;
    const computedVerifier = mod === 0 ? 0 : 10 - mod;
    return computedVerifier === verifier;
  },

  setupIdValidation() {
    const idInput = document.getElementById('guest-id');
    const err = document.getElementById('guest-id-error');
    if (!idInput) return;

    idInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
      if (e.target.value.length === 10) {
        const valid = this.validateEcuadorianId(e.target.value);
        if (err) {
          if (valid) {
            err.classList.add('hidden');
            idInput.classList.remove('border-red-500');
            idInput.classList.add('border-emerald-500');
          } else {
            err.classList.remove('hidden');
            idInput.classList.add('border-red-500');
            idInput.classList.remove('border-emerald-500');
          }
        }
      } else {
        if (err) err.classList.add('hidden');
        idInput.classList.remove('border-red-500', 'border-emerald-500');
      }
    });
  },

  setupPhoneInput() {
    const phone = document.getElementById('guest-phone');
    if (!phone) return;
    phone.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.startsWith('0')) val = val.substring(1);
      e.target.value = val.slice(0, 9);
    });
  },

  setupSearchSpotlight() {
    const input = document.getElementById('global-search');
    const dropdown = document.getElementById('search-live-dropdown');
    if (!input || !dropdown) return;

    input.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        dropdown.classList.add('hidden');
        return;
      }
      const matches = PRODUCTS.filter(p => 
        p.nombre.toLowerCase().includes(q) || 
        p.set.toLowerCase().includes(q)
      ).slice(0, 4);

      if (matches.length === 0) {
        dropdown.innerHTML = '<div class="p-4 text-xs text-brand-muted text-center">No se encontraron piezas.</div>';
      } else {
        dropdown.innerHTML = matches.map(m => `
          <div 
            onclick="app.openProductPDP('${m.id}')"
            class="p-3 hover:bg-slate-50 cursor-pointer flex items-center justify-between border-b last:border-0"
          >
            <div class="flex items-center gap-3">
              <img src="${m.imagenLocal}" class="w-8 h-10 object-contain" onerror="this.src='${m.imagenFallbackUrl}'" />
              <div>
                <p class="text-xs font-bold text-brand-charcoal">${m.nombre}</p>
                <p class="text-[10px] text-brand-muted">${m.set}</p>
              </div>
            </div>
            <span class="text-xs font-black text-brand-charcoal">$${m.precios.psa10.toFixed(2)}</span>
          </div>
        `).join('');
      }
      dropdown.classList.remove('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });
  },

  setupPDPChartInteractions() {
    const chart = document.getElementById('pdp-interactive-chart');
    const tooltip = document.getElementById('chart-hover-tooltip');
    const guideLine = document.getElementById('chart-guide-line');
    const hoverDot = document.getElementById('chart-hover-dot');
    if (!chart || !tooltip) return;

    const dataPoints = [
      { x: 30, y: 85, month: 'Oct 2025', price: 15200 },
      { x: 110, y: 75, month: 'Dic 2025', price: 16100 },
      { x: 190, y: 80, month: 'Feb 2026', price: 15800 },
      { x: 270, y: 50, month: 'May 2026', price: 17300 },
      { x: 370, y: 25, month: 'Hoy (Oct 2026)', price: 18500 }
    ];

    chart.addEventListener('mousemove', (e) => {
      const rect = chart.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const svgX = (clientX / rect.width) * 400;

      let closest = dataPoints[0];
      let minDiff = Infinity;
      dataPoints.forEach(pt => {
        const diff = Math.abs(pt.x - svgX);
        if (diff < minDiff) {
          minDiff = diff;
          closest = pt;
        }
      });

      if (guideLine) {
        guideLine.setAttribute('x1', closest.x);
        guideLine.setAttribute('x2', closest.x);
        guideLine.style.display = 'block';
      }
      if (hoverDot) {
        hoverDot.setAttribute('cx', closest.x);
        hoverDot.setAttribute('cy', closest.y);
        hoverDot.style.display = 'block';
      }

      const pixelX = (closest.x / 400) * rect.width;
      const pixelY = (closest.y / 130) * rect.height;

      tooltip.innerHTML = `
        <div class="bg-brand-charcoal text-white text-[11px] py-1 px-2.5 rounded-lg shadow-xl border border-slate-700 whitespace-nowrap">
          <div class="font-extrabold text-amber-400">$${closest.price.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD</div>
          <div class="text-[10px] text-slate-300">${closest.month}</div>
        </div>
      `;
      tooltip.style.left = `${pixelX}px`;
      tooltip.style.top = `${pixelY - 10}px`;
      tooltip.style.opacity = '1';
    });

    chart.addEventListener('mouseleave', () => {
      if (guideLine) guideLine.style.display = 'none';
      if (hoverDot) hoverDot.style.display = 'none';
      tooltip.style.opacity = '0';
    });
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const colors = {
      success: 'bg-emerald-600 text-white',
      error: 'bg-brand-red text-white',
      info: 'bg-brand-charcoal text-white'
    };
    const toast = document.createElement('div');
    toast.className = `${colors[type] || colors.info} px-4 py-3 rounded-xl shadow-xl text-xs font-bold flex items-center justify-between gap-3 pointer-events-auto transition-all transform translate-y-2`;
    toast.innerHTML = `
      <span>${message}</span>
      <button type="button" onclick="this.parentElement.remove()" class="text-white/80 hover:text-white">&times;</button>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('translate-y-2');
    }, 10);
    setTimeout(() => {
      toast.remove();
    }, 4000);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
