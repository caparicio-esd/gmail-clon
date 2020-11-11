import React from 'react'
import MailBox from './MailBox'
import Categories from './Categories'
import Folders from './Folders'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="compose_new"></div>
            <div className="mailbox">
                <MailBox />
                <Categories />
                <Folders />
                <div className="hide_menu_button"></div>
            </div>
        </div>
    )
}

export default Sidebar
