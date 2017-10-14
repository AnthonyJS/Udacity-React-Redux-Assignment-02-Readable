import React, { Component } from 'react'
import PostsList from './Components/Posts/PostsList'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <PostsList />
            </div>
        )
    }
}

export default App
