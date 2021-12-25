function toggleDarkMode() {
  var html = document.getElementsByTagName("html")[0];
  if (html.getAttribute("dark") == null) {
    html.setAttribute("dark", "true")
  } else {
    html.removeAttribute("dark")
  }

  var endDate = new Date();
  endDate.setFullYear(endDate.getFullYear());

  document.cookie = 'theme=' + (html.getAttribute("dark") == null ? 'light' : 'dark') +
    '; Expires=' + endDate + '; SameSite=Lax; path=/'
}

function isDarkThemeSelected() {
  return document.cookie.match(/theme=dark/i) != null
}

function setThemeFromCookie() {
  var html = document.getElementsByTagName("html")[0];
  var theme = isDarkThemeSelected() ? 'dark-mode' : 'light-mode'
  html.removeAttribute("dark")
  if (theme == 'dark-mode') {
    html.setAttribute("dark", "true")
  }
}

(function () {
  setThemeFromCookie()
})();
