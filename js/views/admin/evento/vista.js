$('document').ready(function() {

  $.get('https://donleonapi.herokuapp.com/event/'+$.urlParam('id'), function(data) {
    console.log(data);
    $('#client').val(data[0].client);
    $('#dateStart').val(data[0].datestart.substring(0,10));
    $('#dateEnd').val(data[0].dateend.substring(0,10));
    $('#persons').val(data[0].persons);
  });


  $.get( "https://donleonapi.herokuapp.com/event/"+$.urlParam('id')+"/package", function( data ) {
    $.each(data, function(index, value) {
      $.get( "https://donleonapi.herokuapp.com/package/"+value.package_id, function( data2 ) {
        console.log(data2);
        var html = ``;
        $.each(data2, function(index2, value2) {
          html += `<tr>`;
          html += `<td><a target="_blank" href="../paquetes/vista.html?id=${value2.id}">${value2.name}</a></td>`;
          html += `<td>${value2.description}</td>`;
          html += `</tr>`;
        });
        $('#tablaPaquetes tbody').append(html);
      });
    });
  });

});
