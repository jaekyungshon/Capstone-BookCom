import React, { useState } from 'react';
import axios from 'axios';

function SectionChatBot() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        const userMessage = { text: userInput, user: 'user' };
        setChatHistory([...chatHistory, userMessage]);
        setUserInput('');

        try {
            const response = await axios.post('/api/chat', { text: userInput });
            const botMessage = { text: response.data, user: 'bot' };
            setChatHistory([...chatHistory, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <div className="chat-container">
                {chatHistory.map((message, index) => (
                    <div key={index} className={`message ${message.user}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="user-input">
                <input
                    type="text"
                    value={userInput}
                    onChange={handleUserInput}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default SectionChatBot;