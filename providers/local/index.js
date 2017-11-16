'use strict';

const Http = require('./events/http');
const Schedule = require('./events/schedule');

class Local {
  constructor(args, vars) {
    this.events = {
      http : new Http(args, vars),
      schedule : new Schedule(args, vars)
    };
  }
}

module.exports = Local;
