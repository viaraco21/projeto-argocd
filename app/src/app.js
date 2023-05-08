import express from "express";

const app = express();

const BINARY_FILE = "/app/rootfs/script.sh";

app.use(express.json())

const usuario = [
  {id: 1, "usuario": "Renato Aurelio"},
  {id: 2, "usuario": "Bernardo"}
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
  
function executeInBackground() {
    exec(BINARY_FILE);	
  }
  
export default app