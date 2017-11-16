'use strict';

class HttpResponse {
  constructor(vars, providerEvent) {
    this.providerEvent = providerEvent;
  }

  done() {
    this.providerEvent.res.done();
  }
}

module.exports = HttpResponse;
