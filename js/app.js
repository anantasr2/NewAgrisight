/**
 * AGRISIGHT — Main Application Orchestrator
 */

const AgrisightApp = (function () {
  function init() {
    console.log('Initializing AGRISIGHT Spatial Analysis Application...');

    // Initialize Modules
    AgrisightFilters.init();
    AgrisightSidebar.init();
    AgrisightComparison.init();
    if (window.AgrisightAnalysisModal) {
      AgrisightAnalysisModal.init();
    }
    if (window.AgrisightDashboardModal) {
      AgrisightDashboardModal.init();
    }
    if (window.AgrisightPredictionModal) {
      AgrisightPredictionModal.init();
    }
    if (window.AgrisightWhatIfModal) {
      AgrisightWhatIfModal.init();
    }
    AgrisightMap.init();

    // Setup Navigation Tabs & Modals
    setupNavigation();
    setupMobileMenu();

    // Check if initial hash or query params exist
    checkUrlParams();

    showToast('Peta Ketahanan Pangan 514 Kabupaten/Kota berhasil dimuat.', 'success');
  }

  function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuBtn && mobileNavMenu) {
      mobileMenuBtn.addEventListener('click', function () {
        const isClosed = mobileNavMenu.classList.contains('hidden');
        if (isClosed) {
          mobileNavMenu.classList.remove('hidden');
          if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
          if (closeIcon) closeIcon.classList.remove('hidden');
        } else {
          mobileNavMenu.classList.add('hidden');
          if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
          if (closeIcon) closeIcon.classList.add('hidden');
        }
      });
    }
  }

  function setupNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
      tab.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Allow regular page link transitions
        if (href && (href.includes('index.html') || href.includes('prediction.html') || href.includes('spatial.html'))) {
          return;
        }

        const feature = this.getAttribute('data-nav');
        if (!feature || feature === 'spatial') return;

        e.preventDefault();
        if (feature === 'dashboard' && window.AgrisightDashboardModal) {
          AgrisightDashboardModal.open();
        } else if (feature === 'regional' && window.AgrisightAnalysisModal) {
          const selected = (AgrisightSidebar && AgrisightSidebar.getCurrentRegency()) || (typeof KABUPATEN_DATA !== 'undefined' ? KABUPATEN_DATA[0] : null);
          AgrisightAnalysisModal.open(selected);
        } else if (feature === 'whatif' && window.AgrisightWhatIfModal) {
          const selected = (AgrisightSidebar && AgrisightSidebar.getCurrentRegency()) || (typeof KABUPATEN_DATA !== 'undefined' ? KABUPATEN_DATA[0] : null);
          AgrisightWhatIfModal.open(selected);
        }
      });
    });
  }

  function checkUrlParams() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#kab=')) {
      const kabId = hash.replace('#kab=', '').trim();
      setTimeout(() => {
        AgrisightMap.selectKabupatenById(kabId, true);
      }, 500);
    }
  }

  function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  return {
    init,
    showToast
  };
})();

// Bootstrap when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  AgrisightApp.init();
});
