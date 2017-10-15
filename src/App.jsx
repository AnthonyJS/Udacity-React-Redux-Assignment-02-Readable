import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PostsList from './Components/Posts/PostsList'
import PostDetail from './Components/Posts/PostDetail'
import CreatePost from './Components/Posts/CreatePost'
import EditPost from './Components/Posts/EditPost'

import './App.css'

const App = () => (
    <div className="App">
        <Switch>
            <Route path="/" exact render={() => <PostsList />} />
            <Route path="/create" exact component={CreatePost} />
            <Route path="/:category" exact component={PostsList} />
            <Route path="/:category/:post_id" exact component={PostDetail} />
            <Route
                path="/:category/:post_id/edit"
                exact
                render={vals => <EditPost postId={vals.match.params.post_id} />}
            />
        </Switch>
    </div>
)

export default App
