import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PostsList from './Components/Posts'
import PostDetail from './Components/Posts/PostDetail'
import CreatePost from './Components/Posts/CreatePost'
import EditPost from './Components/Posts/EditPost'
import EditComment from './Components/Comments/EditComment'
import CategoryNav from './Components/Categories/CategoryNav'
import './App.css'

const App = () => (
    <div className="App">
        <CategoryNav />
        <Switch>
            <Route path="/" exact render={() => <PostsList />} />
            <Route path="/create" exact component={CreatePost} />
            <Route
                path="/:category/create"
                exact
                render={vals => (
                    <CreatePost category={vals.match.params.category} />
                )}
            />
            <Route path="/:category" exact component={PostsList} />
            <Route path="/:category/:post_id" exact component={PostDetail} />
            <Route
                path="/:category/:post_id/edit"
                exact
                render={vals => <EditPost postId={vals.match.params.post_id} />}
            />
            <Route
                path="/:category/:post_id/edit/:comment_id"
                exact
                render={vals => (
                    <EditComment commentId={vals.match.params.comment_id} />
                )}
            />
        </Switch>
    </div>
)

export default App
