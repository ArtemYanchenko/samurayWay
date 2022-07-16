export type MessageDataProps = {
    message: string
}

export type MessagesType = {
    messageData: MessageDataProps[]
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
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
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
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}

type ChangeNewTextActionType = {
    type: 'CHANGE-POST'
    newText: string
}

export type StoreType = {
    _state: AllAppType
    getState: () => void
    _callSubscriber: (state: AllAppType) => void
    subscribe: (observer: any) => void
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

export const AddPostAC = (postText: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        postText: postText
    }
}

export const ChangeNewTextAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: 'CHANGE-POST',
        newText: newText
    }
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
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state: AllAppType) {
        console.log('state is changed');
    },
    // addPost(postTitle: string) {
    // },
    // updateNewPostText(newText: string) {
    //
    // },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                // id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = '';
        } else if (action.type === 'CHANGE-POST') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;