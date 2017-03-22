/**
 * Created by rwar on 15.03.17.
 */

export const SET_USERNAME = 'SET_USERNAME';
export const SET_TAB = 'SET_TAB';

export const REQUEST_MESSAGES = 'REQUEST_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const RECEIVED_MESSAGES = 'RECEIVED_MESSAGES';


export function setUsername(username)
{
    return {
        type: SET_USERNAME,
        username: username,
    };
}

export function setTab(tab_name) {
    return {
        type: SET_TAB,
        tab_name: tab_name,
    };
}


export function requestMessages() {
    return {
        type: REQUEST_MESSAGES,
    };
}

export function addMessage(text, message_type)
{
    return {
        type: ADD_MESSAGE,
        text: text,
        message_type: message_type,
    };
}

export function receivedMessage(message)
{
    return {
        type: RECEIVED_MESSAGES,
        message: message,
    };
}
