$('document').ready(function() {

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
      name: $('#name').val(),
      last_name: $('#last_name').val(),
      ocupation: $('#ocupation').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      comment: $('#comment').val()
    }

    console.log(proveedor);

    $.post('https://donleonapi.herokuapp.com/provider', proveedor, function(result){
      alertify.alert("Don Leon","Se creo el proveedor!!", function(){
        window.location.replace('index.html')
      });
    });

  });

});
