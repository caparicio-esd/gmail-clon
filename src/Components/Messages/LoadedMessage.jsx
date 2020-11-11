import React from 'react'
import { useDispatch } from 'react-redux'

const LoadedMessage = ({selectedMessage}) => {
    const dispatch = useDispatch();

    const unselectHandler = () => {
        dispatch({ type: 'UNSELECT_MESSAGE', payload: {} });
    }

    return (
        <div style={{flexBasis: '100%'}} onClick={unselectHandler}>
            {selectedMessage && selectedMessage.summary}
        </div>
    )
}

export default LoadedMessage
