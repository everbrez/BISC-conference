window.addEventListener('load', function() {
  // sidebar affix
  const sidebar = document.getElementsByClassName('sidebar')[0];
  if (sidebar) {
    const offsetTop = sidebar.offsetTop;
    const padding = 40;
    affix(sidebar, offsetTop, padding);
    document.addEventListener('scroll', affix.bind(this, sidebar, offsetTop, padding), false);
    document.addEventListener('resize', affix.bind(this, sidebar, offsetTop, padding), false);
  }

  function affix(sidebar, offsetTop, padding) {
    if (offsetTop - padding <= pageYOffset) {
      sidebar.style.position = 'fixed';
      sidebar.style.top = padding + 'px';
    } else {
      sidebar.style.position = 'static';
    }
  }

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