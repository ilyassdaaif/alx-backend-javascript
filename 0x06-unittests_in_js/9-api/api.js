const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

function createServer(port) {
  return app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
  });
}

module.exports = { app, createServer };