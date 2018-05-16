$('document').ready(function() {
  $.get( "https://donleonapi.herokuapp.com/package", function( data ) {
    var html = ``;
    $.each(data, function(index, value) {
      html += `  <div class="jumbotron">`;
      html += `<span class="badge badge-secondary">Nuevo</span>`;
      html += `<h1 class="display-4">${value.name}</h1>`;
      html += `<hr class="my-4">`;
      html += `<p class="lead">${value.description}</p>`;
      html += `</div>`;
    });
    $('#promociones').append(html);
  });
});
