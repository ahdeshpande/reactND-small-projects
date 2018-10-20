import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userlist: [
                {
                    firstName: 'Abhiraj',
                    lastName: 'Deshpande',
                    username: 'ahdeshpande',
                    gamesPlayed: 12,
                },
                {
                    firstName: 'John',
                    lastName: 'Doe',
                    username: 'jdoe',
                    gamesPlayed: 2,
                },
                {
                    firstName: 'Jane',
                    lastName: 'Doe',
                    username: 'janed',
                    gamesPlayed: 7,
                },
                {
                    firstName: 'Derek',
                    lastName: 'Jones',
                    username: 'dj_999',
                    gamesPlayed: 1,
                },
            ],
        }
    }

    addUser = (e, newUser) => {
        e.preventDefault();

        this.setState({
            userlist: [...this.state.userlist, newUser]
        });

    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>

                <AddUser onAddUser={this.addUser}
                         userlist={this.state.userlist}/>
                <UsersList userlist={this.state.userlist}/>
            </div>
        );
    }
}

export default App;
