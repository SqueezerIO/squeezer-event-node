'use strict';

class HttpResponse {
  constructor(vars, providerEvent) {
    this.vars = vars;
    this.providerEvent = providerEvent;
    this.charset = 'utf-8';
    this.headers = {};

    const httpHeaders = vars['response-http-headers'];

    if (httpHeaders !== undefined) {
      Object.keys(httpHeaders).forEach((key) => {
        this.header(key, httpHeaders[key]);
      });
    }
  }

  charset(value) {
    this.charset = value;
  }

  header(key, value) {
    this.headers[key] = value;
    this.providerEvent.res.header(key, value);
  }

  send(statusCode, body) {
    if (!this.headers['content-type']) {
      this.header('content-type', `text/html; charset=${this.charset}`);
    }
    this.providerEvent.res.send(statusCode, body);
  }

  json(statusCode, body) {
    this.header('content-type', `application/json; charset=${this.charset}`);

    this.providerEvent.res.send(statusCode, JSON.stringify(body));
  }
}

module.exports = HttpResponse;
