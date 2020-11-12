import React from 'react';
import SearchIcon from '../DesignSys/Icons/Outline/Search';
import InputSearch from '../DesignSys/Inputs/InputSearch';
import DotsVerticalIcon from '../DesignSys/Icons/Outline/DotsVertical';
import tw, { styled } from 'twin.macro';

const HeaderSearchStyled = styled.div`
    ${tw`flex items-center p-4`}

    input {
        ${tw`flex-1 mx-4 py-1`}
    }
`;

const HeaderSearch = () => {
    return (
        <HeaderSearchStyled className="header_search">
            <SearchIcon style={{ width: '21px' }} />
            <InputSearch placeholder="Busca un mensaje" />
            <DotsVerticalIcon style={{ width: '21px' }} />
        </HeaderSearchStyled>
    );
};

export default HeaderSearch;
