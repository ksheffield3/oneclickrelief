module.exports = function strcspn (str, mask, start, length) {
  //  discuss at: http://locutus.io/php/strcspn/
  // original by: Brett Zamir (http://brett-zamir.me)
  //   example 1: strcspn('abcdefg123', '1234567890')
  //   returns 1: 7
  //   example 2: strcspn('123abc', '1234567890')
  //   returns 2: 3

  start = start || 0
  var count = (length && ((start + length) < str.length)) ? start + length : str.length
  strct: for (var i = start, lgth = 0; i < count; i++) { // eslint-disable-line no-labels
    for (var j = 0; j < mask.length; j++) {
      if (str.charAt(i).indexOf(mask[j]) !== -1) {
        continue strct // eslint-disable-line no-labels
      }
    }
    ++lgth
  }

  return lgth
}
