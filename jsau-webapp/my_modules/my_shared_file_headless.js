'use strict'

function generateEvenNumbers(max) {
  var arr = []
  for (var i = 0; i < max; i+=2) {
    arr.push(i)
  }
  return arr
}

module.exports = {
    generateEvenNumbers
}
