import React from 'react';
import Message from '../components/Message'

function MessageBoard({messages}) {
    return (
        <div className="message-board">
            {messages.map((message, index) => (
                <Message
                    key={index}
                    image= {message.image}
                    username= {message.username}
                    text= {message.text}
                />
            ))}
        </div>
    );
}

export default MessageBoard;
