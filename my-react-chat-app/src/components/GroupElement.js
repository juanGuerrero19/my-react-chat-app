import React from 'react';
import { AiFillStar, AiOutlineNumber } from 'react-icons/ai';
import { BsFillCircleFill } from 'react-icons/bs';

function GroupElement({title, iconTitle, items, onClickEvent}) {
    const getIcon = (name) => {
        switch (name) {
            case "star":
                return <AiFillStar className="group-element__icon"/>
            case "channel":
                return <AiOutlineNumber className="group-element__icon"/>
            case "online":
                return <BsFillCircleFill className="group-element__icon group-element__icon--green"/>
            case "offline":
                return <BsFillCircleFill className="group-element__icon group-element__icon--gray"/>
            default:
                return ""
        }
    }
    
    return (
        <div className="group-element">
            <span className="group-element__title">
                {getIcon(iconTitle)}
                {title}
            </span>
            <ul className="group-element__list">
                {items.map((item, index) => (
                    <li
                        className={`group-element__item 
                            ${item.selected ? "group-element__item--selected" : ""}`}
                        key={index}
                        onClick={() => onClickEvent(item)}
                    >
                        {getIcon(item.icon)}
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GroupElement;
