document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-menu');
  const header = document.getElementById('header');

  // Menu Toggle
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('is-active');
      document.body.classList.toggle('menu-open');

      // Body scroll lock
      if (!isExpanded) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-active')) {
        toggle.click();
      }
    });
  }

  // Sticky Header State
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});