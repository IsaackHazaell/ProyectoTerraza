$('document').ready(function() {
  $.get( "https://donleonapi.herokuapp.com/event", function( data ) {
      var data2 = [];
      for(var i in data)
      {
        var file = {
          id: data[i].id,
          title: 'Ocupado',
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
//if(event.start <= date && event.end >= date)
//events[i].start <= moment(date) && events[i].start >= moment(date)
//moment(date).isSame(moment(events[i].start))

//events[i].start <= date && events[i].start >= date
       dayClick: function (date, allDay) {
        var events = $('#calendar').fullCalendar('clientEvents');
        for (var i = 0; i < events.length; i++) {
            if (events[i].start <= date && events[i].start >= date) {
              alertify.confirm('Fecha ocupada', 'Inspeccionar evento?',
              function(){
                alertify.success('Ok');
                //window.location.replace('vista.html?id='+element.val());
                window.location.replace('../evento/vista.html?id='+events[i].id)
              },
              function(){

              });
                break;
            }
            else if (i == events.length - 1) {
              alertify.confirm('Fecha disponible', 'Crear un evento?',
              function(){
                alertify.success('Ok');
                window.location.replace('../evento/crear.html')
              },
              function(){

              });

            }
        }
      }

      });
  });
});
