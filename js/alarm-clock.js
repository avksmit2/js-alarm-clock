function Clock() {
  this.alarm_time = "";
}

Clock.prototype.alarm = function(alarm_time, displayFunction) {
  console.log(alarm_time);
  this.alarm_time = alarm_time;
  checkAlarm(alarm_time, displayFunction);
};

function checkAlarm(alarm_time, displayFunction) {
  var current_time = parseInt(moment().format("x"));
  var alarm_time_m = parseInt(moment(alarm_time, "HH:mm").format("x"));
  if (current_time >= alarm_time_m) {
    displayFunction();
  }
  setTimeout(checkAlarm, 1000, alarm_time, displayFunction);
}

Clock.prototype.setAlarm = function(alarm_time) {
  this.alarm_time = moment(alarm_time, "HH:mm");
};

exports.clockModule = Clock;
