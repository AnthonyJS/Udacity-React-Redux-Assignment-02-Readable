import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
            </div>
        )
    }
}

export default App
