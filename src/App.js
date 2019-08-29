import React, { Component } from 'react';
import logo from './i.png';
import './App.css';

import Search from "./components/search";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <br></br><br></br>
                    <h2>Welcome VSCA</h2>
                </div>
                <div className="box">
                    <Search />
                </div>
            </div>
        );
    }


}
