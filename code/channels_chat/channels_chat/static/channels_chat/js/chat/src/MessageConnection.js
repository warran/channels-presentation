/**
 * Created by rwar on 26.03.17.
 */

import React from 'react';
import { connect } from 'react-redux';

import { receivedMessages, messageSent } from './actions';


class _WebsocketConnection extends React.Component
{
    constructor()
    {
        const url = "127.0.0.1";

        this.websocket = new WebSocket(url);

        this.websocket.onopen = (event) => { console.log(event); };
        this.websocket.onclose = (event) => { console.log(event); };
        this.websocket.onmessage = (event) => { console.log(event); };
        this.websocket.onerror= (event) => { console.log(event); };
    }

    messagesReceived()
    {

    }

    render() {
        if (this.props.messageToSend !== null) {
            //this.websocket.send(JSON.stringify(this.props.messageToSend));
            this.props.onMessageSent();
        }

        return null;
    }
}


const mapStateToProps = (state) =>
{
    return {
        messageToSend: state.lastMessage,
    };
};

const mapDispatchToProps = (dispatch) =>
{
    return  {
        onMessageSent: () =>
        {
            dispatch(messageSent());
        },
        onReceivedMessages: (component_state) =>
        {
            dispatch(receivedMessages(component_state.new_messages));
        },
    };
};

const WebsocketConnecton = connect(
    mapStateToProps,
    mapDispatchToProps
)(_WebsocketConnection);

export default WebsocketConnecton;
