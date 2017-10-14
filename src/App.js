import React, { Component } from 'react'
import PostsList from './Components/Posts/PostsList'
import ReduxFormContainer from './Components/ReduxFormContainer'
import { connect } from 'react-redux'
import { AddPost } from './actions/postActions'

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
