import React from 'react'
import HeaderBrand from './HeaderBrand'
import HeaderSearch from './HeaderSearch'
import HeaderNavigation from './HeaderNavigation'
import tw, { styled } from 'twin.macro'

/**
 * 
 */
const HeaderStyled = styled.header`
    ${tw`flex items-stretch border-b-2 border-gray-800`}

    .header_brand {
        ${tw`flex items-center`}
        width: 250px;
    }
    .header_search {
        width: 450px;
    }
    .header_navigation {

    }
    svg {
        ${tw`fill-current text-gray-400`}
        
        &[fill="none"] {
            fill: none;
            ${tw`stroke-current`}
        }
    }
`;


/**
 * 
 */
const Header = () => {
    return (
        <HeaderStyled className="header">
            <HeaderBrand />
            <HeaderSearch />
            <HeaderNavigation />
        </HeaderStyled>
    )
}

export default Header
