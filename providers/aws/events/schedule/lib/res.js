'use strict';

class ScheduleResponse {
  constructor(context) {
    this.context = context;
  }

  done() {
    this.context.succeed();
  }
}

module.exports = ScheduleResponse;
