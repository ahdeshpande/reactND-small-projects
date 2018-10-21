import React from 'react';
import PropTypes from 'prop-types';

export default class AddMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    handleChange = e => {
        this.setState({
            text: e.target.value,
        });
    };

    onSendMessage = e => {
        e.preventDefault();
        this.props.sendMessage({
            username: this.props.username,
            text: this.state.text,
        });
        this.setState({text: ''});
    };

    isDisabled = () => {
        return this.state.text === '';
    };

    render() {
        return (
            <form className="input-group" onSubmit={this.onSendMessage}>
                <input type="text" className="form-control"
                       placeholder="Enter your message..."
                       value={this.state.text} onChange={this.handleChange}/>
                <div className="input-group-append">
                    <button className="btn submit-button"
                            disabled={this.isDisabled()}
                            type="submit">
                        SEND
                    </button>
                </div>
            </form>
        )
    }
}

AddMessage.propTypes = {
    sendMessage: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
};