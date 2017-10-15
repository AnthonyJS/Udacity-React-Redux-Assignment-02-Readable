import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PostsList from './Components/Posts/PostsList'
import PostDetail from './Components/Posts/PostDetail'
import CreatePost from './Components/Posts/CreatePost'

import './App.css'

const App = () => (
    <div className="App">
        <Switch>
            <Route path="/" exact render={() => <PostsList />} />
            <Route path="/create" exact component={CreatePost} />
            <Route path="/:category" exact component={PostsList} />
            <Route path="/:category/:post_id" exact component={PostDetail} />
        </Switch>
    </div>
)

export default App
