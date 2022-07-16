import {AddPostActionType, ChangeNewTextActionType, DialogsType} from './state';

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

const ProfileReducer = (state: DialogsType, action: any) => {  // уточнить на сапорте как сделать тип
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