// App.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const EmailSender = () => {
  const { loginStatus } = useAuth();
  const [emailData, setEmailData] = useState({
    to: 'televeininfo@gmail.com',
    subject: 'Regarding Your Inquiry',
    name: loginStatus,
    message: 'This is the content of my email.',
  });

  const sendEmail = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <h2>Email Sender</h2>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default EmailSender;
