// ChatBox.jsx

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './pop.css'; // Make sure to create this CSS file

const ChatBox = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showCall, setShowCall] = useState(false);

  const handleToggleWhatsApp = () => setShowWhatsApp(!showWhatsApp);
  const handleToggleCall = () => setShowCall(!showCall);

  const whatsappNumber = '8902911152';
  const callingNumber = '9123153528';

  const handleCallNow = () => {
    window.location.href = `tel:${callingNumber}`;
  };

  return (
    <div className="chat-box-container">
      <div className="chat-buttons">
        <Button variant="success" onClick={handleToggleWhatsApp} className="me-3">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </Button>
        <Button variant="primary" onClick={handleToggleCall}>
          <i className="fas fa-phone"></i> Call
        </Button>
      </div>

      {showWhatsApp && (
        <div className="chat-popup">
          <div className="chat-popup-content">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Contact Us on WhatsApp</h5>
              <Button variant="danger" onClick={handleToggleWhatsApp}>
                Close
              </Button>
            </div>
            <p>Click the button below to chat with us on WhatsApp.</p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {showCall && (
        <div className="chat-popup">
          <div className="chat-popup-content">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Call Us</h5>
              <Button variant="danger" onClick={handleToggleCall}>
                Close
              </Button>
            </div>
            <p style={{color:'red',fontFamily:'initial'}}>Enquiry here 9123153528.</p>
            <Button variant="primary" onClick={handleCallNow}>
              <i className="fas fa-phone"></i> Call Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
