/**
 * Created by rwar on 14.03.17.
 */

import React from 'react';


class NewMessageForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this._handleChange.bind(this);
        this.handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(event)
    {
        this.setState({value: event.target.value});
    }

    _handleSubmit(event)
    {
        event.preventDefault();

        this.props.onSendMessage(this.state);

        this.setState({value: ''});
    }

    render ()
    {
        return (
            <div className="msg_form">
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Send message" />
                </form>
            </div>
        );
    }
}

export default NewMessageForm;
