import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import addPost, {updateNewPostText} from './redux/state';

export let rerenderEntireTree = (state:any,addPost:(postTitle:string)=>void) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
