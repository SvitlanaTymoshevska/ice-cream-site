(() => {
  const mapBtnOpen = document.querySelector('[data-modal-open-map');
  const mapBtnClose = document.querySelector('[data-modal-close-map]');
  const map = document.querySelector('[data-modal-map]');
  const htmlmaplock = document.querySelector('body');

  const toggleMenu = () => {
    map.classList.toggle('map-is-hidden');
    htmlmaplock.classList.toggle('overflow-hidden');
  };
  mapBtnOpen.addEventListener('click', toggleMenu);
  mapBtnClose.addEventListener('click', toggleMenu);
})();
