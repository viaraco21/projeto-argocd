const http = required("http")
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Projeto-argocd');
})

server.liste(port, () => {
    console.log('Servidor escutando em http://localhost:${port}')
})