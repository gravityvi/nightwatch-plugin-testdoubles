const assert = require('assert');
const {spawn} = require('child_process');
const path = require("path");

describe('run nightwatch api tests', function () {

  it('run stub tests', function (done) {

    const childProcess = spawn(path.resolve('node_modules/.bin/nightwatch'), ['examples/stubExample.js'], {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', process.stderr]
    });


    childProcess.on('exit', function (code) {
      assert.strictEqual(code, 0);

      const {report} = require(path.resolve('tests_output/stubExample.json'));
      assert.strictEqual(report.assertionsCount, 3);
      assert.strictEqual(report.passedCount, 3);
      assert.strictEqual(report.failures, 0);
      assert.strictEqual(report.errors, 0);


      done();
    });

  });

  it('run spy tests', function (done) {

    const childProcess = spawn(path.resolve('node_modules/.bin/nightwatch'), ['examples/spyExample.js'], {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', process.stderr]
    });


    childProcess.on('exit', function (code) {
      assert.strictEqual(code, 0);

      const {report} = require(path.resolve('tests_output/stubExample.json'));
      assert.strictEqual(report.assertionsCount, 3);
      assert.strictEqual(report.passedCount, 3);
      assert.strictEqual(report.failures, 0);
      assert.strictEqual(report.errors, 0);


      done();
    });

  });


  it('run mock tests', function (done) {

    const childProcess = spawn(path.resolve('node_modules/.bin/nightwatch'), ['examples/mockExample.js'], {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', process.stderr]
    });


    childProcess.on('exit', function (code) {
      assert.strictEqual(code, 0);

      const {report} = require(path.resolve('tests_output/mockExample.json'));
      assert.strictEqual(report.assertionsCount, 1);
      assert.strictEqual(report.passedCount, 1);
      assert.strictEqual(report.failures, 0);
      assert.strictEqual(report.errors, 0);


      done();
    });

  });

});