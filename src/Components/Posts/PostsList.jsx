import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    GetPosts,
    DeletePost,
    UpdateCurrentPostId
} from '../../actions/postActions'
import { GetCategories } from '../../actions/categoryActions'
import CreatePost from './CreatePost'
import EditPost from './EditPost'

class PostsList extends Component {
    componentDidMount() {
        this.props.getPosts()
        this.props.getCategories()
    }

    deleteHandler = (event, id) => {
        event.preventDefault()
        this.props.deletePost(id)
    }

    render() {
        const {
            posts,
            currentPostId,
            updateCurrentPostId,
            categories,
            match
        } = this.props

        return (
            <div>
                {<div>Param: {match && match.params.category}</div>}
                <ul>
                    {categories &&
                        categories.map(cat => (
                            <li key={cat.name}>{cat.name}</li>
                        ))}
                </ul>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <div>id - {post.id}</div>
                            <div>timestamp - {post.timestamp}</div>
                            <div>title - {post.title}</div>
                            <div>body - {post.body}</div>
                            <div>author - {post.author}</div>
                            <div>category - {post.category}</div>
                            <div>voteScore - {post.voteScore}</div>
                            <div>deleted - {post.deleted}</div>

                            <button
                                value="edit"
                                onClick={() => {
                                    updateCurrentPostId(post.id)
                                }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={e => this.deleteHandler(e, post.id)}
                            >
                                Delete
                            </button>
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

const mapStateToProps = ({ content, category }) => ({
    posts: Object.values(content.posts),
    currentPostId: content.currentPostId,
    categories: category.categories
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(GetPosts()),
    deletePost: id => dispatch(DeletePost(id)),
    updateCurrentPostId: id => dispatch(UpdateCurrentPostId(id)),
    getCategories: () => dispatch(GetCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
