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