
const initialState = {
    messageSubject: '',
    messageContent: '', 
    sendingDate: null, 
    opened: false
};

const newMessageReducer = (state = initialState, { type, payload }) => {
    let newState = { ...state };
    
    switch (type) {
        case "OPEN_NEW_MESSAGE":
            newState.opened = true;
            break;

        case "CLOSE_NEW_MESSAGE":
            newState.opened = false;
            newState.messageSubject = '';
            newState.messageContent = '';
            break;

        case "SEND_MESSAGE":
            console.log('sending...')
            break;

        default:
            newState = { ...newState };
    }

    return newState;
};

export { newMessageReducer };
