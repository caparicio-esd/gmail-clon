import messagesRaw from "./../Api/messages.json";

const initialState = {
    messages: messagesRaw,
    selectedMessage: null,
    filterText: ''
};

const messagesReducer = (state = initialState, { type, payload }) => {
    let newState = { ...state };
    switch (type) {
        case "CHANGE_FAV":
            const idx = newState.messages.findIndex((m) => m.id === payload.id);
            const message = newState.messages[idx];
            message.faved = !message.faved;
            newState.messages.splice(idx, 1, message);
            break;

        case "SELECT_MESSAGE":
            newState.selectedMessage = newState.messages.find((m) => m.id === payload.id);
            newState.messages.filter((m) => m.selected).map(m => m.selected = false);
            newState.messages.find((m) => m.id === payload.id).selected = true;
            break;

        case "UNSELECT_MESSAGE":
            newState.selectedMessage = null;
            newState.messages.filter((m) => m.selected).map(m => m.selected = false);
            break;

        default:
            newState = { ...newState };
    }
    return newState;
};

export { messagesReducer };
