/**
 * Created by rwar on 23.03.17.
 */

import React from 'react';
import { connect } from 'react-redux';

import { setUsername } from './actions';


class _UsernameDialog extends React.Component
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

        this.props.onSetUsername(this.state);

        this.setState({value: ''});
    }

    render()
    {
        if(this.props.isUsernameSet)
        {
            return null;
        }

        return (
            <div className="dialogShadow">
                <div className="dialog">
                    <span>Username</span>
                    <form>
                        <input type="text" name="username"
                        value={this.state.value}
                        onChange={this.handleChange} />
                        <button onClick={this.handleSubmit}>OK</button>
                    </form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isUsernameSet: state.currentUser !== null,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetUsername: (component_state) => {
            dispatch(setUsername(component_state.value));
        },
    };
};


const UsernameDialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(_UsernameDialog);


export default UsernameDialog;
