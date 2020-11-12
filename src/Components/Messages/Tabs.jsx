import React from 'react'
import tw, { styled } from 'twin.macro';
import Message from './Message/Message';
import { useSelector } from 'react-redux'

const TabsStyled = styled.div`
    width: 450px;
    height: 100%;
    flex-shrink: 0;
    overflow: auto;

    ${tw`flex flex-col`}
    ${tw`bg-gray-900 border-r border-gray-800`}

    .messages {
        overflow: auto;
    }
`;


const Tabs = () => {
    const {messages} = useSelector(state => state.messagesReducer);

    return (
        <TabsStyled>
            <div className="tab_navigation">
                <div className="tab">
                    tab
                </div>
            </div>
            <div className="messages">
                {messages.map(message => <Message key={message.id} message={message} />)}
            </div>
        </TabsStyled>
    )
}

export default Tabs
