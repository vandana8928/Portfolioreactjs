// WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '9594218630'; // Replace with your WhatsApp Business phone number
  const apiLink = `https://wa.me/${phoneNumber}`;

  return (
    <a href={apiLink} target="_blank" rel="noopener noreferrer">
      <button>Contact us on WhatsApp</button>
    </a>
  );
};

export default WhatsAppButton;
