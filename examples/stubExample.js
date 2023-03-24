/*Test stubs are function(spies) with pre-programmed behaviour */
describe('use stubs in your test', function(){
  it('test formatElapsedTime function', function({sinon, assert}) {
    const callback = sinon.stub();
    callback.withArgs(42).returns(1);

    assert.ok(!callback()); // No return value, no exception
    assert.strictEqual(callback(42), 1);  // Returns 1
    assert.strictEqual(callback.withArgs(42).callCount, 1); // Use withArgs in assertion
  })
})