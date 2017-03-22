/**
 * Created by rwar on 14.03.17.
 */

import React from 'react';
import { connect } from 'react-redux';

import { sendMessage } from './actions';

import MessageList from './MessageList';
import NewMessageForm from './NewMessageForm';


export const MessageTypes = {
    CHAT_MESSAGE: 'chat_message',
    QUESTION_MESSAGE: 'question_message',
};


const chatMessages = function (store)
{
    return store.messages.filter((msg) =>
    {
        return msg.type == MessageTypes.REGULAR_MESSAGE;
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
        tab: state.currentTab,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSendMessage: (text) => {
            dispatch(addMessage(text, ownProps.tab));
        },
    };
};

class _MessageListTab extends React.Component
{
    render()
    {
        return (
            <div className="messages">
                <MessageList messages={this.props.messages} />
                <NewMessageForm onSendMessage={onSendMessage} />
            </div>
        );
    }
}

var MessageListTab = connect(
    mapStateToProps,
    mapDispatchToProps
)(_MessageListTab);

export default MessageListTab;
