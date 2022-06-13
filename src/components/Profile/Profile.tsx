import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataProps} from '../../App';

const Profile = (props:any) => {

debugger;
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts postData={props}/>
        </div>

    )
}

export default Profile;