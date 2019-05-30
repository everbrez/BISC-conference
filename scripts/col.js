window.addEventListener('load', function() {
  // nav-phone ver
  const navOpen = document.getElementById('nav-open');
  const navClose = document.getElementById('nav-close');
  const menu = document.getElementById('menu');
  navOpen.addEventListener('click', function() {
    menu.classList.add('show');
  }, false);
  navClose.addEventListener('click', function() {
    menu.classList.remove('show');
  }, false);
  document.addEventListener('click', function(e) {
    if (!menu.contains(e.target)) {
      menu.classList.remove('show');
    }
  }, false);

}, false)
