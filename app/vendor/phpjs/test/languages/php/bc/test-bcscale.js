// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var bcscale = require('../../../../src/php/bc/bcscale.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/bc/bcscale.js (tested in test/languages/php/bc/test-bcscale.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var result = bcscale(1)
    expect(result).to.deep.equal(expected)
    done()
  })
})
