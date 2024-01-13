window.addEventListener('DOMContentLoaded', function () {

  var isFirstLoad = sessionStorage.getItem('firstLoad') === null;


  if (isFirstLoad) {
    var isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    }
  }


  sessionStorage.setItem('firstLoad', 'false');
});

function toggleTheme() {
  var body = document.body;
  body.classList.toggle('dark-theme');
  var isDarkTheme = body.classList.contains('dark-theme');
  localStorage.setItem('darkTheme', isDarkTheme);
}