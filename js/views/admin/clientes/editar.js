$('document').ready(function() {

  var currentPass = '';

  $.get('https://donleonapi.herokuapp.com/client/'+$.urlParam('id'), function(data) {
    console.log(data);
    $('#email').val(data[0].email);
    $('#name').val(data[0].name);
    $('#last_name').val(data[0].last_name);
    $('#phone').val(data[0].phone);
    $('#score').val(data[0].score);
    $('#comment').val(data[0].comment);
  });

  $('#submit').on('click', function() {
    $('.error').remove();
    var status = 0;

    status += validar($('#email'));
    status += validar($('#name'));
    status += validar($('#last_name'));
    status += validar($('#phone'));
    status += validar($('#score'));
    status += validar($('#comment'));

    if(status > 0) return 0;

    var cliente = {
      id: $.urlParam('id'),
      email: $('#email').val(),
      name: $('#name').val(),
      last_name: $('#last_name').val(),
      phone: $('#phone').val(),
      score: $('#score').val(),
      comment: $('#comment').val()
    }

    console.log(cliente);

    $.ajax({url: 'https://donleonapi.herokuapp.com/client', method: 'put', data: cliente})
    .always(function() {
      alertify.alert("Don Leon","Se edito el cliente!!", function(){
        window.location.replace('index.html')
      });
    });

  });

});
