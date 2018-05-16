if(Cookies.getJSON('sesion') == null) {
  window.location.replace("../../index.html");
} else {
  html = `<ul class="navbar-nav mr-auto">`;
  html += `<li class="nav-item">`;
  html += `<a class="nav-link" id="nombre_usuario" href="../../panel-admin.html">${Cookies.getJSON('sesion').username.toUpperCase()}</a>`;
  html += `</li>`;
  html += `<li class="nav-item">`;
  html += `<a class="nav-link" id="cerrar-sesion" href="#">Cerrar Sesión</a>`;
  html += `</li>`;
  html += `</ul>`;
  $('#sesion').append(html);
}

$('nav').on('click', '#cerrar-sesion', function() {
  Cookies.remove('sesion');
  location.reload();
});
