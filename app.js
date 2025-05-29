// Main app logic


console.log('Hello World');

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

function handleGetRequest(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello from server' }));
}

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Welcome to our website!`);
});

app.use(express.json()); 

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const user = { name, email };
  
  res.status(201).send(user);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  res.status(201).send({ id, name, email });
  
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  res.status(204).send();
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  
  res.status(200).send({ id });
});

app.get('/users', (req, res) => {
  res.status(200).send({ message: 'Get all users' });
});