import React from 'react';
import classes from './Dialogs.module.css'

import {DialogItem} from './DialogItem/DialogItem';
import {AllAppType, MessageDataProps} from '../../redux/state';



const Message = (props: MessageDataProps) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props: AllAppType) => {

    let dialogsElements = props.profilePage.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.messagePage.messageData.map(d => <Message message={d.message}/>)
    let newPost = React.createRef<HTMLInputElement>();

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElement}
                <div>
                    <input type="text" ref={newPost}/>
                </div>
                <div>
                    <button onClick={()=>{alert(newPost.current?.value)}}>Sent Message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;