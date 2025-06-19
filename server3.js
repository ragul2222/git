const http = require('http');

const server = http.createServer((req, res) => {
  // Array destructuring
  const number = [1, 2, 3, 4, 5, 6];
  const [first, second, third] = number;

  // Object destructuring
  const user = { name: 'CR7', password: '12345678' };
  const { name, password } = user;

  // Create HTML output
  const html = `
    <h1>Destructuring Example</h1>
    <h2>Array Destructuring</h2>
    <p>Numbers: ${number.join(', ')}</p>
    <p>First: ${first}</p>
    <p>Second: ${second}</p>
    <p>Third: ${third}</p>

    <h2>Object Destructuring</h2>
    <p>Name: ${name}</p>
    <p>Password: ${password}</p>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
