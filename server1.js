const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  let html = `
    <h1>Odd or Even Checker</h1>
    <form method="GET" action="/">
      <label>Enter a number:
        <input type="number" name="num" required>
      </label>
      <button type="submit">Check</button>
    </form>
  `;

  if (query.num !== undefined) {
    const num = parseInt(query.num);

    if (!isNaN(num)) {
      const result = (num % 2 === 0) ? "Even Number" : "Odd Number";
      html += `<h2>Result: ${num} is an ${result}</h2>`;
    } else {
      html += `<p>Please enter a valid number.</p>`;
    }
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
