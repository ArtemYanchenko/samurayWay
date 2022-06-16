import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import state from './redux/state';

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

export type DialogsType = {
    dialogData: DialogDataProps[]
    postData: PostDataProps[]
}

export type AllAppType = {
    profilePage: DialogsType
    messagePage: MessagesType
}

type StatePropsType = {
    state:AllAppType
}

// type AppPropsType = {
//     profilePage: {
//         dialogData: [
//             {name: string, id: number},
//         ],
//         postData: [
//             {message:string, likesCount: number},
//         ]
//     },
//     messagePage: {
//         messageData: [
//             {message: string},
//         ]
//     }
// }

function App(props: any) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile postData={props.state.profilePage.postData}/>}/>
                    {/*<Route path="/dialogs" render={() => <Dialogs dialogData={state.profilePage.dialogData}*/}
                    {/*                                              messageData={state.messagePage.messageData}/>}/>*/}
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
