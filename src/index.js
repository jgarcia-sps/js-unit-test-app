const fs = require('fs')
const fileServices= require('./files/file.service.js')

console.log('Is it file found?', fileServices.searchFile('D:/LenguajeJS/Archivo.txt'))
