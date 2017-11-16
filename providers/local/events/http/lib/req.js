'use strict';

class HttpRequest {
  constructor(event) {
    this.event = event;
  }

  getHeaders() {
    return this.event.headers;
  }

  getMethod() {
    return this.event.method;
  }

  getPath() {
    return this.event.path;
  }

  getParams() {
    return this.event.params;
  }

  getQuery() {
    return this.event.query;
  }

  getClientIpAddress() {
    return this.event.clientIpAddress;
  }

  getClientCountry() {
    return null;
  }

  getUrl() {
    return this.event.url;
  }

  getBody() {
    return this.event.body;
  }
}

module.exports = HttpRequest;
