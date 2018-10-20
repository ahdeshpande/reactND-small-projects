import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
    return <li>{props.user.username} played {props.showGamesPlayed ? props.user.gamesPlayed : '*'} {props.user.gamesPlayed === 1 ? 'game.' : 'games.'}</li>
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    showGamesPlayed: PropTypes.bool,
};

export default User;