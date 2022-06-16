import react from 'react';

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
        ]
    },
    messagePage: {
        messageData: [
            {message: 'Hi'},
            {message: 'Hello'},
            {message: 'Yo'}
        ]
    }
}

export default state;