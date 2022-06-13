import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {PostDataProps} from '../../../App';

const MyPosts = (props:any) => {
    let photoLink = "https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool-ru.jpg";



    return (
        <div className={classes.items}>
            <Post postData={props} />
        </div>
    )
}


export default MyPosts;
