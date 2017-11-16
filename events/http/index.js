'use strict';

const HttpRequest = require('./lib/req');
const HttpResponse = require('./lib/res');

class Http {
  constructor(vars, providerEvent, cb) {
    this.httpRequest = new HttpRequest(vars, providerEvent);
    this.httpResponse = new HttpResponse(vars, providerEvent);

    cb(this.httpRequest.req, this.httpResponse);
  }
}

module.exports = Http;
