import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MessageStyled } from './MessageStyled';
import MessageFaved from './MessageFaved';
import MessageMenu from './MessageMenu';
import MessageMeta from './MessageMeta';
import MessagePicture from './MessagePicture';

/**
 *
 */
const MessageContext = React.createContext();

/**
 *
 */
const Message = ({ message }) => {
    const [openedMenu, setOpenedMenu] = useState(message.openedMenu);
    const dispatch = useDispatch();

    const selectMessageHandler = () => {
        dispatch({ type: 'SELECT_MESSAGE', payload: { id: message.id } });
    };

    const favMessageHandler = (ev) => {
        ev.stopPropagation();
        dispatch({ type: 'CHANGE_FAV', payload: { id: message.id } });
    };

    const openMenuHandler = (ev) => {
        ev.stopPropagation();
        setOpenedMenu(true);
    };

    useEffect(() => {
        document.addEventListener('click', () => {
            if (openedMenu) {
                setOpenedMenu(false);
            }
        });
    });

    return (
        <MessageContext.Provider
            value={{
                message,
                openedMenu,
                openMenuHandler,
                favMessageHandler,
            }}
        >
            <MessageStyled
                selected={message.selected}
                className="message"
                onClick={selectMessageHandler}
            >
                <MessagePicture />
                <div className="message_content">
                    <div className="message_header">
                        <MessageMeta />
                        <MessageMenu />
                    </div>
                    <div className="message_subject">{message.subject}</div>
                    <div className="message_footer">
                        <div className="message_summary">{message.summary}</div>
                        <MessageFaved />
                    </div>
                </div>
            </MessageStyled>
        </MessageContext.Provider>
    );
};

export { MessageContext };
export default Message;
