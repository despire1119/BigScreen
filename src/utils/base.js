var SIGN_REGEXP = /([yMdhsm])(\1*)/g
var DEFAULT_PATTERN = 'yyyy-MM-dd'

function padding(s, len) {
  const lens = len - (s + '').length
  for (let i = 0; i < lens; i++) {
    s = '0' + s
  }
  return s
}
export const formatDate = {
  format: function(date, pattern) {
    pattern = pattern || DEFAULT_PATTERN
    return pattern.replace(SIGN_REGEXP, function($0) {
      switch ($0.charAt(0)) {
        case 'y':
          return padding(new Date(date).getFullYear(), $0.length)
        case 'M':
          return padding(new Date(date).getMonth() + 1, $0.length)
        case 'd':
          return padding(new Date(date).getDate(), $0.length)
        case 'w':
          return new Date(date).getDay() + 1
        case 'h':
          return padding(new Date(date).getHours(), $0.length)
        case 'm':
          return padding(new Date(date).getMinutes(), $0.length)
        case 's':
          return padding(new Date(date).getSeconds(), $0.length)
      }
    })
  },
  parse: function(dateString, pattern) {
    var matchs1 = pattern.match(SIGN_REGEXP)
    var matchs2 = dateString.match(/(\d)+/g)
    if (matchs1.length === matchs2.length) {
      var _date = new Date(1970, 0, 1)
      for (var i = 0; i < matchs1.length; i++) {
        var _int = parseInt(matchs2[i])
        var sign = matchs1[i]
        switch (sign.charAt(0)) {
          case 'y':
            _date.setFullYear(_int)
            break
          case 'M':
            _date.setMonth(_int - 1)
            break
          case 'd':
            _date.setDate(_int)
            break
          case 'h':
            _date.setHours(_int)
            break
          case 'm':
            _date.setMinutes(_int)
            break
          case 's':
            _date.setSeconds(_int)
            break
        }
      }
      return _date
    }
    return null
  }
}
