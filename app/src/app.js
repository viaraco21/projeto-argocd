import express from "express";

const app = express();

app.use(express.json())

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

app.post('/usuario', (req, res) => {
    usuario.push(req.body);
    res.status(201).send('usuario cadastrado com sucesso')
})

export default app