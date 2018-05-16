$('document').ready(function() {

  var currentPass = '';

  $.get('https://donleonapi.herokuapp.com/provider/'+$.urlParam('id'), function(data) {
    console.log(data);
    $('#name').val(data[0].name);
    $('#last_name').val(data[0].last_name);
    $('#ocupation').val(data[0].ocupation);
    $('#email').val(data[0].email);
    $('#phone').val(data[0].phone);
    $('#comment').val(data[0].comment);
  });

  $('#submit').on('click', function() {
    $('.error').remove();
    var status = 0;

    status += validar($('#name'));
    status += validar($('#last_name'));
    status += validar($('#ocupation'));
    status += validar($('#email'));
    status += validar($('#phone'));
    status += validar($('#comment'));

    if(status > 0) return 0;

    var proveedor = {
      id: $.urlParam('id'),
      name: $('#name').val(),
      last_name: $('#last_name').val(),
      ocupation: $('#ocupation').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      comment: $('#comment').val()
    }

    console.log(proveedor);

    $.ajax({url: 'https://donleonapi.herokuapp.com/provider', method: 'put', data: proveedor})
    .always(function() {
      alertify.alert("Don Leon","Se edito el Proveedor!!", function(){
        window.location.replace('index.html')
      });
    });

  });

});
