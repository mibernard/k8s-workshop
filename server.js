const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from ACMEats on Kubernetes!');
});

// return a get request with a simple array of orders
app.get('/orders', (req, res) => {
  const orders = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Burger' },
    { id: 3, name: 'Pasta' }
  ];
  res.json(orders);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});