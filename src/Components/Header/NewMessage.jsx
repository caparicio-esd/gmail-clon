import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import tw, { styled } from 'twin.macro'
import Button from '../DesignSys/Buttons/Button'
import Input from '../DesignSys/Inputs/InputText'
import Textarea from '../DesignSys/Inputs/Textarea'
import CloseIcon from './../DesignSys/Icons/Solid/X'

const NewMessageStyled = styled.div`
    position: fixed;
    bottom: 0;
    right: 1rem;
    width: 450px;
    height: 450px;  
    ${tw`bg-gray-700 flex flex-col`}

    .header {
        ${tw`flex justify-between items-center bg-gray-800 p-2`}
    }
    .main {
        ${tw`flex-1 flex flex-col`}
        form {
            width: 100%;
            ${tw`flex flex-col flex-1`}
            .full_h {
                ${tw`flex flex-col h-full`}
            }
            label {
                ${tw`m-0 py-1 px-2 block bg-gray-500 text-gray-800`}
            }
            textarea {
                ${tw`w-full flex-1`}
            }
        }
    }
    .footer {
        ${tw`flex justify-end items-center border-t-2 border-gray-800 p-2`}
        button {
            ${tw`ml-2`}
        }
    }
`

const NewMessage = () => {
    const dispatch = useDispatch();
    const newMessageReducer = useSelector(state => state.newMessageReducer);

    const closeHandler = () => {
        dispatch({ type: 'CLOSE_NEW_MESSAGE', payload: {} })
    }
    const sendHandler = () => {
        dispatch({ type: 'SEND_MESSAGE', payload: {} })
    }

    return (
        <>
            {newMessageReducer.opened &&
                <NewMessageStyled>
                    <div className="header">
                        <div className="title">New Message</div>
                        <CloseIcon width={20} onClick={closeHandler} />
                    </div>
                    <div className="main">
                        <form>
                            <div className="form_group">
                                <label htmlFor="subject">Subject</label>
                                <Input name="subject" placeholder="Mete un mail" />
                            </div>
                            <div className="form_group full_h">
                                <label htmlFor="">Message</label>
                                <Textarea>Mete un mensaje</Textarea>
                            </div>
                        </form>
                    </div>
                    <div className="footer">
                        <Button clickHandler={sendHandler}>Enviar</Button>
                        <Button clickHandler={closeHandler}>Descartar</Button>
                    </div>
                </NewMessageStyled>
            }
        </>
    )
}

export default NewMessage
