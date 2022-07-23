import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {DialogPostData} from '../../../redux/store';
import {AddPostAC, ChangeNewTextAC} from '../../../redux/profile-reducer';

export type MyPostsPropsType = {
    updateNewPostText:(text:string)=>void
    addPost:()=>void
}

const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        addPost()
    }

    const onPostChange = () => {
        //@ts-ignore
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.items}>
            <textarea placeholder="enter you new post" onChange={onPostChange} ref={newPostElement}
                      // value={props.newPostText}
            />
            <button onClick={addPost}>Add Post</button>
            {/*<Post postData={props.postData}/>*/}
        </div>
    )
}

export default MyPosts;
