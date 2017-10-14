import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GetPosts, DeletePost } from '../../actions/postActions'
import CreatePost from './CreatePost'
import EditPost from './EditPost'

class PostsList extends Component {
    state = { editPostId: '' }

    componentDidMount() {
        this.props.getPosts()
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
                    {posts.map(post => (
                        <li key={post.id}>
                            {post.title} {post.body} {post.author}{' '}
                            <button
                                value="edit"
                                onClick={() => {
                                    this.setState({ editPostId: post.id })
                                }}
                            >
                                Edit
                            </button>
                            <a
                                onClick={e => this.deleteHandler(e, post.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                XX
                            </a>
                        </li>
                    ))}
                </ul>
                {this.state.editPostId ? (
                    <EditPost postId={this.state.editPostId} />
                ) : (
                    <CreatePost postId={this.state.editPostId} />
                )}
                <button
                    onClick={() => {
                        this.setState({ editPostId: null })
                    }}
                >
                    Cancel edit
                </button>
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
    deletePost: id => dispatch(DeletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
