import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {DialogPostData} from '../../../redux/state';
import {AddPostAC, ChangeNewTextAC} from '../../../redux/profile-reducer';


const MyPosts = (props: DialogPostData) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onClickHandler = () => {
        props.dispatch(AddPostAC(props.newPostText));
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(ChangeNewTextAC(e.currentTarget.value))
    }

    return (
        <div className={classes.items}>
            <textarea placeholder="enter you new post" onChange={onPostChange} ref={newPostElement}
                      value={props.newPostText}/>
            <button onClick={onClickHandler}>Add Post</button>
            <Post postData={props.postData}/>
        </div>
    )
}

export default MyPosts;
