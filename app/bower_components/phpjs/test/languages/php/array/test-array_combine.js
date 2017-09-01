// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_combine = require('../../../../src/php/array/array_combine.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_combine.js (tested in test/languages/php/array/test-array_combine.js)', function () {
  it('should pass example 1', function (done) {
    var expected = {0: 'kevin', 1: 'van', 2: 'zonneveld'}
    var result = array_combine([0,1,2], ['kevin','van','zonneveld'])
    expect(result).to.deep.equal(expected)
    done()
  })
})
