const TestRunnerCore = require('test-runner-core')
const Tom = require('test-object-model')
const TapView = require('./')

const tom = new Tom()
const runner = new TestRunnerCore(tom, { view: new TapView(), debug: false })

tom.test('pass', function () {})
tom.test('fail', function () {
  throw new Error('broken')
})
tom.skip('skipped', function () {})

runner.start()
