describe('using spies in Nightwatch', function() {
  it('spy helloFunction test', function({sinon, assert}) {
    const obj = {
      helloFunction: () => console.log('hello!') ,
    }
    const sayHello = () => obj.helloFunction();
    const spy = sinon.spy(obj, 'helloFunction'); // create a spy on helloFunction

    sayHello(); // call the function
    assert.ok(spy.calledOnce); //expect helloFunction to be called once
  })
})