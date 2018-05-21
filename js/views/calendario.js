$('document').ready(function() {
  $.get( "https://donleonapi.herokuapp.com/event", function( data ) {
      var data2 = [];
      for(var i in data)
      {
        var file = {title: 'Ocupado',
          start: data[i].datestart,
          end: data[i].dateend,
          backgroundColor: '#AA1600',
          textColor: '#FFFDFF'};
        data2.push(file);
      }

      console.log(data2);

     $('#calendar').fullCalendar({
       header: {
         left: 'prev,next today',
         center: 'title',
         right: 'month,agendaWeek,agendaDay,listWeek'
       },
       defaultDate: new Date(),
       navLinks: true , // can click day/week names to navigate views
       editable: false,
       eventLimit: true, // allow "more" link when too many events
       events: data2,
       timeFormat: 'h:mm',

       dayClick: function (date) {
        var events = $('#calendar').fullCalendar('clientEvents');
        for (var i = 0; i < events.length; i++) {
            if (moment(date).isSame(moment(events[i].start))) {
                 alertify.warning('Ocupado');
                break;
            }
            else if (i == events.length - 1) {
              alertify.confirm("Reservar fecha?",
              function(){
                alertify.success('Ok');
                window.location.replace('contacto.html')
              });

            }
        }
      }

      });
  });
});
