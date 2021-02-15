import React from 'react';

function CardContainer({children, noPaddingRight, smallSize, fullHeight}) {
    const paddingClass = noPaddingRight ? "card-container--no-padding-right" : ""
    const smallSizeClass = smallSize ? "card-container--small-size" : ""
    const fullHeightClass = fullHeight ? "card-container--full-height" : ""

    return (
        <div className={`card-container ${paddingClass} ${smallSizeClass} ${fullHeightClass}`}>
            <div className="card-container__background">
                {children}
            </div>
        </div>
    );
}

export default CardContainer;
