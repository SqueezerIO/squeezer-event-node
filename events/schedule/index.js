'use strict';

const Request = require('./lib/req');
const Response = require('./lib/res');

class Schedule {
  constructor(vars, providerEvent, cb) {
    const request = new Request(vars, providerEvent);
    const response = new Response(vars, providerEvent);

    cb(request, response);
  }
}

module.exports = Schedule;
