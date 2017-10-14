import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { Link } from 'react-router-dom'
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
        const { getPosts, getCategories, match } = this.props

        getCategories()

        this.category = get(match, 'params.category')

        getPosts(this.category)
    }

    deleteHandler = id => {
        this.props.deletePost(id)
    }

    render() {
        const {
            posts,
            currentPostId,
            updateCurrentPostId,
            categories
        } = this.props

        return (
            <div>
                <Link to="/">Link to all</Link>
                <ul>
                    {categories.map(cat => (
                        <li key={cat.name}>
                            <Link
                                to={`/${cat.name}`}
                                onClick={() => this.props.getPosts(cat.name)}
                            >
                                {cat.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul>
                    {posts.map(post => (
                        <PostRow
                            key={post.id}
                            {...post}
                            updateCurrentPostId={updateCurrentPostId}
                            deleteHandler={this.deleteHandler}
                        />
                    ))}
                </ul>
                {currentPostId ? (
                    <EditPost postId={currentPostId} />
                ) : (
                    <div>
                        {this.category && (
                            <CreatePost
                                postId={currentPostId}
                                category={this.category}
                            />
                        )}
                    </div>
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
    getPosts: category => dispatch(GetPosts(category)),
    deletePost: id => dispatch(DeletePost(id)),
    updateCurrentPostId: id => dispatch(UpdateCurrentPostId(id)),
    getCategories: () => dispatch(GetCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
