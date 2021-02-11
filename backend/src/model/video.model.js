const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    data: Date,
    video: String,
    imagem: String,
    usuario: String

})

const video = mongoose.model('Videos', DataSchema) // falando pro mongoose criar um model usuario atraves dos campos do DataSchema
module.exports = video; 