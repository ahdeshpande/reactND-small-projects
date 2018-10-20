import React from 'react';

const User = props => {
    return <li>{props.user.username} played {props.showGamesPlayed ? props.user.gameCount : '*'} {props.user.gameCount === 1 ? 'game.' : 'games.'}</li>
};

export default User;