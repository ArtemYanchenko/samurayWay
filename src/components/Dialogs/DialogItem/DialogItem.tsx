import React from 'react';
import classes from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {DialogDataProps} from '../../../redux/store';




export const DialogItem = (props:DialogDataProps) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    );
};
