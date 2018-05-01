let selectItems = $('input[type=checkbox]');
let buttonView = $('#view');
let buttonEdit = $('#edit');
let buttonDelete = $('#delete');
let buttonSelectAll = $('#selectAll');
let buttonDeselectAll = $('#deselectAll');
let buttonInvertSelection = $('#invertSelection');
let buttonCreate = $('#create');

console.log(selectItems);

let update = function update() {
  let cont = 0;
  $.each( selectItems, function( key, value ) {
    let item = $(value);
    if(item.is(':checked')) {
      cont++;
    }
  });

  if(cont === 0) {
    buttonView.prop( "disabled", true );
    buttonEdit.prop( "disabled", true );
    buttonDelete.prop( "disabled", true );
  }
  else if(cont === 1) {
    buttonView.prop( "disabled", false );
    buttonEdit.prop( "disabled", false );
    buttonDelete.prop( "disabled", false );
  }
  else {
    buttonView.prop( "disabled", true );
    buttonEdit.prop( "disabled", true );
    buttonDelete.prop( "disabled", false );
  }
}

selectItems.on('click', update);

buttonView.on('click', function() {
  $.each( selectItems, function( key, value ) {
    let item = $(value);
    if(item.is(':checked')) {
      window.open('/' + item.data('type') + '-vista/' + item.val());
      return;
    }
  });
});

buttonEdit.on('click', function() {
  $.each( selectItems, function( key, value ) {
    let item = $(value);
    if(item.is(':checked')) {
      window.open('/' + item.data('type') + '-editar/' + item.val());
      return;
    }
  });
});

buttonDelete.on('click', function() {

  if (confirm("Se borraran los elemenotos permanentemente!")) {
    swal('Se eliminaron los elementos.');
  } else {
    swal('Acción cancelada');
  }
});

buttonSelectAll.on('click', function() {
  $.each(selectItems, function(key, value) {
    let item = $(value);
    item.prop( "checked", true );
  });
  update();
});

buttonDeselectAll.on('click', function() {
  $.each(selectItems, function(key, value) {
    let item = $(value);
    item.prop( "checked", false );
  });
  update();
});

buttonInvertSelection.on('click', function() {
  $.each(selectItems, function(key, value) {
    let item = $(value);
    if(item.is(':checked')) {
      item.prop( "checked", false );
    }
    else {
      item.prop( "checked", true );
    }
  });
  update();
});

buttonCreate.on('click', function() {
  window.open('/' + buttonCreate.data('type') + '-crear/');
});
