import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'

import {DialogItem} from './DialogItem/DialogItem';
import {
    AddMessageAC,
    ChangeMessageAC,
    MessageDataProps,
    StatePropsType,
} from '../../redux/state';


const Message = (props: MessageDataProps) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props: StatePropsType) => {

    let dialogsElements = props.state.profilePage.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.state.messagePage.messageData.map(d => <Message message={d.message}/>)
    let newPost = React.createRef<HTMLInputElement>();

    const addMessageHandler = () => {
        props.dispatch(AddMessageAC(props.state.messagePage.newMessageData))
    }

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.dispatch(ChangeMessageAC(e.currentTarget.value))
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElement}
                <div>
                    <input type="text" onChange={onChangeHandler} ref={newPost} value={props.state.messagePage.newMessageData}/>
                </div>
                <div>
                    <button onClick={addMessageHandler}>Sent Message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;