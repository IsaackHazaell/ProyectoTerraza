$('document').ready(function() {

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
      email: $('#email').val(),
      name: $('#name').val(),
      last_name: $('#last_name').val(),
      phone: $('#phone').val(),
      score: $('#score').val(),
      comment: $('#comment').val()
    }

    console.log(cliente);

    $.post('https://donleonapi.herokuapp.com/client', cliente, function(result){
      alertify.alert("Don Leon","Se creo el cliente!!", function(){
        window.location.replace('index.html')
      });
    });

  });

});
