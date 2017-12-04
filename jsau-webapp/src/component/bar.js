
const my_shared_code = require('../../my_modules/my_shared_file_headless.js')
let even_numbers = my_shared_code.generateEvenNumbers(10)

export default {

    data() {
        return {
            msg: even_numbers
        }
    }
}
