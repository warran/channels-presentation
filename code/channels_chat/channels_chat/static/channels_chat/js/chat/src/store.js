/**
 * Created by rwar on 15.03.17.
 */

import { createStore } from 'redux';
import chatAppReducer from 'reducers';

export const MessageTypes = {
    REGULAR_MESSAGE: 'REGULAR_MESSAGE',
    QUESTION_MESSAGE: 'QUESTION_MESSAGE',
};

let store = createStore(chatAppReducer);

store.prototype.chatMessages = function ()
{
    return this.messages.filter((msg) =>
    {
        return msg.type == MessageTypes.REGULAR_MESSAGE;
    });
};

store.prototype.chatQuestions = function ()
{
    return this.messages.filter((msg) =>
    {
        return msg.type == MessageTypes.QUESTION_MESSAGE;
    });
};
