const express = require('express');
const app = express();

#### no espaço em branco é onde vc vai colocar a sua aplicação

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {

  console.log('HTTP Service SFTP running on port:', server.address().port);

});