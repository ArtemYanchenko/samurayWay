import {AddMessageActionType, ChangeMessageActionType, MessagesType} from './state';

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

const DialogsReducer = (state: MessagesType, action: any) => {   // уточнить на сапорте как сделать тип
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