const express = require('express');
const app = express();



#### no espaço em branco é onde vc vai colocar a sua aplicação


import express from "express"
import livros from "./livrosRouters.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Curso de node"})
  }) 
  app.use(
    express.json(),
    livros
  )

  }
export default routes

############################################

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {

  console.log('HTTP Service SFTP running on port:', server.address().port);

});