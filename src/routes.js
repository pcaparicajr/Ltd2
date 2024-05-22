const { Router } = require('express');
const funcModel = require('./apps/models/funcionario')
const routes = new Router();
routes.get('/health', (req, res) => res.send({
    message: 'Connected with success!',
  }));

  routes.get('/funcionario',async (req,res)=> {
    const allfuncionarios = await funcModel.findAll();
    res.send({funcionario: allfuncionarios})
  });

module.exports = routes;