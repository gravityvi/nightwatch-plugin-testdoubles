describe('use mocks in nightwatch', function() {
  it('mock hello obj', function({sinon}) {
    const obj = {
      hello: () => console.log('Hello!')
    }
    const sayHello = () => obj.hello();
    const mock = sinon.mock(obj).expects('hello').atLeast(1).returns(null); //set a mock on hello

    sayHello();
    mock.verify(); // mocks comes with inbuilt assertion 

  })
})