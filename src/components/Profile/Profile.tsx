import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DialogPostData} from '../../App';
import {updateNewPostText} from '../../redux/state';

const Profile = (props:DialogPostData) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts postData={props.postData}
                     newPostText={props.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>

    )
}

export default Profile;