import React, { useContext } from 'react';
import { MessageContext } from './Message';
import FolderIcon from '../../DesignSys/Icons/Solid/Folder';
import ClipIcon from '../../DesignSys/Icons/Outline/PaperClip';
import { FolderIconStyled } from './MessageStyled';
import dayjs from 'dayjs';

const MessageMeta = () => {
    const { message } = useContext(MessageContext);
    const formatedTime = dayjs(message.time).format('DD/MM/YYYY');

    return (
        <>
            <div className="message_author_name">{message.authorName}</div>
            <div className="message_meta">
                {message.hasFile && <ClipIcon width={16} />}
                <FolderIconStyled folderId={message.inWhichFolder}>
                    <FolderIcon width={16} />
                </FolderIconStyled>
            </div>
            <div className="message_time">{formatedTime}</div>
        </>
    );
};

export default MessageMeta;
