'use strict';

const local = require('./local');
const AWS = require('./aws');

class Providers {
  constructor() {
    this.providers = {
      local : local.bind(),
      aws : AWS.bind()
    };
  }

  get() {
    return this.providers;
  }
}

module.exports = Providers;
