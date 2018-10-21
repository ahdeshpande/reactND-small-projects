import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessageList = props => {
    return <ul className="message-list">
        {props.messages.map((message, index) => (
            <Message message={message} username={props.username} key={index}
                     index={index}/>
        ))}
    </ul>
};

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired,
};

export default MessageList;