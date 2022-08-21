(() => {
  const grBtnOpen = document.querySelector('[data-modal-open-gr');
  const grBtnClose = document.querySelector('[data-modal-close-gr]');
  const gr2BtnClose = document.querySelector('[data-modal-close-gr-2]');
  const gr = document.querySelector('[data-gr]');
  const htmlmaplock = document.querySelector('body');

  const toggleMenu = () => {
    gr.classList.toggle('gr-is-hidden');
    htmlmaplock.classList.toggle('overflow-hidden');
  };
  grBtnOpen.addEventListener('click', toggleMenu);
  grBtnClose.addEventListener('click', toggleMenu);
  gr2BtnClose.addEventListener('click', toggleMenu);
})();

// на одну кнопку
// (() => {
//   const cardBtn = document.querySelector('[data-gr-btn');
//   const card = document.querySelector('[data-gr]');

//   const toggleMenu = () => {
//     card.classList.toggle('gr-is-hidden');
//   };
//   cardBtn.addEventListener('click', toggleMenu);

//   window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     card.classList.add('gr-is-hidden');
//   });
// })();
