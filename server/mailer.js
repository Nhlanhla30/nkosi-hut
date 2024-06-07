// server/mailer.js
const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendEmail({ name, email, message }) {
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
      user: process.env.EMAIL, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
    },
  });

  let info = await transporter.sendMail({
    from: `"${name}" <${email}>`, // sender address
    to: process.env.RECEIVER_EMAIL, // list of receivers
    subject: "Contact Form Submission", // Subject line
    text: message, // plain text body
  });

  console.log('Message sent: %s', info.messageId);
}

module.exports = { sendEmail };
