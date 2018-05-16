$('document').ready(function() {

  var currentPass = '';

  $.get('https://donleonapi.herokuapp.com/event/'+$.urlParam('id'), function(data) {
    console.log(data);
    $('#client').val(data[0].client);
    $('#dateStart').val(data[0].datestart.substring(0,10));
    $('#dateEnd').val(data[0].dateend.substring(0,10));
    $('#persons').val(data[0].persons);
  });

  $('#submit').on('click', function() {
    $('.error').remove();
    var status = 0;

    status += validar($('#dateStart'));
    status += validar($('#dateEnd'));
    status += validar($('#persons'));

    if(status > 0) return 0;

    var evento = {
      id: $.urlParam('id'),
      dateStart: $('#dateStart').val(),
      dateEnd: $('#dateEnd').val(),
      persons: $('#persons').val()
    }

    console.log(evento);

    $.ajax({url: 'https://donleonapi.herokuapp.com/event', method: 'put', data: evento})
    .always(function() {
      alertify.alert("Don Leon","Se edito el Evento!!", function(){
        window.location.replace('index.html')
      });
    });
  });

  // Pauqtes
  $.get( "https://donleonapi.herokuapp.com/package", function( data ) {
    console.log(data);
    var html = ``;

    $.each(data, function(index, value) {
      html += `<option value="${value.id}">${value.name}</option>`;
    });

    $('#package_id').append(html);
  });

  $('#submit_package').on('click', function() {
    $('.error').remove();
    var status = 0;

    status += validar($('#package_id'));

    if(status > 0) return 0;

    var eventoPaquete = {
      event_id: $.urlParam('id'),
      package_id: $('#package_id').val(),
    }

    console.log(eventoPaquete);

    $.ajax({url: 'https://donleonapi.herokuapp.com/event/package', method: 'post', data: eventoPaquete})
    .done(function() {
      alertify.alert("Don Leon","Se agrego el Paquete!!", function(){
        window.location.replace('index.html')
      });
    });
  });

  // Borrar paquetes

  $.get( "https://donleonapi.herokuapp.com/event/"+$.urlParam('id')+"/package", function( data ) {
    $.each(data, function(index, value) {
      $.get( "https://donleonapi.herokuapp.com/package/"+value.package_id, function( data2 ) {
        var html = ``;
        $.each(data2, function(index2, value2) {
          html += `<option value="${value2.id}">${value2.name}</option>`;
        });
        $('#package_id_borrar').append(html);
      });
    });
  });

  $('#submit_package_borrar').on('click', function() {
    $('.error').remove();
    var status = 0;

    status += validar($('#package_id_borrar'));

    if(status > 0) return 0;

    var eventoPaquete_borrar = {
      event_id: $.urlParam('id'),
      package_id: $('#package_id_borrar').val(),
    }

    console.log(eventoPaquete_borrar);

    $.ajax({url: 'https://donleonapi.herokuapp.com/event/package', method: 'delete', data: eventoPaquete_borrar})
    .always(function() {
      alertify.alert("Don Leon","Se borro el Paquete!!", function(){
        window.location.replace('index.html')
      });
    });
  });
});
