const assert=require('chai').assert
const chai=require('chai')
const fileServices=require('../src/files/file.service.js')

describe('FileServices.searchFile', () => {
    it('Debe regresar TRUE en caso de encontrar el archivo.', done => {
        result   = fileServices.searchFile('D:/LenguajeJS/Archivo.txt')
        assert.equal(result, true)
        done()
    })
    
    it('Debe regresar FALSE en caso de no encontrar el archivo.', done => {
        result   = fileServices.searchFile('D:/LenguajeJS/ArchivoNoExiste.txt')
        assert.equal(result, false)
        done()
    })
})