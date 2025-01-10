const validator = require("validator")
//                       object { mobile, address, city, type, startTime, endTime }
exports.checkEmpty = (config) => {
    let isError = false
    const error = []
    for (const key in config) {
        if (validator.isEmpty(config[key] ? config[key] : "")) { // isEmpty(config.mobile)
            isError = true
            error.push(`${key} is requrired`)
        }
    }
    return { isError, error }
}