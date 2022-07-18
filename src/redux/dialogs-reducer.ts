import {AddMessageActionType, ChangeMessageActionType, MessagesType} from './store';

export const AddMessageAC = (text: string): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE',
        text: text
    } as const
}

export const ChangeMessageAC = (text: string): ChangeMessageActionType => {
    return {
        type: 'CHANGE-MESSAGE',
        text: text
    } as const
}

let initialState = {
    messageData: [
        {message: 'Hi'},
        {message: 'Hello'},
        {message: 'Yo'},
        {message: 'blaBla'}
    ],
    newMessageData: ''

}

const DialogsReducer = (state: MessagesType = initialState, action: any) => {   // уточнить на сапорте как сделать тип
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                message: action.text
            }
            state.messageData.push(newMessage);
            state.newMessageData = '';
            return state;
        case 'CHANGE-MESSAGE':
            state.newMessageData = action.text;
            return state;
        default:
            return state;
    }

}
export default DialogsReducer;