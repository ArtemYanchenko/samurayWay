import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {AllAppType} from '../../App';
import {DialogItem} from './DialogItem/DialogItem';




const Message = (props: any) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props: any) => {
    let dialogsElements = props.profilePage.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElement = props.messagePage.messageData.map(d => <Message message={d}/>)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;