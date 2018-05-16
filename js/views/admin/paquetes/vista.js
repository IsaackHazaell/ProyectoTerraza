$('document').ready(function() {

  $.get('https://donleonapi.herokuapp.com/package/'+$.urlParam('id'), function(data) {
    console.log(data);
    $('#name').val(data[0].name);
    $('#description').val(data[0].description);
  });

});
