const express = require('express');
const app = express();

app.use(
  express.json(),
  usuario
)

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {

  console.log('HTTP Service SFTP running on port:', server.address().port);

});

