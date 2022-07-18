import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import store from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import {StoreType} from './redux/store';


let rerenderEntireTree = (state:any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());


store.subscribe(()=>{
    rerenderEntireTree(store.getState());
});