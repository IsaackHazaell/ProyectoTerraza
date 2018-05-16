$('document').ready(function() {

  $('#submit').on('click', function() {
    $('.error').remove();
    var status = 0;

    status += validar($('#username'));
    status += validar($('#password'));
    status += validar($('#name'));
    status += validar($('#last_name'));
    status += validar($('#email'));
    status += validar($('#phone'));

    if(status > 0) return 0;

    var usuario = {
      username: $('#username').val().toLowerCase(),
      password: md5($('#password').val()),
      name: $('#name').val(),
      last_name: $('#last_name').val(),
      email: $('#email').val().toLowerCase(),
      phone: $('#phone').val()
    }

    console.log(usuario);

    $.get('https://donleonapi.herokuapp.com/user/'+usuario.username, function(data) {
      console.log(data);
      if(data.length === 0) {
        $.post('https://donleonapi.herokuapp.com/user', usuario, function(result){
          alertify.alert("Don Leon","Se creo el administrador!!", function(){
            window.location.replace('index.html')
          });
        });
      } else {
        alertify.alert("Don Leon","El nombre de usuario ["+usuario.username+"] ya existe", function(){
          alertify.error('No se creo el usuario!');
        });
      }
    });



  });

});
