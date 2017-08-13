import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import logo from './logo.svg'
import { connect } from 'react-redux'
import { GetPosts, AddPost } from './actions/postActions'
import './App.css'

class App extends Component {
    state = {}

    componentDidMount() {
        this.props.getPosts()
    }

    changeHandler = event => {
        this.setState({
            post: {
                ...this.state.post,
                [event.target.name]: event.target.value
            }
        })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.submitForm(this.state.post)
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
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={this.changeHandler}
                    />
                    <input
                        type="text"
                        id="body"
                        name="body"
                        onChange={this.changeHandler}
                    />
                    <input
                        type="text"
                        id="author"
                        name="author"
                        onChange={this.changeHandler}
                    />
                    <input type="submit" value="submitty" />
                </form>
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
    getPosts: () => dispatch(GetPosts()),
    submitForm: post => dispatch(AddPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
