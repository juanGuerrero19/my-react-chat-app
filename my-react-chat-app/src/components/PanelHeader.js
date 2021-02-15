import React from 'react';

function PanelHeader({title}) {
    return (
        <div className="panel-header">
            <span className="panel-header__title">
                {title}
            </span>
        </div>
    );
}

export default PanelHeader;
