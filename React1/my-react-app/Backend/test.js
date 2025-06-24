import fetch from 'node-fetch';

const BASE = 'http://localhost:3000';

async function testPostValid() {
  const res = await fetch(`${BASE}/post`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Ragul', email: 'ragul@example.com', age: 22 })
  });
  const data = await res.json();
  console.log('POST valid:', res.status, data);
  return data;
}

async function testPostInvalid() {
  const res = await fetch(`${BASE}/post`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ age: 22 })
  });
  const data = await res.json();
  console.log('POST invalid:', res.status, data);
}

async function testGet() {
  const res = await fetch(`${BASE}/get`);
  const data = await res.json();
  console.log('GET:', res.status, data);
}

async function testPut() {
  const res = await fetch(`${BASE}/put`, { method: 'PUT' });
  const data = await res.text();
  console.log('PUT:', res.status, data);
}

async function testPatch() {
  const res = await fetch(`${BASE}/patch`, { method: 'PATCH' });
  const data = await res.text();
  console.log('PATCH:', res.status, data);
}

async function testDelete() {
  const res = await fetch(`${BASE}/delete`, { method: 'DELETE' });
  const data = await res.text();
  console.log('DELETE:', res.status, data);
}

async function runAll() {
  await testPostValid();
  await testPostInvalid();
  await testGet();
  await testPut();
  await testPatch();
  await testDelete();
}

runAll(); 