var Clock = require('./../js/alarm-clock.js').clockModule;


var displayAlarm = function() {
  $('.alarm_ringing').show();
};


function updateClock() {
  // $('#clock').text(clock.current_time);
  var time = moment().format('HH:mm:ss');
  $('#clock').html(time);
  setTimeout(updateClock, 1000);
}

$(document).ready(function() {
  var clock = new Clock();


  // $('#clock').text(clock.current_time);
  updateClock();

  $('#alarm').submit(function(event) {
    event.preventDefault();
    var alarm = $('#alarm_time').val();
    // clock.setAlarm(alarm);
    $('.set_alarm').text(clock.alarm_time);
    clock.alarm(alarm, displayAlarm);
  });


});
