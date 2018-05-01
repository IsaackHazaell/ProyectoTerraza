// Obtener los botones de tipo Submit
let submitButtons = $('button[type=submit]');

// Regex
const regex = {
  'username': /^[a-zA-Z0-9]{4,16}$/,
  'password': /^[a-zA-Z0-9]{4,16}$/,
  'email': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
  'phoneNumber': /[0-9-()+]{3,20}/,
  'date': /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)dd$/,
  'image': /([^s]+(?=.(jpg|gif|png)).2)/gm
}

// Validacion
let validateForm = function validateForm(e) {

  e.preventDefault();

  let status = 0;
  let button = $(this);
  // Ontener formulario
  let form = button.closest('form');
  // Obtener inputs a validar
  let input = form.find('input');
  let textarea = form.find('textarea');

  // Validar validateRequired
  cleanError(input);
  cleanError(textarea);
  status += validateInputs(input);
  status += validateTextarea(textarea);

  //console.log(required);
  if(status == 0)
    form.submit();
}

let validateInputs = function validateInputs(fields) {
  let status = 0;

  $.each(fields, function() {
    let element = $(this);

    if (element.is('*[required]') && element.val() === '') {
      generateError(element, 'Este elemento es requerido.');
      status++;
    } else if(element.is('*[data-type]') && !element.val().match(regex[element.data('type')])) {
      generateError(element, 'Revise que el campo este bien escrito.' + regex[element.data('type')]);
      status++;
    }
  });
  return status;
}

let validateTextarea = function validateTextarea(fields) {
  let status = 0;

  $.each(fields, function() {
    let element = $(this);

    if (element.is('*[required]') && element.val() === '') {
      generateError(element, 'Este elemento es requerido.');
      status++;
    }
  });
  return status;
}






// Display settings
let cleanError = function cleanError(element) {
  element.removeClass('is-invalid');
  element.parent().find('span').remove();
}

let generateError = function generateError(element, error) {
  element.addClass('is-invalid');
  $('<span class="invalid-feedback">'+error+'</span>').insertAfter(element);
}

// Agregar el lsitener para el submit
submitButtons.on('click', validateForm);
