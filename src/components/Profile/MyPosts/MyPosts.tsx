import React, {ChangeEvent, ChangeEventHandler } from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {DialogPostData} from '../../../App';
import {updateNewPostText} from '../../../redux/state';

const MyPosts = (props: DialogPostData) => {

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onClickHandler = () => {
        props.addPost(props.newPostText);
    }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={classes.items}>
            <textarea value={props.newPostText} onChange={onPostChange}/>
            <button onClick={onClickHandler}>Add Post</button>
            <Post postData={props.postData} />
        </div>
    )
}

export default MyPosts;
