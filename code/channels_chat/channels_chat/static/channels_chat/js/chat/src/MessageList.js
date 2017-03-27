/**
 * Created by rwar on 14.03.17.
 */

import React from 'react';

import ChatMessage from './ChatMessage';


class MessageList extends React.Component
{
    render()
    {
        const msgs = this.props.messages.map((msg) =>
            <li>
                <ChatMessage
                    user={msg.user}
                    time={msg.time}
                    message={msg.text}
                />
            </li>
        );

        return (
            <ul className="msg_list">
                {msgs}
            </ul>
        );
    }
}

export default MessageList;
