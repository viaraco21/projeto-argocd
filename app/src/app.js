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

app.get('/usuario/:id', (req, res) => {
  let index = buscaUsuario(req.params.id);
  res.json(usuario[index]);
  })

app.post('/usuario', (req, res) => {
    usuario.push(req.body);
    res.status(201).send('usuario cadastrado com sucesso')
})

app.put('/usuario/:id', (req, res) => {
  let index = buscaUsuario(req.params.id);
  usuario[index].usuario = req.body.usuario;
  res.json(usuario);
  })

app.delete('/usuario/:id', (req, res) => {
  let {id} = req.params;
  let index = buscaUsuario(id);
  usuario.splice(index, 1);
  res.send(`Usuario ${id} removido com sucesso`);
  })

function buscaUsuario(id) {
  return usuario.findIndex(usuario => usuario.id == id)
  }

export default app