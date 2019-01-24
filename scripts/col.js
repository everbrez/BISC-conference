window.addEventListener('load', function() {
  const sidebar = document.getElementsByClassName('sidebar')[0];
  const offsetTop = sidebar.offsetTop
  const padding = 40
  if (sidebar) {
    affix();
    document.addEventListener('scroll', affix, false);
    document.addEventListener('resize', affix, false);
  }

  function affix() {
    if (offsetTop - padding <= pageYOffset) {
      sidebar.style.position = 'fixed';
      sidebar.style.top = padding + 'px';
    } else {
      sidebar.style.position = 'static';
    }
  }
}, false)