import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetPosts, AddPost, DeletePost } from '../../actions/postActions'

class PostsList extends Component {
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
        this.props.submitPost(this.state.post)
    }

    deleteHandler = (event, id) => {
        event.preventDefault()
        this.props.deletePost(id)
    }

    render() {
        const { posts } = this.props

        return (
            <div>
                <ul>
                    {posts.map(post =>
                        <li>
                            {post.title}{' '}
                            <a
                                onClick={e => this.deleteHandler(e, post.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                X
                            </a>
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
            </div>
        )
    }
}

PostsList.propTypes = {}

const mapStateToProps = state => ({
    posts: Object.keys(state.content.posts).map(key => ({
        ...state.content.posts[key]
    }))
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(GetPosts()),
    submitPost: post => dispatch(AddPost(post)),
    deletePost: id => dispatch(DeletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
