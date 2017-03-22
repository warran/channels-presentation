/**
 * Created by rwar on 15.03.17.
 */

import { createStore } from 'redux';
import chatAppReducer from './reducers';

let store = createStore(chatAppReducer);

module.exports.store = store;
