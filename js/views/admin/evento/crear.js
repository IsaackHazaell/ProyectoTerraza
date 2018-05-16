$('document').ready(function() {

  $.get( "https://donleonapi.herokuapp.com/client", function( data ) {

    console.log(data);
    var html = ``;

    $.each(data, function(index, value) {
      html += `<option value="${value.name} ${value.last_name}">${value.name} ${value.last_name}</option>`;
    });

    $('#client').append(html);
  });

  $('#submit').on('click', function() {
    $('.error').remove();
    var status = 0;

    status += validar($('#client'));
    status += validar($('#dateStart'));
    status += validar($('#dateEnd'));
    status += validar($('#persons'));

    if(status > 0) return 0;

    var evento = {
      client: $('#client').val(),
      dateStart: $('#dateStart').val(),
      dateEnd: $('#dateEnd').val(),
      persons: $('#persons').val()
    }

    console.log(evento);

    $.post('https://donleonapi.herokuapp.com/event', evento, function(result){
      alertify.alert("Don Leon","Se creo el evento!!", function(){
        window.location.replace('index.html')
      });
    });

  });

});
