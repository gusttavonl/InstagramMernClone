const express = require('express');
const usuarioController = require('./controller/usuario.controller');
const videoController = require('./controller/video.controller');

const routes = express.Router(); // usado para fazer as rotas

routes.get('/', function(req,res){
    res.json({message: "Bem vindo Dev ao back end do Instagram Mern Clone"})
})

routes.get('/usuario', usuarioController.index)
routes.post('/usuario', usuarioController.create)
routes.get('/usuario/:_id', usuarioController.detail)
routes.delete('/usuario/:_id', usuarioController.delete)
routes.put('/usuario', usuarioController.update)


routes.get('/video', videoController.index)
routes.post('/video', videoController.create)
routes.get('/video/:_id', videoController.detail)
routes.delete('/video/:_id', videoController.delete)
routes.put('/video', videoController.update)

module.exports = routes // suficiente para exportar todas as rotas
