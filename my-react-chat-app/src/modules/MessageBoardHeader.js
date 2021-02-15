import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function MessageBoardHeader({name, userCount}) {
    return (
        <div className="message-board-header">
            <div className="message-board-header__column">
                <h1 className="message-board-header__title">
                    {name}
                    <AiOutlineStar/>
                </h1>
                <span className="message-board-header__text">
                    {userCount} users
                </span>
            </div>
            <div className="message-board-header__column">
                <input
                className="message-board-header__input"
                    placeholder="Search Messages"
                />
            </div>
        </div>
    );
}

export default MessageBoardHeader;
