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
import {StatePropsType} from './redux/state'


function App(props: StatePropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        newPostText={props.state.profilePage.newPostText}
                        dispatch={props.dispatch}
                        postData={props.state.profilePage.postData}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
