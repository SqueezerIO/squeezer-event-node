'use strict';

const isJSON = require('is-json');

class HttpRequest {
  constructor(vars, providerEvent) {
    const headers = providerEvent.req.getHeaders();
    this.req = {
      headers: headers || {},
      method: providerEvent.req.getMethod(),
      path: providerEvent.req.getPath(),
      params: providerEvent.req.getParams() || {},
      query: providerEvent.req.getQuery() || {},
      clientIpAddress: headers['Cf-Connecting-Ip'] || providerEvent.req.getClientIpAddress(),
      clientCountry: headers['Cf-Ipcountry'] || providerEvent.req.getClientCountry(),
      url: providerEvent.req.getUrl(),
      body: this.getBody(providerEvent)
    };
  }

  getBody(providerEvent) {
    let body = providerEvent.req.getBody() || {};

    if (isJSON(body)) {
      body = JSON.parse(body);
    }

    return body;
  }
}

module.exports = HttpRequest;
