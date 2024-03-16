const mongoose = require('mongoose');
require('dotenv').config(); // Make sure to install dotenv if you're using environment variables
require('./db')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/nkosiHut';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.error('MongoDB connection error:', err));
