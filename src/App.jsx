import React from 'react'
import { Route } from 'react-router-dom'
import PostsList from './Components/Posts/PostsList'
import PostDetail from './Components/Posts/PostDetail'
import CommentsList from './Components/Comments/CommentsList'

import './App.css'

const App = () => (
    <div className="App">
        <Route path="/" exact render={() => <PostsList />} />
        <Route
            path="/comments/1/2"
            exact
            render={() => <CommentsList postId="8xf0y6ziyjabvozdd253nd" />}
        />
        <Route path="/:category" exact component={PostsList} />
        <Route path="/:category/:post_id" exact component={PostDetail} />
    </div>
)

export default App
