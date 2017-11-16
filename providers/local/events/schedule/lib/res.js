'use strict';

class ScheduleResponse {
  constructor(context) {
    this.context = context;
  }

  done() {
    process.exit(0);
  }
}

module.exports = ScheduleResponse;
