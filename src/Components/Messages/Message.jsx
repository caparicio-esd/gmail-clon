import React from 'react'
import { useDispatch } from 'react-redux'
import dayjs from 'dayjs'
import FolderIcon from './../DesignSys/Icons/Solid/Folder'
import ClipIcon from './../DesignSys/Icons/Outline/PaperClip'
import StarIcon from './../DesignSys/Icons/Solid/Star'
import { MessageStyled, StarIconStyled, FolderIconStyled } from './MessageStyled'

const Message = ({ message }) => {
    const dispatch = useDispatch();
    const formatedTime = dayjs(message.time).format('DD/MM/YYYY');

    const selectMessageHandler = () => {
        dispatch({ type: 'SELECT_MESSAGE', payload: { id: message.id } });
    };

    const favMessageHandler = (ev) => {
        ev.stopPropagation();
        dispatch({ type: 'CHANGE_FAV', payload: { id: message.id } })
    };

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
