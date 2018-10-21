import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from "./components/MessageList";
import AddMessage from "./components/AddMessage";

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{username: 'Amy'}, {username: 'John'}];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        }
    }

    addMessage = msg => {
        this.setState(prevState => {
            return {
                messages: [...prevState.messages, msg],
            }
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    <div className="chat-window">
                        <h2>Super Awesome Chat</h2>
                        <div className="name sender">{users[0].username}</div>

                        <MessageList username={users[0].username}
                                     messages={this.state.messages}/>

                        <AddMessage sendMessage={this.addMessage}
                                    username={users[0].username}/>

                    </div>

                    <div className="chat-window">
                        <h2>Super Awesome Chat</h2>
                        <div className="name sender">{users[1].username}</div>

                        <MessageList username={users[1].username}
                                     messages={this.state.messages}/>

                        <AddMessage sendMessage={this.addMessage}
                                    username={users[1].username}/>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
