$('document').ready(function() {

  var cajas;
  $('#view').prop('disabled', true);
  $('#edit').prop('disabled', true);
  $('#delete').prop('disabled', true);

  $.get( "https://donleonapi.herokuapp.com/user", function( data ) {
    var html = ``;

    $.each(data, function(index, value) {
      html += `<tr>`;
        html += `<td>`;
          html += `<input class="cajas" type="checkbox" name="selected" value="${value.id}">`;
        html += `</td>`;
        html += `<td>${value.username}</td>`;
        html += `<td>*********</td>`;
      html += `</tr>`;
    });

    $('#tabla tbody').append(html);
    cajas = $('.cajas');
  });


  // BOTONES ------------------------

  $('#view').on('click', function() {

  });

  $('#edit').on('click', function() {

  });

  $('#delete').on('click', function() {
    $.each(cajas, function(index, value) {
      var element = $(value);
      var bool = element.prop('checked');
      if(bool) {
        console.log('Borrar ' + element.val());

        $.ajax({url: `https://donleonapi.herokuapp.com/user`, data: {id: element.val()}, method: `delete`})
        .done(function(data) {
          alert(element.val() + 'Borrado');
        });

      }
    });
  });

  $('#selectAll').on('click', function() {
    $('.cajas').prop('checked', true);
      botones();
  });

  $('#deselectAll').on('click', function() {
    $('.cajas').prop('checked', false);
      botones();
  });

  $('#invertSelection').on('click', function() {
    $.each(cajas, function(index, value) {
      var element = $(value);
      var bool = element.prop('checked');
      element.prop('checked', !bool);
    });
      botones();
  });

  $('#create').on('click', function() {
    window.open("./crear.html");
  });

  $('#tabla tbody').on('change', '.cajas', function() {
    botones();
  });

  function contar(data) {
    var i = 0;
    $.each(cajas, function(index, value) {
      var element = $(value);
      var bool = element.prop('checked');
      if(bool) i++;
    });
    return i;
  }

  function botones() {
    var i = contar(cajas);
    if(i === 0) {
      $('#view').prop('disabled', true);
      $('#edit').prop('disabled', true);
      $('#delete').prop('disabled', true);
    } else if (i === 1) {
      $('#view').prop('disabled', false);
      $('#edit').prop('disabled', false);
      $('#delete').prop('disabled', false);
    } else if (i > 1) {
      $('#view').prop('disabled', true);
      $('#edit').prop('disabled', true);
      $('#delete').prop('disabled', false);
    }
  }

});
