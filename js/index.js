// Dropdowns
document.addEventListener('click', (e) => {
  // Verificar si el elemento clicado es un botón de dropdown
  const isDropdownButton = e.target.matches('[data-dropdown-button]');
  if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

  // Almacenar el dropdown actualmente activo
  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
  }

  // Ocultar los dropdowns activos excepto el dropdown actual que se encuentre activo
  document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  });
});

// Mobile menu
const mobileNav = document.querySelector('.mobile-nav'); // Seleccionar el menú móvil
const navToggle = document.querySelector('.mobile-menu-toggle'); // Seleccionar el botón de alternancia del menú móvil
const navOverlay = document.querySelector('.overlay'); // Seleccionar la capa superpuesta

navToggle.addEventListener('click', () => {
  // Para alternar la visibilidad del menú móvil y ajustar los atributos correspondientes
  const visibility = mobileNav.getAttribute('data-visible');
  if (visibility === 'false') {
    mobileNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    navOverlay.style.opacity = '1';
  } else {
    mobileNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navOverlay.style.opacity = '0';
  }
});
