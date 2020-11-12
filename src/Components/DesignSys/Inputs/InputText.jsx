import React from 'react';
import tw, { styled } from 'twin.macro';

const InputStyled = styled.input`
    width: 100%;
    display: block;
    ${tw`p-2 text-gray-800 outline-none`}
`;

const InputText = (props) => {
    return (
        <InputStyled
            name={props.name}
            id={props.name}
            type={props.type || 'text'}
            placeholder={props.placeholder}
            autocomplete="off"
        />
    );
};

export default InputText;
