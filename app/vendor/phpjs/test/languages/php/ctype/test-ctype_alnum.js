// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var ctype_alnum = require('../../../../src/php/ctype/ctype_alnum.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/ctype/ctype_alnum.js (tested in test/languages/php/ctype/test-ctype_alnum.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var result = ctype_alnum('AbC12')
    expect(result).to.deep.equal(expected)
    done()
  })
})
