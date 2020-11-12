import React from 'react';
import tw, { styled } from 'twin.macro';

const InputStyled = styled.input`
    ${tw`border-b-2 border-gray-800 bg-transparent`}
    ${tw`focus:outline-none focus:border-gray-700`}
    transition: border 350ms ease;
`;

const Input = (props) => {
    return <InputStyled type={props.type || 'text'} placeholder={props.placeholder} />;
};

export default Input;
