import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import dayjs from 'dayjs'
import FolderIcon from './../DesignSys/Icons/Solid/Folder'
import ClipIcon from './../DesignSys/Icons/Outline/PaperClip'
import StarIcon from './../DesignSys/Icons/Solid/Star'
import DotsVerticalIcon from './../DesignSys/Icons/Solid/DotsVertical'
import CloseIcon from './../DesignSys/Icons/Solid/X'
import EditIcon from './../DesignSys/Icons/Solid/PencilAlt'
import { MessageStyled, StarIconStyled, FolderIconStyled } from './MessageStyled'

const Message = ({ message }) => {
    const dispatch = useDispatch();
    const [openedMenu, setOpenedMenu] = useState(false);
    const formatedTime = dayjs(message.time).format('DD/MM/YYYY');

    const selectMessageHandler = () => {
        dispatch({ type: 'SELECT_MESSAGE', payload: { id: message.id } });
    };

    const favMessageHandler = (ev) => {
        ev.stopPropagation();
        dispatch({ type: 'CHANGE_FAV', payload: { id: message.id } })
    };

    const openMenuHandler = (ev) => {
        ev.stopPropagation();
        const open = openedMenu;
        setOpenedMenu(!open);
    };

    useEffect(() => {
        document.addEventListener('click', () => {
            if (openedMenu) {
                setOpenedMenu(!openedMenu);
            }
        });
    });

    return (
        <MessageStyled
            selected={message.selected}
            className="message"
            onClick={selectMessageHandler}>

            <div className="message_author_pic">
                <img src={message.authorPic} alt={message.authorName} />
            </div>

            <div className="message_content">
                <div className="message_header">
                    <div className="message_author_name">{message.authorName}</div>
                    <div className="message_meta">
                        {message.hasFile && <ClipIcon width={16} />}
                        <FolderIconStyled folderId={message.inWhichFolder}>
                            <FolderIcon width={16} />
                        </FolderIconStyled>
                    </div>
                    <div className="message_time">{formatedTime}</div>
                    <div className="message_menu">
                        <DotsVerticalIcon width={16} onClick={openMenuHandler} />
                        {openedMenu &&
                            <div className="message_menu_content">
                                <ul>
                                    <li>
                                        <CloseIcon width={16} />
                                        <span>Close</span>
                                    </li>
                                    <li>
                                        <EditIcon width={16} />
                                        <span>Edit</span>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <div className="message_subject">{message.subject}</div>
                <div className="message_footer">
                    <div className="message_summary">{message.summary}</div>
                    <div className="message_faved" onClick={favMessageHandler}>
                        <StarIconStyled faved={message.faved}>
                            <StarIcon width={20} />
                        </StarIconStyled>
                    </div>
                </div>
            </div>

        </MessageStyled >
    )
}

export default Message
