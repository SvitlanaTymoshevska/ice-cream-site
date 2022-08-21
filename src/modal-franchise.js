(() => {
  const mapBtnOpen = document.querySelector('[data-modal-open-fr');
  const mapBtnClose = document.querySelector('[data-modal-close-fr]');
  const map = document.querySelector('[data-modal-fr]');
  const htmlmaplock = document.querySelector('body');

  const toggleMenu = () => {
    map.classList.toggle('fr-is-hidden');
    htmlmaplock.classList.toggle('overflow-hidden');
  };
  mapBtnOpen.addEventListener('click', toggleMenu);
  mapBtnClose.addEventListener('click', toggleMenu);
})();
