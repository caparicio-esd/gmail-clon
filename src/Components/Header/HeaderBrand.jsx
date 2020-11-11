import React from 'react'
import logo from './../../Assets/images/gmail.svg'
import tw, { styled } from 'twin.macro'

const HeaderBrandStyled = styled.div`
    ${tw`flex p-4`}
    ${tw`bg-gray-800`}
`;

const HeaderBrand = () => {
    return (
        <HeaderBrandStyled className="header_brand">
            <img src={logo} alt="logo" style={{height: '30px'}} />
        </HeaderBrandStyled>
    )
}

export default HeaderBrand
