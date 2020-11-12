import React, { useContext } from 'react';
import { MessageContext } from './Message';
import StarIcon from '../../DesignSys/Icons/Solid/Star';
import { StarIconStyled } from './MessageStyled';

const MessageFaved = () => {
    const { message, favMessageHandler } = useContext(MessageContext);

    return (
        <div className="message_faved" onClick={favMessageHandler}>
            <StarIconStyled faved={message.faved}>
                <StarIcon width={20} />
            </StarIconStyled>
        </div>
    );
};

export default MessageFaved;
