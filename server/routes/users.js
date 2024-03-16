const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Example route for creating a new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
