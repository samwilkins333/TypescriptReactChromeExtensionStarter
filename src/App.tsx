import React from 'react';
import logo from './logo.svg';
import './App.css';
import { messageActiveTab } from './messaging';

export default class App extends React.Component<{}> {
    
    private onClick = async () => alert(await messageActiveTab({ action: "apply" }));

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className={"greenhouse-prompt"} onClick={this.onClick}>
                        Check page for embedded greenhouse.io application boards.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }

}
