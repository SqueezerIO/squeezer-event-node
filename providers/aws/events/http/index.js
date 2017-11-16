'use strict';

const HttpRequest = require('./lib/req');
const HttpResponse = require('./lib/res');

class Http {
  constructor(args) {
    const [event, context] = args;
    this.req = new HttpRequest(event);
    this.res = new HttpResponse(context);
  }
}

module.exports = Http;
