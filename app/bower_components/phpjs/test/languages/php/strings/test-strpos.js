// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var strpos = require('../../../../src/php/strings/strpos.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/strpos.js (tested in test/languages/php/strings/test-strpos.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 14
    var result = strpos('Kevin van Zonneveld', 'e', 5)
    expect(result).to.deep.equal(expected)
    done()
  })
})
