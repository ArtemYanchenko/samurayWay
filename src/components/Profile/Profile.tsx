import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DialogPostData, DialogsType} from '../../redux/store';



const Profile = (props:DialogPostData) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            {/*//@ts-ignore*/}
            <MyPosts newPostText={props.newPostText}
                     dispatch={props.dispatch}
                     postData={props.postData}
            />
        </div>

    )
}

export default Profile;