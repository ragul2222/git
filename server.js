const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  // HTML Form
  let html = `
    <h1>Basic Math Operations</h1>
    <form method="GET" action="/">
      <label>Enter a: <input type="number" name="a" step="any" required></label><br><br>
      <label>Enter b: <input type="number" name="b" step="any" required></label><br><br>
      <button type="submit">Calculate</button>
    </form>
  `;

  // If a and b are given, show results
  if (query.a !== undefined && query.b !== undefined) {
    const a = parseFloat(query.a);
    const b = parseFloat(query.b);

    if (!isNaN(a) && !isNaN(b)) {
      const sum = a + b;
      const diff = a - b;
      const prod = a * b;
      const quot = b === 0 ? 'Cannot divide by zero!' : a / b;

      html += `
        <h2>Results</h2>
        <p>a = ${a}</p>
        <p>b = ${b}</p>
        <ul>
          <li>Addition: ${sum}</li>
          <li>Subtraction: ${diff}</li>
          <li>Multiplication: ${prod}</li>
          <li>Division: ${quot}</li>
        </ul>
      `;
    } else {
      html += `<p>Please enter valid numbers.</p>`;
    }
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
