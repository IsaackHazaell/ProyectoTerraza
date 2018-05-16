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
      username: $('#username').val(),
      password: md5($('#password').val()),
      name: $('#name').val(),
      last_name: $('#last_name').val(),
      email: $('#email').val(),
      phone: $('#phone').val()
    }


    $.post('https://donleonapi.herokuapp.com/user', usuario, function(result){
        console.log(result);
    });

  });

});
