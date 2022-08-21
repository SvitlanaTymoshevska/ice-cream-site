(() => {
  const menuBtnOpen = document.querySelector('[data-menu-button-open]');
  const menuBtnClose = document.querySelector('[data-menu-button-close]');
  const mobileMenu = document.querySelector('[data-menu]');
  const htmlLock = document.querySelector('body');
  const mobileMenuLink = document.querySelector('[data-menu-link]');

  const toggleMenu = () => {
    const isMenuOpen =
      menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;
    menuBtnOpen.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    htmlLock.classList.toggle('overflow-hidden');
  };
  menuBtnOpen.addEventListener('click', toggleMenu);
  menuBtnClose.addEventListener('click', toggleMenu);
  mobileMenuLink.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    menuBtnOpen.setAttribute('aria-expanded', false);
    htmlLock.classList.remove('overflow-hidden');
  });
})();
