import React from 'react'
import { Route } from 'react-router-dom'
import PostsList from './Components/Posts/PostsList'

import './App.css'

const App = () => (
    <div className="App">
        <Route path="/" exact render={() => <PostsList />} />
        <Route path="/search/" render={() => <PostsList />} />
    </div>
)

export default App
