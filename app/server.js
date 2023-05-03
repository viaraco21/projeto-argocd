const http = require("http")
const port = 3000;

const rotas = {
  '/': 'Projeto-argocd',
  '/ADM': 'Inclui Exclui usuario senha',
  '/SFTP': 'Listagem de USUARIOS'
  }

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
  })

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})