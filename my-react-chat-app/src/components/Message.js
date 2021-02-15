import React from 'react';

function Message({username, image, text}) {
    return (
        <div className="message">
            <div className="message__image-container">
                <img
                    className="message__image"
                    src={image}
                    alt="alt"
                />
            </div>
            <div className="message__content">
                <div className="message__identity">
                    <span className="message__username">
                        {username}
                    </span>
                    <span className="message__time">
                        a few moments ago
                    </span>
                </div>
                <p className="message__text">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default Message;
