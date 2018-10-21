import React from 'react';
import Message from './Message';

const MessageList = props => {
    return <ul className="message-list">
        {props.messages.map((message, index) => (
            <Message message={message} username={props.username} key={index}/>
        ))}
    </ul>
};

export default MessageList;