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

  const uploadDefault = document.getElementById('upload-btn-default');
  const upload = document.getElementById('upload-btn')
  if (upload) {
    upload.addEventListener('click', function() {
      if (uploadDefault) {
        uploadDefault.click();
      }
    }, false);

    const output = document.getElementById('upload-output');
    uploadDefault.addEventListener('change', function(e) {
      const files = e.target.files;
      let outputName = '';
      
      for(let i = 0; i < files.length; i += 1) {
        outputName += files[i].name
      }
      output.innerText = outputName;
    }, false);
  }
}, false)