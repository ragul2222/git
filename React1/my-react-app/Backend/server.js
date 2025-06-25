import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import User from './model/user.js';

// Load environment variables
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
});

app.get('/get', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/post', async (req, res) => {
  try {
    const { name, email, password, age } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required.' });
    }
    const newUser = new User({ name, email, password, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/put', (req, res) => {
  res.send('from put');
});

app.patch('/patch', (req, res) => {
  res.send('from patch');
});

app.delete('/delete', (req, res) => {
  res.send('from delete');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
}); 