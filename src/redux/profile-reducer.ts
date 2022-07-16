import {AddPostActionType, ChangeNewTextActionType, DialogsType} from './state';

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