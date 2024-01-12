function toggleTheme() {

  var body = document.body;


  body.classList.toggle('dark-theme');


  var isDarkTheme = body.classList.contains('dark-theme');
  localStorage.setItem('darkTheme', isDarkTheme);
}


window.addEventListener('DOMContentLoaded', function () {
  var isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  if (isDarkTheme) {
    document.body.classList.add('dark-theme');
  }
});
