// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
const jsonServerRouter = jsonServer.router('db.json');
const port = 3001;

app.use(bodyParser.json());

// Endpoint for sending emails
app.post('/api/send-email', async (req, res) => {
  const { recipient, subject, message } = req.body;

  // Replace these with your email and app-specific password or use environment variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thanhnam.humg93@gmail.com',
      pass: 'wogu jigq ielt knqi',
    },
  });

  const mailOptions = {
    from: 'thanhnam.humg93@gmail.com',
    to: recipient,
    subject: subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// Use the JSON Server router for other endpoints
app.use(cors({ origin: true }))
app.use('/api', jsonServerRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
