(() => {
  const cardBtn = document.querySelector('[data-card-btn');
  const card = document.querySelector('[data-card]');

  const toggleMenu = () => {
    card.classList.toggle('text-is-open');
  };
  cardBtn.addEventListener('click', toggleMenu);
})();

(() => {
  const cardBtn2 = document.querySelector('[data-card-btn-2');
  const card2 = document.querySelector('[data-card-2]');

  const toggleMenu = () => {
    card2.classList.toggle('text-is-open');
  };
  cardBtn2.addEventListener('click', toggleMenu);
})();

(() => {
  const cardBtn3 = document.querySelector('[data-card-btn-3');
  const card3 = document.querySelector('[data-card-3]');

  const toggleMenu = () => {
    card3.classList.toggle('text-is-open');
  };
  cardBtn3.addEventListener('click', toggleMenu);
})();
