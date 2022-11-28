const fs = require('fs')

exports.searchFile = function(path) {
    let isFound
    if(fs.existsSync(path)){
        isFound=true
    }else{
        isFound=false
    }
    return isFound
}
