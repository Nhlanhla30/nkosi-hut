// server/routes/contact.js
const express = require('express');
const router = express.Router();
const { sendEmail } = require('../mailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendEmail({ name, email, message });
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;
