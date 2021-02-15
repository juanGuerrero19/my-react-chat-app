import React from 'react';
import MessageBoard from '../modules/MessageBoard'
import ChannelInformationPanel from '../modules/ChannelInformationPanel'
import ChannelsPanel from '../modules/ChannelsPanel'
import MessageInputPanel from '../modules/MessageInputPanel'
import MessageBoardHeader from '../modules/MessageBoardHeader'
import CardContainer from '../components/CardContainer'
import faker from 'faker'

const fakeChannel = {
    name: faker.name.title(),
    users: [
        {
            "username": "Davonte"
        },
        {
            "username": "Olin"
        },
        {
            "username": "Eino"
        }
    ],
    messages: []
}

for (var i = 0; i < 15; i ++) {
    fakeChannel.messages.push({
        image: faker.image.image(),
        username: faker.name.firstName(),
        text: faker.git.commitMessage()
    })
}

function Home() {
    return (
        <div className="home-page">
            <ChannelsPanel/>
            <div className="home-page__content">
                <div className="home-page__row">  
                    <div className="home-page__column">
                        {/* current channel header */}
                        <CardContainer noPaddingRight>
                            <MessageBoardHeader
                                username={fakeChannel.username}
                                userCount={fakeChannel.users.length}
                            />
                        </CardContainer>
                        {/* current channel message board */}
                        <CardContainer fullHeight noPaddingRight>
                            <MessageBoard
                                messages={fakeChannel.messages}
                            />
                        </CardContainer>
                    </div>
                    {/* channel information */}
                    <CardContainer smallSize>
                        <ChannelInformationPanel/>
                    </CardContainer>
                </div>
                {/* user chat */}
                <CardContainer>
                    <MessageInputPanel/>
                </CardContainer>
            </div>
        </div>
    );
}

export default Home;
