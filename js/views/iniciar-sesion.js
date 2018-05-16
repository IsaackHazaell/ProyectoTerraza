if(Cookies.getJSON('sesion') != null) window.location.replace("./index.html");

$('document').ready(function() {

  $('#submit').on('click', function() {
    $('.error').remove();
    var status = 0;

    status += validar($('#username'));
    status += validar($('#password'));

    if(status > 0) return 0;

    $.get('https://donleonapi.herokuapp.com/user/'+$('#username').val()+"/"+md5($('#password').val()), function(data) {
      if(data.length === 0) {
        alertify.error('Los datos no son correctos');
      } else {
        Cookies.set('sesion', {username: $('#username').val(), password: md5($('#password').val())});
        location.reload();
      }
    });
  });


});
