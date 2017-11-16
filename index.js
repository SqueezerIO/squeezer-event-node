'use strict';

const Events = require('./events');

module.exports = (vars, cb, ...args) => {
  const events = new Events(vars, cb, ...args).get();
  const event = vars.function.event;
  const eventType = event.type;

  if (events[eventType] === undefined) {
    throw new Error(`Invalid event type "${eventType}"`);
  }
};
