import React from 'react';
import SettingsIcon from './../DesignSys/Icons/Solid/Cog';
import ViewGridIcon from './../DesignSys/Icons/Solid/ViewGrid';
import userPicture from './../../Assets/images/35.jpg';
import tw, { styled } from 'twin.macro';

const HeaderNavigationStyled = styled.div`
    ${tw`flex p-4 items-center justify-end flex-1`}

    .header_navigation_apps {
        ${tw`flex items-center`}

        .header_navigation_app {
            ${tw`mr-2`}
        }
    }
    .header_navigation_user {
        border-radius: 50%;
        overflow: hidden;
        ${tw`border-4 border-gray-200 border-opacity-25`}
    }
`;

const HeaderNavigation = () => {
    return (
        <HeaderNavigationStyled className="header_navigation">
            <div className="header_navigation_apps">
                <div className="header_navigation_app">
                    <SettingsIcon style={{ width: '21px' }} />
                </div>
                <div className="header_navigation_app">
                    <ViewGridIcon style={{ width: '21px' }} />
                </div>
            </div>
            <div className="header_navigation_user">
                <img src={userPicture} alt="" style={{ width: '50px' }} />
            </div>
        </HeaderNavigationStyled>
    );
};

export default HeaderNavigation;
