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
import PostRow from './PostRow'

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
                        <PostRow
                            key={post.id}
                            post={post}
                            updateCurrentPostId={updateCurrentPostId}
                            deleteHandler={this.deleteHandler}
                        />
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
