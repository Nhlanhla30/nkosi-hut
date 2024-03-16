require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/users');
const cors = require('cors');

const app = express();
app.use(cors());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello, Nkosi Hut!')
})

app.get('/api/test', (req, res) => {
    res.json({ message: "Hello from the backend" });
  });
  






app.listen(PORT, () => {
    console.log('Server is running on ${PORT}')
})