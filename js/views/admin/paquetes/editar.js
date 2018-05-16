$('document').ready(function() {

  var currentPass = '';

  $.get('https://donleonapi.herokuapp.com/package/'+$.urlParam('id'), function(data) {
    console.log(data);
    $('#name').val(data[0].name);
    $('#description').val(data[0].description);
  });

  $('#submit').on('click', function() {
    $('.error').remove();
    var status = 0;

    status += validar($('#name'));
    status += validar($('#description'));

    if(status > 0) return 0;

    var paquete = {
      id: $.urlParam('id'),
      name: $('#name').val(),
      description: $('#description').val()
    }

    console.log(paquete);

    $.ajax({url: 'https://donleonapi.herokuapp.com/package', method: 'put', data: paquete})
    .always(function() {
      alertify.alert("Don Leon","Se edito el Paquete!!", function(){
        window.location.replace('index.html')
      });
    });

  });

});
