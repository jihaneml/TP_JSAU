'use strict'

  const my_shared_code_headless = require('./my_shared_file_headless.js')

function writeContent() {
    console.log('TODO: Replace this by actual code')
    console.log('Write the 20 first even numbers,')
    console.log('one per second')
    let numbers = my_shared_code_headless.generateEvenNumbers(20)
}

module.exports = {
    writeContent
}
