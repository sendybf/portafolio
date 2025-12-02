document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navList.classList.toggle('active');
    });
  }

  // Close menu when clicking a link (mobile)
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navList.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Dynamic Year in Footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Contact Form Simulation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic validation
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;
      
      let isValid = true;
      
      // Reset errors
      document.querySelectorAll('.form__error').forEach(el => el.textContent = '');
      
      if (!nombre.trim()) {
        document.getElementById('error-nombre').textContent = 'Por favor, ingresa tu nombre.';
        isValid = false;
      }
      
      if (!email.trim() || !email.includes('@')) {
        document.getElementById('error-email').textContent = 'Por favor, ingresa un correo válido.';
        isValid = false;
      }
      
      if (!mensaje.trim()) {
        document.getElementById('error-mensaje').textContent = 'Por favor, escribe un mensaje.';
        isValid = false;
      }
      
      if (isValid) {
        // Simulate sending
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        
        setTimeout(() => {
          alert(`¡Gracias, ${nombre}! Tu mensaje ha sido "enviado" correctamente.\n(Esto es una simulación)`);
          contactForm.reset();
          btn.textContent = originalText;
          btn.disabled = false;
        }, 1500);
      }
    });
  }
});
