'use strict';

const HttpRequest = require('./lib/req');
const HttpResponse = require('./lib/res');

class Http {
  constructor(args, vars) {
    const [event] = args;
    this.req = new HttpRequest(event);
    this.res = new HttpResponse(vars);
  }
}

module.exports = Http;
