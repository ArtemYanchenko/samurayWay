import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import store from './redux/state';
import {BrowserRouter} from 'react-router-dom';


let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree);