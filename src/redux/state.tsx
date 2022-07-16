import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';

export type MessageDataProps = {
    message: string
}

export type MessagesType = {
    messageData: MessageDataProps[]
    newMessageData: string
}

export type DialogDataProps = {
    name: string
    id: number
}

export type PostDataProps = {
    message: string
    likesCount: number
}


export type DialogPostData = {
    newPostText: string
    dispatch: (action: AddPostActionType | ChangeNewTextActionType | AddMessageActionType | ChangeMessageActionType) => void
    postData: PostDataProps[]
}

export type DialogsType = {
    dialogData: DialogDataProps[]
    postData: PostDataProps[]
    newPostText: string
}

export type AllAppType = {
    profilePage: DialogsType
    messagePage: MessagesType
}

export type StatePropsType = {
    state: AllAppType
    dispatch: (action: AddPostActionType | ChangeNewTextActionType | AddMessageActionType | ChangeMessageActionType) => void
}

export type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}

export type ChangeNewTextActionType = {
    type: 'CHANGE-POST'
    newText: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    text: string
}

export type ChangeMessageActionType = {
    type: 'CHANGE-MESSAGE'
    text: string
}

export type StoreType = {
    _state: AllAppType
    getState: () => void
    _callSubscriber: (state: AllAppType) => void
    subscribe: (observer: any) => void
    dispatch: (action: AddPostActionType | ChangeNewTextActionType | AddMessageActionType | ChangeMessageActionType) => void
}

export const AddPostAC = (postText: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}

export const ChangeNewTextAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: 'CHANGE-POST',
        newText: newText
    } as const
}

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

const store: StoreType = {
    _state: {
        profilePage: {
            dialogData: [
                {name: 'Dimych', id: 1},
                {name: 'Valera', id: 2},
                {name: 'Misha', id: 3},
                {name: 'Petya', id: 4},
                {name: 'Artem', id: 5},
                {name: 'Karina', id: 6}
            ],
            postData: [
                {message: 'Hi,how are you', likesCount: 14},
                {message: 'It\'s my first post', likesCount: 73}
            ],
            newPostText: ''
        },
        messagePage: {
            messageData: [
                {message: 'Hi'},
                {message: 'Hello'},
                {message: 'Yo'},
                {message: 'blaBla'}
            ],
            newMessageData: ''

        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state: AllAppType) {
        console.log('state is changed');
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.messagePage = DialogsReducer(this._state.messagePage, action);
        this._callSubscriber(this._state)

    }
}

export default store;