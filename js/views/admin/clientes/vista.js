$('document').ready(function() {

  $.get('https://donleonapi.herokuapp.com/client/'+$.urlParam('id'), function(data) {
    console.log(data);
    $('#email').val(data[0].email);
    $('#name').val(data[0].name);
    $('#last_name').val(data[0].last_name);
    $('#phone').val(data[0].phone);
    $('#score').val(data[0].score);
    $('#comment').val(data[0].comment);

  });


  // Eventos
  $.get( "https://donleonapi.herokuapp.com/event", function( data ) {

    console.log(data);
    var html = ``;

    $.each(data, function(index, value) {

      if(value.client_id != $.urlParam('id')) return true;

      html += `<tr>`;
        html += `<td>`;
          html += `<a target="_blank" href="../evento/vista.html?id=${value.id}">Ver</a>`;
        html += `</td>`;
        html += `<td>${value.datestart.substring(0,10)}</td>`;
        html += `<td>${value.dateend.substring(0,10)}</td>`;
        html += `<td>${value.persons}</td>`;
      html += `</tr>`;
    });

    $('#tabla tbody').append(html);
    cajas = $('.cajas');
  });

});
