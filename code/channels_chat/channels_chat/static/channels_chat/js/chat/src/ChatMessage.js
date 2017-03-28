/**
 * Created by rwar on 14.03.17.
 */

import React from 'react';

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
    };
};

class ChatMessage extends React.Component
{
    render() {
        const msg_class = "msg" +
            (this.props.currentUser === this.props.user ? "user_msg" : "");

        return (
            <div className={msg_class}>
                <div className="msg_header">
                    <span className="msg_username">{this.props.user}</span>
                    <span className="msg_time">{this.props.time}</span>
                </div>
                <div className="msg_content">
                    {this.props.message}
                </div>
            </div>
        );
    }
}

export default ChatMessage;
