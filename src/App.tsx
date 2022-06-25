import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import {updateNewPostText} from './redux/state';

export type MessageDataProps = {
    message: string
}

export type MessagesType = {
    messageData: MessageDataProps[]
}

export type DialogDataProps = {
    name: string
    id: number
}

export type PostDataProps = {
    message: string
    likesCount: number
}


export type DialogPostData = {
    postData: PostDataProps[]
    addPost:(postTitle:string)=>void
    updateNewPostText:(newText:string)=>void
    newPostText: string
}

export type DialogsType = {
    dialogData: DialogDataProps[]
    postData: PostDataProps[]
    newPostText:string
}

export type AllAppType = {
    profilePage: DialogsType
    messagePage: MessagesType
}

type StatePropsType = {
    state: AllAppType
    addPost:(postTitle:string)=>void
    updateNewPostText:(newText:string)=>void
}


function App(props: StatePropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        postData={props.state.profilePage.postData}
                        addPost={props.addPost}
                        newPostText={props.state.profilePage.newPostText}
                        updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs profilePage={props.state.profilePage}
                                                                  messagePage={props.state.messagePage}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
