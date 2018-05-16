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

    var objeto = {
      username: $('#username').val(),
      password: md5($('#password').val()),
      name: $('#name').val(),
      last_name: $('#last_name').val(),
      email: $('#email').val(),
      phone: $('#phone').val()
    }

    console.log(objeto);

    $.ajax({
      type: 'POST',
      url: 'https://donleonapi.herokuapp.com/user',
      crossDomain: true,
      data: objeto,
      dataType: 'json',
      success: function(responseData, textStatus, jqXHR) {
          //var value = responseData.someKey;
          console.log(responseData);
      },
      error: function (responseData, textStatus, errorThrown) {
          alert('POST failed.');
      }
    });


    /*
    $.post("https://donleonapi.herokuapp.com/user", objeto)
    .done(function( data ) {
      console.log(data);
    });
    */
    /*$.ajax({
      url: `https://donleonapi.herokuapp.com/user`,
      data: objeto,
      crossDomain: true,
      method: `POST`}
    ).done(function(data) {
      alertify.success('Se creo el usuario!');
    });*/

  });

});
