/**
 * Created by rwar on 14.03.17.
 */

import React from 'react';

class ChatMessage extends React.Component
{
    render() {
        return (
            <div className="msg">
                <div className="msg_header">
                    <span>{this.props.user}</span>
                    <span>{this.props.time}</span>
                </div>
                <div className="msg_content">
                    {this.props.message}
                </div>
            </div>
        );
    }
}

export default ChatMessage;
