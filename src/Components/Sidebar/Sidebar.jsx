import React from 'react';
import { useDispatch } from 'react-redux';
import MailBox from './MailBox';
import Categories from './Categories';
import Folders from './Folders';
import tw, { styled } from 'twin.macro';
import Button from '../DesignSys/Buttons/Button';
import PlusIcon from '../DesignSys/Icons/Solid/Plus';

const SidebarStyled = styled.aside`
    width: 250px;
    height: 100%;
    flex-shrink: 0;

    ${tw`flex flex-col p-4`}
    ${tw`bg-gray-800`}
`;

const Sidebar = () => {
    const dispatch = useDispatch();

    const openNewMessageHandler = () => {
        dispatch({ type: 'OPEN_NEW_MESSAGE', payload: {} });
    };

    return (
        <SidebarStyled className="sidebar">
            <div className="compose_new">
                <Button type="compose" openNewMessage={openNewMessageHandler}>
                    <span>Compose</span>
                    <PlusIcon />
                </Button>
            </div>
            <div className="mailbox">
                <MailBox />
                <Categories />
                <Folders />
                <div className="hide_menu_button"></div>
            </div>
        </SidebarStyled>
    );
};

export default Sidebar;
