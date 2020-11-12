import React, { useContext } from 'react';
import DotsVerticalIcon from '../../DesignSys/Icons/Solid/DotsVertical';
import CloseIcon from '../../DesignSys/Icons/Solid/X';
import EditIcon from '../../DesignSys/Icons/Solid/PencilAlt';
import { MessageContext } from './Message';

const MessageMenu = () => {
    const { openedMenu, openMenuHandler } = useContext(MessageContext);

    return (
        <div className="message_menu">
            <DotsVerticalIcon width={16} onClick={openMenuHandler} />
            {openedMenu && (
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
            )}
        </div>
    );
};

export default MessageMenu;
