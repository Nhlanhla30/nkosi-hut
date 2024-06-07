// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const contactRoutes = require('./routes/contact');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, Nkosi Hut!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// require('dotenv').config();
// const express = require('express');
// const userRoutes = require('./routes/users');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//     res.send('Hello, Nkosi Hut!')
// })

// app.get('/api/test', (req, res) => {
//     res.json({ message: "Hello from the backend" });
//   });
  






// app.listen(PORT, () => {
//     console.log('Server is running on ${PORT}')
// })