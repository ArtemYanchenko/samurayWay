import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt=""/>
            <div>
                ava + description
            </div>
            <input type='text'/>
            <button>Add Post</button>
        </div>
    )
}

export default ProfileInfo;