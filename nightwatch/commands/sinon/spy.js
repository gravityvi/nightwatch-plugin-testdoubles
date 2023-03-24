const sinon = require('sinon')

module.exports = class Spy {
  command(...args) {
    return sinon.spy(...args);
  }
}

module.exports.autoInvoke = true;