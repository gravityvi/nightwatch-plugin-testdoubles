const sinon = require('sinon');

module.exports = class Mock {
  constructor() {
    this.expectation;
  }

  

  command(...args) {
    const mock = sinon.mock(...args)

  
  
   const verifyProxy =  new Proxy(mock.verify, {
      apply: (target, thisArgs, argumentList) => {
        try {
          const result = Reflect.apply(target, mock , argumentList);
          this.api.assert.ok(`passed mock method ${thisArgs.method} expectation `);
          return result;
        } catch(err) {
          this.api.assert.fail(err.message);
        }
      }
     })
     
    const mockProxy = new Proxy(mock, {
      get: (target, prop) => {
        if(prop === 'expects') {
          return (...args) => {
            const result = Reflect.apply(target[prop], target, args);
            result.verify = verifyProxy;
            return result;
          }
        }
        return Reflect.get(target, prop);
      }
    })

    return mockProxy;
  }
}

module.exports.autoInvoke = true;