import React from 'react';
import PropTypes from 'prop-types';
import User from "./User";

export default class UsersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {showGamesPlayed: true,};
    }

    handleClick = () => {
        this.setState(prevState => {
            return {showGamesPlayed: !prevState.showGamesPlayed}
        });
    };

    render() {
        const {userlist} = this.props;
        const {showGamesPlayed} = this.state;
        return (
            <div>
                <h3>Users
                    <button style={{
                        float: 'right',
                    }} onClick={this.handleClick}>
                        {showGamesPlayed ? 'Hide' : 'Show'} games played
                    </button>
                </h3>
                <ol>
                    {userlist.map(user => (
                        <User user={user} key={user.username}
                              showGamesPlayed={showGamesPlayed}/>
                    ))}
                </ol>
            </div>
        )
    }

}

UsersList.propTypes = {
    userlist: PropTypes.array.isRequired
};