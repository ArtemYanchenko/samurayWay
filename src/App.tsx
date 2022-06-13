import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {state} from './redux/state';

export type DialogDataProps = {
    name: string
    id: number
}

export type MessageDataProps = {
    message: string
}

export type PostDataProps = {
    message:string
    likesCount:number
}

export type DialogsType = {
    dialogData: Array<DialogDataProps>
    postData:Array<PostDataProps>
}

export type MessagesType = {
    messageData: Array<MessageDataProps>
}

export type AllAppType = {
    profilePage: DialogsType
    messagePage: MessagesType
}

function App(props:any) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile postData={state.profilePage.postData}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogData={state.profilePage.dialogData}
                                                                  messageData={state.messagePage.messageData}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
