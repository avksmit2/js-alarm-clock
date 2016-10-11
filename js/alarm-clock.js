function Clock() {

}

Clock.prototype.alarm = function(alarm_time, displayFunction) {
  if (alarm_time !== "") {
    checkAlarm(alarm_time, displayFunction);
  }
};

// function updateClock() {
//     this.current_time = moment().format('HH:mm:ss');
//     setTimeout(updateClock, 1000);
// }

function checkAlarm(alarm_time, displayFunction) {
  // debugger;
  var current_time = parseInt(moment().format("x"));
  var alarm_time_m = parseInt(moment(alarm_time, "HH:mm").format("x"));
  if (isAlarm(current_time, alarm_time_m)) {
    displayFunction();
  }
  setTimeout(checkAlarm(alarm_time, displayFunction), 1000);
};

function isAlarm(current_time, alarm_time_m) {
  if (current_time >= alarm_time_m) {
    return true;
  }
};

Clock.prototype.setAlarm = function(alarm_time) {
  this.alarm_time = moment(alarm_time, "HH:mm");
};

exports.clockModule = Clock;
