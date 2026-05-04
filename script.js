// RoofGuard — minimal interactivity
// Sticky header state + footer year

(function () {
  const header = document.getElementById('siteHeader');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (header) {
    const onScroll = () => {
      if (window.scrollY > 24) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
