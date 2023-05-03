import express from "express";

const app = express();

const usuario = [
  {id: 1, "usuario": "raco"},
  {id: 2, "usuario": "raco2023@"}
]

app.get('/', (req, res) => {
  res.status(200).send('projeto-argocd');
}) 

app.get('/usuario', (req, res) => {
  res.status(200).json(usuario)
})

export default app