import React, { useState } from 'react';
import '../styles/CustomerSupport.css';
import { FaCommentDots, FaTimes } from 'react-icons/fa';

function CustomerSupportPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const toggleSupport = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (!userMessage) return;

    // Add user message to the responses
    setResponses((prevResponses) => [...prevResponses, { text: userMessage, sender: 'user' }]);
    setMessageCount(messageCount + 1);
    setUserMessage('');

    setIsTyping(true);

    // Simulate typing delay and show the corresponding response
    setTimeout(() => {
      const autoReplies = [
        "Thank you for reaching out! How can I assist you further?",
        "We offer a variety of services. Would you like more information?",
        "Our team is here to help you with any questions you have.",
        "You can check out our FAQ page for quick answers to common questions.",
        "If you need personalized assistance, please feel free to ask."
      ];

      // Display one auto-reply based on message count
      setResponses((prevResponses) => [
        ...prevResponses,
        { text: autoReplies[messageCount], sender: 'support' }
      ]);

      // After 5 messages, show the contact email for further inquiries
      if (messageCount >= 5) {
        setResponses((prevResponses) => [
          ...prevResponses,
          { text: "For further inquiries, you can reach us at:", sender: 'support' },
          {
            text: <a  href="mailto:trainingtech84@gmail.com"> <span style={{color:"#ddd"}} >trainingtech84@gmail.com </span></a>,
            sender: 'support'
          }
        ]);
      }

      setIsTyping(false);
    }, 2000); // Typing delay
  };

  return (
    <div className={`customer-support-container ${isOpen ? 'open' : ''}`}>
      <div className="support-toggle" onClick={toggleSupport}>
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </div>
      {isOpen && (
        <div className="support-content">
          <div className="online-green-dot"></div>
          <h3>Online Support</h3>
          <p>How can we help you today?</p>

          {/* Chat Messages */}
          <div className="messages-container">
            {responses.map((response, index) => (
              <div
                key={index}
                className={`message ${response.sender === 'user' ? 'user-message' : 'support-message'}`}
              >
                {typeof response.text === "string" ? response.text : response.text}
              </div>
            ))}
            {isTyping && <div className="typing-indicator">Typing...</div>}
          </div>

          {/* User Input */}
          <textarea
            placeholder="Type your message here..."
            value={userMessage}
            onChange={handleMessageChange}
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      )}
    </div>
  );
}

export default CustomerSupportPage;
