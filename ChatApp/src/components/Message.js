import React from 'react';
import PropTypes from 'prop-types';

const Message = props => {
    return <li
        key={index}
        className={
            props.message.username === props.username ? 'message sender' : 'message recipient'
        }
    >
        <p>{props.message.username}: {props.message.text}</p>
    </li>
};

Message.propTyes = {
    message: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
};

export default Message;