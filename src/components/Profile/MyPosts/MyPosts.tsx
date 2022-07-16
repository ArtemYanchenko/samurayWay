import React, {ChangeEvent, ChangeEventHandler } from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {AddPostAC, ChangeNewTextAC, DialogPostData} from '../../../redux/state';


const MyPosts = (props: DialogPostData) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onClickHandler = () => {
        props.dispatch(AddPostAC(props.newPostText));
    }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(ChangeNewTextAC(e.currentTarget.value))
    }

    return (
        <div className={classes.items}>
            <textarea onChange={onPostChange} ref={newPostElement} />
            <button onClick={onClickHandler}>Add Post</button>
            <Post postData={props.postData} />
        </div>
    )
}

export default MyPosts;
