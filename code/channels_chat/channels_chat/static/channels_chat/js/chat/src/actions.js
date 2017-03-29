/**
 * Created by rwar on 15.03.17.
 */

export const SET_USERNAME = 'SET_USERNAME';
export const SET_TAB = 'SET_TAB';

export const CONNECT = 'CONNECT';
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

export function addMessage(text)
{
    return {
        type: ADD_MESSAGE,
        text: text,
    };
}

export function receivedMessages(messages)
{
    return {
        type: RECEIVED_MESSAGES,
        messages: messages,
    };
}
