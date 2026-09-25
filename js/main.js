document.addEventListener('DOMContentLoaded', () => {
  // Form Validation (Client-Side)
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = 'red';
        } else {
          field.style.borderColor = 'var(--border)';
        }
      });

      if (isValid) {
        // Demo success state - connect to real endpoint here
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Message Sent ✓';
        btn.style.backgroundColor = 'var(--accent)';
        form.reset();

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.backgroundColor = '';
        }, 3000);
      }
    });
  });

  // Project Filtering Logic (For work.html)
  const filterBtns = document.querySelectorAll('[data-filter]');
  const projectItems = document.querySelectorAll('.project-item');

  if (filterBtns.length > 0 && projectItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            setTimeout(() => item.style.opacity = '1', 50);
          } else {
            item.style.opacity = '0';
            setTimeout(() => item.style.display = 'none', 300);
          }
        });
      });
    });
  }
});