import React from "react";
import classes from './Post.module.css';
import {PostDataProps} from '../../../../App';



const Post = (props:any) => {
    return (
        <div className={classes.item}>
            <img src="https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool-ru.jpg" alt=""/>
            <span>{props.message}</span>
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;