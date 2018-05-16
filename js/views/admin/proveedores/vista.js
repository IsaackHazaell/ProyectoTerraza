$('document').ready(function() {

  $.get('https://donleonapi.herokuapp.com/provider/'+$.urlParam('id'), function(data) {
    console.log(data);
    $('#name').val(data[0].name);
    $('#last_name').val(data[0].last_name);
    $('#ocupation').val(data[0].ocupation);
    $('#email').val(data[0].email);
    $('#phone').val(data[0].phone);
    $('#comment').val(data[0].comment);
  });

});
