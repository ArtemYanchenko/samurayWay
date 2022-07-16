export type MessageDataProps = {
    message: string
}

export type MessagesType = {
    messageData: MessageDataProps[]
    newMessageData: string
    // newMessage:string
    // dispatch:(action: AddPostActionType | ChangeNewTextActionType | AddMessageActionType) => void
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

type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}

type ChangeNewTextActionType = {
    type: 'CHANGE-POST'
    newText: string
}

type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    text: string
}

type ChangeMessageActionType = {
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                message: action.postText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === 'CHANGE-POST') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                message: action.text
            }
            this._state.messagePage.messageData.push(newMessage);
            this._callSubscriber(this._state);
        } else if (action.type === 'CHANGE-MESSAGE') {
            this._state.messagePage.newMessageData = action.text;
            this._callSubscriber(this._state);
        }
    }
}

export default store;