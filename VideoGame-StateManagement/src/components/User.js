import React from 'react';

const User = props => {
    return <li>{props.username} played {props.showGamesPlayed ? props.gameCount : '*'} {props.gameCount === 1 ? 'game.' : 'games.'}</li>
};

export default User;