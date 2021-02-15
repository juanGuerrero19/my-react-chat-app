import React, {useState, useEffect} from 'react';
import PanelHeader from '../components/PanelHeader'
import GroupElement from '../components/GroupElement'
import fakeData from '../data/fakeChannels.json'

function ChannelPanel() {
    const [messageItem, setMessageItem] = useState({})
    const clickMessageItem = (item) => {
        if (messageItem && item != messageItem) {
            messageItem.selected = false
        }
        item.selected = true
        setMessageItem(item)
    }
    
    useEffect(() => {
        if (fakeData.fakeData.fakeChannels.length > 0){
            setMessageItem(fakeData.fakeData.fakeChannels[0])
            fakeData.fakeData.fakeChannels[0].selected = true
        }
    }, [])

    return (
        <div className="channels-panel">
            <PanelHeader
                title="My React Chat"
            />
            {/* favorite channels */}
            <div className="channels-panel__group">
                <GroupElement
                    title="Favorites"
                    iconTitle="star"
                    items={fakeData.fakeData.fakeFavorites}
                    onClickEvent={clickMessageItem}
                />
            </div>
            {/* all channels */}
            <div className="channels-panel__group">
                <GroupElement
                    title="Channels"
                    items={fakeData.fakeData.fakeChannels}
                    onClickEvent={clickMessageItem}
                />
            </div>
            {/* direct messages */}
            <div className="channels-panel__group">
                <GroupElement
                    title="Direct Messages"
                    items={fakeData.fakeData.fakeUsers}
                    onClickEvent={clickMessageItem}
                />
            </div>
        </div>
    );
}

export default ChannelPanel;
