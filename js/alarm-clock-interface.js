var Clock = require('./../js/alarm-clock.js').clockModule;

var displayAlarm = function() {
  $("body").css("background", "url(img/giphy.gif) no-repeat");
  $("#snooze-group").show();
};

function updateClock() {
  var time = moment().format('hh:mm:ss');
  $('#clock').html("<h1 class='text-center'>" + time + "</h1>");
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
    $("body").css("background", "none");
    $("#snooze-group").hide();
    $("#alarm_time").val(clock.getAlarmTime());
  });

});
