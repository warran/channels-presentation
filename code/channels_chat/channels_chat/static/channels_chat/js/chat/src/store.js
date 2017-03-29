/**
 * Created by rwar on 15.03.17.
 */

import { createStore, applyMiddleware } from 'redux';
import chatAppReducer from './reducers';
import websocketMiddleware from './websocketMiddleware';

let store = createStore(
    chatAppReducer,
    applyMiddleware(websocketMiddleware())
);

module.exports.store = store;
