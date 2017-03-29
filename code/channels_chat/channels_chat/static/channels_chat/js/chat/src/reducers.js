/**
 * Created by rwar on 15.03.17.
 */

import { combineReducers } from 'redux';
import { SET_USERNAME, SET_TAB,
         ADD_MESSAGE, RECEIVED_MESSAGES, MESSAGE_SENT } from './actions';

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
        case RECEIVED_MESSAGES:
            return state.concat(action.text);
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
