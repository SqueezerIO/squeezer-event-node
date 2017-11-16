'use strict';

const Http = require('./http');
const Schedule = require('./schedule');
const Providers = require('../providers');

class Events {
  constructor(vars, cb) {
    const eventArgs =  Array.prototype.slice.call(arguments, 2);
    const providerEvent = this.getProviderEvent(vars, eventArgs);
    const eventType = vars.function.event.type;

    const events = {
      http: Http.bind(),
      schedule : Schedule.bind()
    };

    this.events = {};
    this.events[eventType] = new events[eventType](vars, providerEvent, cb);
  }

  get() {
    return this.events;
  }

  getProviderEvent(vars, args) {
    const providers = new Providers().get();
    const providerName = vars.provider;
    const event = vars.function.event;
    const eventType = event.type;

    if (!providerName) {
      throw new Error('Missing provider name');
    }

    if (providers[providerName] === undefined) {
      throw new Error(`Invalid cloud provider name "${providerName}"`);
    }

    const Provider = providers[providerName];
    const provider = new Provider(args, vars);

    if (provider.events[eventType] === undefined) {
      throw new Error(`Invalid event "${eventType}" on provider "${providerName}"`);
    }

    return provider.events[eventType];
  }
}

module.exports = Events;
