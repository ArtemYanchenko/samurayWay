import {combineReducers, createStore} from 'redux';
import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagePage: DialogsReducer
})

let store = createStore(reducers);

export default store;