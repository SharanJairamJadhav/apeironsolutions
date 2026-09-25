document.addEventListener('DOMContentLoaded', () => {
  // Reduced motion check
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Intersection Observer for scroll reveals
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Elements to animate
  const fadeElements = document.querySelectorAll('.fade-up');
  const imageElements = document.querySelectorAll('.reveal-image');

  fadeElements.forEach(el => revealObserver.observe(el));
  imageElements.forEach(el => revealObserver.observe(el));
});