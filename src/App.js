import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import logo from './logo.svg'
import { connect } from 'react-redux'
import { GetPosts } from './actions/postActions'
import './App.css'

class App extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const { posts } = this.props

        return (
            <div className="App">
                <ul>
                    {posts.map(post =>
                        <li>
                            {post.title}
                        </li>
                    )}
                </ul>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: Object.keys(state.content.posts).map(key => ({
        ...state.content.posts[key]
    }))
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(GetPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
