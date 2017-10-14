import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    GetPosts,
    DeletePost,
    UpdateCurrentPostId
} from '../../actions/postActions'
import CreatePost from './CreatePost'
import EditPost from './EditPost'

class PostsList extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    deleteHandler = (event, id) => {
        event.preventDefault()
        this.props.deletePost(id)
    }

    render() {
        const { posts, currentPostId, updateCurrentPostId } = this.props

        return (
            <div>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            {post.title} {post.body} {post.author}{' '}
                            <button
                                value="edit"
                                onClick={() => {
                                    updateCurrentPostId(post.id)
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
                {currentPostId ? (
                    <EditPost postId={currentPostId} />
                ) : (
                    <CreatePost postId={currentPostId} />
                )}
                <button
                    onClick={() => {
                        updateCurrentPostId(null)
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
    })),
    currentPostId: state.content.currentPostId
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(GetPosts()),
    deletePost: id => dispatch(DeletePost(id)),
    updateCurrentPostId: id => dispatch(UpdateCurrentPostId(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
