/**
 * Created by rwar on 14.03.17.
 */

import React from 'react';
import { connect } from 'react-redux';

import { addMessage, CONNECT } from './actions';

import MessageList from './MessageList';
import NewMessageForm from './NewMessageForm';


export const MessageTypes = {
    CHAT_MESSAGE: 'chat',
    QUESTION_MESSAGE: 'question',
};


const chatMessages = function (store)
{
    return store.messages.filter((msg) =>
    {
        return msg.type == MessageTypes.CHAT_MESSAGE;
    });
};

const chatQuestions = function (store)
{
    return store.messages.filter((msg) =>
    {
        return msg.type == MessageTypes.QUESTION_MESSAGE;
    });
};

const mapStateToProps = (state) => {
    const visibleMessages = state.currentTab == 'chat' ?
        chatMessages(state) : chatQuestions(state);

    return {
        messages: visibleMessages,
        currentTab: state.currentTab,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        connect: (component_state) => {
            dispatch({type: CONNECT });
        },
        onSendMessage: (component_state) => {
            dispatch(addMessage(component_state.value));
        },
    };
};

class _MessageListTab extends React.Component
{
    componentDidMount()
    {
        this.props.connect();
    }

    render()
    {
        return (
            <div className="messages">
                <MessageList messages={this.props.messages} />
                <NewMessageForm
                    onSendMessage={this.props.onSendMessage} />
            </div>
        );
    }
}

const MessageListTab = connect(
    mapStateToProps,
    mapDispatchToProps
)(_MessageListTab);

export default MessageListTab;
