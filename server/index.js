// // server/index.js
// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Add mongoose for MongoDB connection
const userRoutes = require('./routes/users');
const contactRoutes = require('./routes/contact');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Set up the server
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Hello, Nkosi Hut!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const userRoutes = require('./routes/users');
// const contactRoutes = require('./routes/contact');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use('/api/users', userRoutes);
// app.use('/api/contact', contactRoutes);

// const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//   res.send('Hello, Nkosi Hut!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



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