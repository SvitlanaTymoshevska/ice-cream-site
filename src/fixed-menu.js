let navbar = document.getElementById('header').classList;
let active_class = 'header__scrolled';

window.addEventListener('scroll', e => {
  if (scrollY > 400) navbar.add(active_class);
  else navbar.remove(active_class);
});

// для кнонки наверх
let toplink = document.getElementById('top').classList;
let top_class = 'top__scrolled';

window.addEventListener('scroll', e => {
  if (scrollY > 1500) toplink.add(top_class);
  else toplink.remove(top_class);
});
