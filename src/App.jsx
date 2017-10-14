import React from 'react'
import { Route } from 'react-router-dom'
import PostsList from './Components/Posts/PostsList'
import PostDetail from './Components/Posts/PostDetail'

import './App.css'

const App = () => (
    <div className="App">
        <Route path="/" exact render={() => <PostsList />} />
        <Route path="/:category" exact component={PostsList} />
        <Route path="/:category/:post_id" component={PostDetail} />
    </div>
)

export default App
