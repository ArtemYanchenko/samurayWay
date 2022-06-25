import {rerenderEntireTree} from '../render';

let state = {
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
}

export let addPost = (postTitle:string) => {
    let newPost = {
        message: postTitle,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state,addPost);
    state.profilePage.newPostText = '';
};

export let updateNewPostText = (newText:string) => {
   state.profilePage.newPostText = newText;
    rerenderEntireTree(state,addPost);
};

export default state;