import React from "react";
import classes from './Post.module.css';
import {PostDataProps} from '../../../../redux/store';


type PostPropsType = {
    postData: PostDataProps[]
}

const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>

            {props.postData.map((p) => {
                return <div>
                    <img src="https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool-ru.jpg" alt=""/>
                    <span>{p.message}</span>
                    <div>
                        <span>like {p.likesCount}</span>
                    </div>
                </div>
            })}


        </div>
    )
}

export default Post;