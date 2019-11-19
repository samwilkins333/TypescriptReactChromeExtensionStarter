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
                    <p className={"prompt"} onClick={this.onClick}>
                        Send a test message to the active tab...
                    </p>
                </header>
            </div>
        );
    }

}
