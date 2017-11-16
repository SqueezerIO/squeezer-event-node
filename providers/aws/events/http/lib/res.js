'use strict';

class HttpResponse {
  constructor(context) {
    this.context = context;
    this.headers = {};
  }

  header(key, value) {
    this.headers[key] = value;
  }

  send(statusCode, body) {
    this.context.succeed({
      statusCode : statusCode,
      headers    : this.headers,
      body       : body
    });
  }
}

module.exports = HttpResponse;
