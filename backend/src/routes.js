const express = require('express');
const usuarioController = require('./controller/usuario.controller');
const publicacaoController = require('./controller/publicacao.controller');
const comentarioController = require('./controller/comentario.controller');

const routes = express.Router(); // usado para fazer as rotas

routes.get('/', function(req,res){
    res.json({message: "Bem vindo Dev ao back end do Instagram Mern Clone"})
})

routes.get('/usuario', usuarioController.index)
routes.post('/usuario', usuarioController.create)
routes.get('/usuario/:_id', usuarioController.detail)
routes.delete('/usuario/:_id', usuarioController.delete)
routes.put('/usuario', usuarioController.update)


routes.get('/publicacao', publicacaoController.index)
routes.post('/publicacao', publicacaoController.create)
routes.get('/publicacao/:_id', publicacaoController.detail)
routes.delete('/publicacao/:_id', publicacaoController.delete)
routes.put('/publicacao', publicacaoController.update)

routes.get('/comentario', comentarioController.index)
routes.post('/comentario', comentarioController.create)
routes.get('/comentario/:_id', comentarioController.detail)
routes.delete('/comentario/:_id', comentarioController.delete)
routes.put('/comentario', comentarioController.update)

module.exports = routes // suficiente para exportar todas as rotas
