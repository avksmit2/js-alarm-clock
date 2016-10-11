var Clock = require('./../js/alarm-clock.js').clockModule;

var displayAlarm = function() {
  $(".footer").fadeIn();
  $("#snooze-group").show();
};

function updateClock() {
  var time = moment().format('hh:mm:ss MMMM Do YYYY');
  $('#clock').html("<h1 class='text-center'>Current Time:  " + time + "</h1>");
  setTimeout(updateClock, 1000);
}

$(document).ready(function() {
  var clock = new Clock();
  updateClock();

  $('#alarm').submit(function(event) {
    event.preventDefault();
    var alarm = $('#alarm_time').val();
    clock.alarm(alarm, displayAlarm);
  });

  $('#snooze').click(function() {
    clock.snooze($('#snooze-time').val());
    $("#snooze-group").css("background", "none");
    $("#snooze-group").hide();
    $(".footer").fadeOut();
    $("#alarm_time").val(clock.getAlarmTime());
  });

});
