const sinon = require('sinon');

module.exports = class Stub {
  command(...args) {
    return sinon.stub(...args);
  }
 }

 module.exports.autoInvoke = true;