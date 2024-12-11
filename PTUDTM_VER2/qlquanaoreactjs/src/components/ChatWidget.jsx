
import React, { useEffect, useState } from 'react';

const ChatWidget = () => {
  const [userMessage, setUserMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');

  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "fa1aedbe-0fb6-467c-9cb7-3a03eb138480"; // Thay thế bằng ID của bạn
    (function () {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  const fetchAIResponse = async (message) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_API_KEY`, // Thay YOUR_API_KEY bằng key của bạn
        },
        body: JSON.stringify({
          model: 'gpt-4', // Hoặc 'gpt-3.5-turbo' tùy vào yêu cầu
          messages: [{ role: 'user', content: message }],
        }),
      });
      const data = await response.json();
      const botMessage = data.choices[0]?.message?.content || "Sorry, I didn't understand that.";
      setBotResponse(botMessage);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setBotResponse('Error processing your message. Please try again later.');
    }
  };

  const handleUserMessage = (e) => {
    e.preventDefault();
    if (userMessage.trim()) {
      fetchAIResponse(userMessage);
      setUserMessage('');
    }
  };

  return (
    <div>
      <div>
        {/* <form onSubmit={handleUserMessage}>
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <div>
        <h4>Bot Response:</h4>
        <p>{botResponse}</p> */}
      </div>
    </div>
  );
};

export default ChatWidget;
