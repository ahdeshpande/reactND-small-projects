import React from 'react';
import PropTypes from 'prop-types';

export default class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            gamesPlayed: 0,
            isUnique: true
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            isUnique: true,
        });
    };

    addUser = (e) => {
        e.preventDefault();

        const {firstName, lastName, username, gamesPlayed} = this.state;

        if (this.props.userlist.filter(user => user.username === username).length > 0) {
            this.setState({isUnique: false});
        } else {
            this.setState({isUnique: true});
            this.props.onAddUser(e, {
                firstName: firstName,
                lastName: lastName,
                username: username,
                gamesPlayed: gamesPlayed,
            })
        }
    };

    render() {
        const {firstName, lastName, username, isUnique} = this.state;
        return (
            <form onSubmit={this.addUser}>

                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName"
                           placeholder="Enter your first name" value={firstName}
                           onChange={this.handleChange} required/>
                </div>

                <div>
                    <label htmlFor="lastName">Username</label>
                    <input type="text" id="lastName" name="lastName"
                           placeholder="Enter your last name" value={lastName}
                           onChange={this.handleChange} required/>
                </div>

                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username"
                           placeholder="Enter your username" value={username}
                           onChange={this.handleChange} required/>
                </div>
                {!isUnique &&
                <label htmlFor="username" style={{color: 'red'}}>* username
                    already exists</label>
                }
                <br/>
                <button>Add User</button>

            </form>
        )
    }

}

AddUser.propTypes = {
    onAddUser: PropTypes.func.isRequired,
    isUnique: PropTypes.bool
};