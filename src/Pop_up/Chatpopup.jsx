import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');

      // Simulate AI response
      setTimeout(() => {
        setMessages([...messages, { sender: 'user', text: input }, { sender: 'ai', text: 'Thank you for your message!' }]);
      }, 1000);
    }
  };

  return (
    <>
      <button onClick={toggleChatbox} className="btn btn-primary" style={{ position: 'fixed', left: '10px', bottom: '10px' }}>
        Chat with us
      </button>

      {isOpen && (
        <div className="chatbox position-fixed bottom-0 start-0 bg-white border rounded shadow" style={{ width: '300px', height: '400px' }}>
          <div className="chatbox-header bg-primary text-white p-2 rounded-top">
            <h5 className="mb-0">AI Chatbox</h5>
            <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={toggleChatbox}></button>
          </div>
          <div className="chatbox-body p-2 overflow-auto" style={{ height: '300px' }}>
            {messages.map((msg, index) => (
              <p key={index} className={msg.sender === 'user' ? 'text-end' : 'text-start'}>
                <strong>{msg.sender === 'user' ? 'You' : 'AI'}:</strong> {msg.text}
              </p>
            ))}
          </div>
          <div className="chatbox-footer p-2">
            <input type="text" className="form-control" value={input} onChange={handleInputChange} placeholder="Type a message..." />
            <button className="btn btn-primary mt-2 w-100" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbox;
