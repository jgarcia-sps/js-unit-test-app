const fs = require('fs')

exports.searchFile = function(path) {
    return fs.existsSync(path)
}
