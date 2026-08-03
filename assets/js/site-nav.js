/* ============================================================
   JohanFilms — Menú móvil + animación de aparición al hacer scroll
   Archivo compartido por todas las páginas del sitio.

   Es seguro incluir este script en cualquier página aunque le
   falten elementos (#menuToggle, #navLinks o .reveal): cada parte
   se activa solo si encuentra lo que necesita, sin lanzar errores.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Menú móvil --- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    const toggleMenu = () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    };

    menuToggle.addEventListener('click', toggleMenu);
    menuToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });
  }

  /* --- Animación de aparición al hacer scroll --- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 90) el.classList.add('active');
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
  }

});
