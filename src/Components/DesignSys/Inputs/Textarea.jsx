import React from 'react'
import tw, { styled } from 'twin.macro'

const TextareaStyled = styled.textarea`
    width: 100%; 
    display: block;
    ${tw`p-2 text-gray-800 outline-none`}
`

const Textarea = (props) => {
    return (
        <TextareaStyled
            name={props.name} id={props.name}
            autocomplete="off"
            defaultValue={props.children}>
        </TextareaStyled>
    )
}

export default Textarea
