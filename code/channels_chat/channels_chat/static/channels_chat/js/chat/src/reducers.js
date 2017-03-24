/**
 * Created by rwar on 15.03.17.
 */

import { combineReducers } from 'redux';
import { ADD_MESSAGE, SET_USERNAME, SET_TAB } from './actions';

const chatApp = combineReducers({
    messages,
    currentUser,
    currentTab,
});

function messages(state=[], action)
{
    switch (action.type) {
        case ADD_MESSAGE:
            return state.concat([action.message]);
        default:
            return state;
    }
}

function currentUser(state=null, action)
{
    switch (action.type) {
        case SET_USERNAME:
            // this shall force the string copying
            return (' ' + action.username).slice(1);
        default:
            return state;
    }
}

function currentTab(state='chat', action)
{
    switch (action.type) {
        case SET_TAB:
            return (' ' + action.tab_name).slice(1);
        default:
            return state;
    }
}

export default chatApp
