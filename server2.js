const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  let html = `
    <h1>Odd & Even Number Separator</h1>
    <form method="GET" action="/">
      <label>Enter numbers (comma-separated):<br>
        <input type="text" name="nums" placeholder="e.g. 1,2,3,4,5" required>
      </label>
      <br><br>
      <button type="submit">Check</button>
    </form>
  `;

  if (query.nums !== undefined) {

    const nums = query.nums.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));

    const evens = nums.filter(n => n % 2 === 0);
    const odds = nums.filter(n => n % 2 !== 0);

    html += `
      <h2>Input Numbers: ${nums.join(', ')}</h2>
      <p><strong>Even Numbers:</strong> ${evens.join(', ') || 'None'}</p>
      <p><strong>Odd Numbers:</strong> ${odds.join(', ') || 'None'}</p>
    `;
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
