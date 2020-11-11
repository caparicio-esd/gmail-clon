import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import tw, { styled } from 'twin.macro'

const LayoutStyled = styled.div`
    ${tw`bg-gray-900 text-gray-100`}
    height: 100vh;
`;

const Layout = () => {
    return (
        <LayoutStyled className="gmail">
            <Header />
            <Sidebar />
        </LayoutStyled>
    )
}

export default Layout