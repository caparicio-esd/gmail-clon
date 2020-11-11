import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import tw, { styled } from 'twin.macro'
import Tabs from './Messages/Tabs';
import LoadedMessage from './Messages/LoadedMessage';

const LayoutStyled = styled.div`
    ${tw`bg-gray-900 text-gray-100 flex flex-col`}
    height: 100vh;
    overflow: hidden;
    
    .main {
        ${tw`flex-1 flex`}
        overflow: auto;
    }
`;

const Layout = () => {
    const {selectedMessage} = useSelector(state => state.messagesReducer);

    return (
        <LayoutStyled className="gmail">
            <Header />
            <div className="main">
                <Sidebar />
                <Tabs />
                <LoadedMessage selectedMessage={selectedMessage} />
            </div>
        </LayoutStyled>
    )
}

export default Layout