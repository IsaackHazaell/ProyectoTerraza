$('document').ready(function() {

  $('#submit').on('click', function() {
    $('.error').remove();
    var status = 0;

    status += validar($('#name'));
    status += validar($('#description'));

    if(status > 0) return 0;

    var paquete = {
      name: $('#name').val(),
      description: $('#description').val()
    }

    console.log(paquete);

    $.post('https://donleonapi.herokuapp.com/package', paquete, function(result){
      alertify.alert("Don Leon","Se creo el Paquete!!", function(){
        window.location.replace('index.html')
      });
    });

  });

});
