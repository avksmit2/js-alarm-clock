var Clock = require('./../js/alarm-clock.js').clockModule;
  var clock = new Clock();

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
  // $('#clock').text(clock.current_time);
  updateClock();

  $('#alarm').submit(function(event) {
    event.preventDefault();
    var alarm = $('#alarm_time').val();
    // clock.setAlarm(alarm);
    clock.alarm(alarm, displayAlarm);
    $('.set_alarm').text(clock.alarm_time);
  });


});
