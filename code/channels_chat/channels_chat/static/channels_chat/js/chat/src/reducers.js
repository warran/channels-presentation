/**
 * Created by rwar on 15.03.17.
 */

import { SET_USERNAME, SET_TAB,
         ADD_MESSAGE, RECEIVED_MESSAGES, MESSAGE_SENT } from './actions';

const initialState = {
    lastMessage: undefined,
    messages: [],
    currentTab: 'chat',
    currentUser: undefined
};

function chatApp(state=initialState, action)
{
    return {
        lastMessage: lastMessage(state, action),
        messages: messages(state, action),
        currentTab: currentTab(state.currentTab, action),
        currentUser: currentUser(state.currentUser, action),
    };
}

function _createMessage(state, text)
{
    return {
        user: state.currentUser,
        type: state.currentTab,
        time: new Date().toUTCString(),
        text: text,
    };
}

function lastMessage(state, action)
{
    switch (action.type) {
        case ADD_MESSAGE:
            return _createMessage(state, action.text);
        case MESSAGE_SENT:
            return null;
        default:
            return state.lastMessage;
    }
}

function messages(state, action)
{
    switch (action.type) {
        case ADD_MESSAGE:
            const msg = _createMessage(state, action.text);
            return state.messages.concat([msg]);
        case RECEIVED_MESSAGES:
            return state.messages.concat(action.text);
        default:
            return state.messages;
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
