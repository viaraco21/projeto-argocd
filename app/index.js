const express = require('express');
const app = express();



####################################################


import express from "express"
import livros from "./livrosRouters.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Criacao SFTP"})
  }) 
  app.use(
    express.json(),
    livros
  )

  }
export default routes

###################################################

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {

  console.log('HTTP Service SFTP running on port:', server.address().port);

});