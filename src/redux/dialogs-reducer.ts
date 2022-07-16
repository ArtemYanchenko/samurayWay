import {AddMessageActionType, ChangeMessageActionType, MessagesType} from './state';

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