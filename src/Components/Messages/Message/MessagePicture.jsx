import React, { useContext } from 'react'
import { MessageContext } from './Message';

const MessagePicture = () => {
    const { message } = useContext(MessageContext);

    return (
        <div className="message_author_pic">
            <img src={message.authorPic} alt={message.authorName} />
        </div>
    )
}

export default MessagePicture
