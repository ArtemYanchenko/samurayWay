import React, {ChangeEvent, KeyboardEvent} from 'react';
import classes from './Dialogs.module.css'

import {DialogItem} from './DialogItem/DialogItem';
import {

    MessageDataProps,
    StatePropsType,
} from '../../redux/store';
import {AddMessageAC, ChangeMessageAC} from '../../redux/dialogs-reducer';


const Message = (props: MessageDataProps) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props: StatePropsType) => {

    let dialogsElements = props.state.profilePage.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.state.messagePage.messageData.map(d => <Message message={d.message}/>)
    let newMessageValue = props.state.messagePage.newMessageData
    let newPost = React.createRef<HTMLInputElement>();

    const addMessageHandler = () => {
        if (newMessageValue !== '') {
            props.dispatch(AddMessageAC(props.state.messagePage.newMessageData.trim()))
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(ChangeMessageAC(e.currentTarget.value))
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newMessageValue !== '') {
            props.dispatch(AddMessageAC(props.state.messagePage.newMessageData))
        }
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElement}
                <div>
                    <input type="text"
                           placeholder="enter your message"
                           value={newMessageValue}
                           onChange={onChangeHandler}
                           onKeyPress={onKeyPressHandler}
                           ref={newPost}/>
                </div>
                <div>
                    <button onClick={addMessageHandler}>Sent Message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;