'use strict';

class HttpRequest {
  constructor(event) {
    this.event = event;
  }

  getHeaders() {
    return this.event.headers;
  }

  getMethod() {
    return this.event.httpMethod;
  }

  getPath() {
    return this.event.path;
  }

  getParams() {
    return this.event.pathParameters;
  }

  getQuery() {
    return this.event.queryStringParameters;
  }

  getClientIpAddress() {
    return  this.event.requestContext.identity.sourceIp;
  }

  getClientCountry() {
    return  this.event.headers['CloudFront-Viewer-Country'];
  }

  getUrl() {
    return this.event.requestContext.resourcePath;
  }

  getBody() {
    return this.event.body;
  }
}

module.exports = HttpRequest;
