/**
 * Created by rwar on 26.03.17.
 */

import redux from 'redux';

import * as actions from './actions';

function _createMessage(store, text)
{
    return {
        user: store.currentUser,
        type: store.currentTab,
        time: new Date().toUTCString(),
        text: text,
    };
}

const websocketMiddleware = () =>
{
    let websocket = null;

    // this has to take websocket to keep it alive
    const onMessage = (ws, store) => (event) =>
    {
        console.log(event);

        const msgs = JSON.parse(event.data);
        store.dispatch(actions.receivedMessages(msgs));
    };

    return (store) => (next) => (action) =>
    {
        switch (action.type) {
            case actions.CONNECT:
                if(websocket !== null) {
                    websocket.close();
                }

                const url = 'ws://127.0.0.1:8000';
                websocket = new WebSocket(url);
                websocket.onmessage = onMessage(websocket, store);

                break;
            case actions.ADD_MESSAGE:
                action.message = _createMessage(store.getState(), action.text);

                websocket.send(JSON.stringify(action.message));
        }

        return next(action);
    }
};

export default websocketMiddleware;
