'use strict';

const ScheduleRequest = require('./lib/req');
const ScheduleResponse = require('./lib/res');

class Schedule {
  constructor(args) {
    const [event, context] = args;
    this.req = new ScheduleRequest(event);
    this.res = new ScheduleResponse(context);
  }
}

module.exports = Schedule;
