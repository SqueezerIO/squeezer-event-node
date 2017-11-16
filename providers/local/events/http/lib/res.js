'use strict';

const fs = require('fs');
const path = require('path');

class HttpResponse {
  constructor(vars) {
    this.headers = {};
    this.vars = vars;
  }

  header(key, value) {
    this.headers[key] = value;
  }

  send(statusCode, body) {
    const httpResponse = {
      headers: this.headers,
      statusCode: statusCode,
      body: body
    };

    fs.writeFileSync(
      path.join(this.vars.path, '.build', 'development', 'response.json'),
      JSON.stringify(httpResponse, null, 2)
    );

    process.exit(0);
  }
}

module.exports = HttpResponse;
