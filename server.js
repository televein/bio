// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Configure nodemailer with your email server settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'televeininfo@gmail.com',
    pass: 'vvoljkwkasckpnim',
  },
  tls: {
    rejectUnauthorized: false, // Disable SSL verification (for development only)
  },
});

app.post('/send-email', (req, res) => {
  const { to, subject,selectedWeight,selectedLayer,selectedTheme,selectedFlavor,description,deliveryDate, message } = req.body;

  const mailOptions = {
    from: 'televeininfo@gmail.com',
    to,
    subject: `Message from : ${subject}`,
    text: `Hello ,\n\n${message}\n Weight:${selectedWeight}\n Layer:${selectedLayer}\n Theme:${selectedTheme}\n Flavor:${selectedFlavor}\n Description:${description}\n Delivery Date:${deliveryDate}\nBest regards,\nYour App`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', info.response);
      console.log('Email sent:', selectedWeight);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
