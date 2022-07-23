import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {DialogPostData} from '../../../redux/store';
import {AddPostAC, ChangeNewTextAC} from '../../../redux/profile-reducer';


const MyPosts = (props:any) => {

    const addPost = (newPostText:string) => {
        let action = AddPostAC(newPostText)
        props.dispatch();
    }

    const onPostChange = (text:string) => {
        let action = ChangeNewTextAC(text);
        props.dispatch(action)
    }

    return ( <MyPosts updateNewPostText={onPostChange} addPost={addPost}/>
    )
}

export default MyPosts;
