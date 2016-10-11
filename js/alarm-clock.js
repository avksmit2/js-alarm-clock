var alarm_time;

function Clock() {
}

Clock.prototype.alarm = function(new_alarm_time, displayFunction) {
  alarm_time = new_alarm_time;
  checkAlarm(displayFunction);
};

function checkAlarm(displayFunction) {
  var current_time = parseInt(moment().format("x"));
  var alarm_time_m = parseInt(moment(alarm_time, "HH:mm").format("x"));
  if (current_time >= alarm_time_m) {
    displayFunction();
  }
  setTimeout(checkAlarm, 1000, displayFunction);
}

Clock.prototype.snooze = function(snoozeTime) {
  alarm_time = moment().add(snoozeTime, "m");
};

Clock.prototype.getAlarmTime = function() {
  return alarm_time.format("HH:mm");
};

exports.clockModule = Clock;
