import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PostsList from './Components/Posts/PostsList'
import PostDetail from './Components/Posts/PostDetail'
import CreatePost from './Components/Posts/CreatePost'
import { GetCategories } from './Features/Categories/categoryActions'

import './App.css'

const App = ({ getCategories }) => {
    getCategories()

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact render={() => <PostsList />} />
                <Route path="/create" exact component={CreatePost} />
                <Route path="/:category" exact component={PostsList} />
                <Route
                    path="/:category/:post_id"
                    exact
                    component={PostDetail}
                />
            </Switch>
        </div>
    )
}

App.propTypes = {
    getCategories: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(GetCategories())
})

export default connect(null, mapDispatchToProps)(App)
