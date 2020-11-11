import React from 'react'
import tw, { styled } from 'twin.macro';

const ButtonComplete = styled.button`
    ${tw`bg-white text-gray-900 p-2 text-center w-full rounded-full`}
    ${tw`flex items-center justify-center`}

    svg {
        width: 34px;
        ${tw`ml-2`}
    }
`;

const ButtonStyled = styled.button`
    display: inline-block;
    ${tw`px-4 py-2 border-2 border-blue-500 rounded`}
    ${tw`uppercase tracking-wide font-semibold`}
`;

const Button = (props) => {
    let Btn = null;
    
    switch (props.type) {
        case "compose":
            Btn = ButtonComplete;
            break;
        default:
            Btn = ButtonStyled;
    }

    return (
        <Btn buttonType={props.type}>{props.children}</Btn>
    )
}

export default Button
