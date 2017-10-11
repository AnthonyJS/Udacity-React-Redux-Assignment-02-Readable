import React, { Component } from 'react'
import PostsList from './Components/Posts/PostsList'
import ReduxFormSpike from './Components/ReduxFormSpike'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ReduxFormSpike />
            </div>
        )
    }
}

export default App
