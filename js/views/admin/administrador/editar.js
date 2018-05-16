$('document').ready(function() {

  var currentPass = '';

  $.get('https://donleonapi.herokuapp.com/user/id/'+$.urlParam('id'), function(data) {
    console.log(data);
    $('#username').val(data[0].username);
    $('#password').val('--------');
    currentPass = data[0].password;
    $('#name').val(data[0].name);
    $('#last_name').val(data[0].last_name);
    $('#email').val(data[0].email);
    $('#phone').val(data[0].phone);
  });

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

    if($('#password').val() !== '--------')
      currentPass = md5(currentPass);

    var usuario = {
      id: $.urlParam('id'),
      username: $('#username').val().toLowerCase(),
      password: currentPass,
      name: $('#name').val(),
      last_name: $('#last_name').val(),
      email: $('#email').val().toLowerCase(),
      phone: $('#phone').val()
    }

    console.log(usuario);

    $.ajax({url: 'https://donleonapi.herokuapp.com/user', method: 'put', data: usuario})
    .always(function() {
      alertify.alert("Don Leon","Se edito el administrador!!", function(){
        window.location.replace('index.html')
      });
    });

  });

});
