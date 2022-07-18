import {AddPostActionType, ChangeNewTextActionType, DialogsType} from './store';

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

let initialState = {
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
}

const ProfileReducer = (state: DialogsType = initialState, action:any) => {  // уточнить на сапорте как сделать тип
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    message: action.postText,
                    likesCount: 0
                };
                state.postData.push(newPost);
                state.newPostText = '';
                return state;
            case 'CHANGE-POST':
                state.newPostText = action.newText;
                return state;
            default:
                return state;
        }
    };

export default ProfileReducer;