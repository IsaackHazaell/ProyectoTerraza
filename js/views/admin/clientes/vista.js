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


});
