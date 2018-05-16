$('document').ready(function() {

  $.get('https://donleonapi.herokuapp.com/user/id/'+$.urlParam('id'), function(data) {
    console.log(data);
    $('#username').val(data[0].username);
    $('#name').val(data[0].name);
    $('#last_name').val(data[0].last_name);
    $('#email').val(data[0].email);
    $('#phone').val(data[0].phone);
  });

});
