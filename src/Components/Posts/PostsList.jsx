import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetPosts, DeletePost } from '../../actions/postActions'
import CreatePost from './CreatePost'

class PostsList extends Component {
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
                    {posts.map(post =>
                        <li>
                            {post.title}{' '}
                            <a
                                onClick={e => this.deleteHandler(e, post.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                XX
                            </a>
                        </li>
                    )}
                </ul>
                <CreatePost />
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
    deletePost: id => dispatch(DeletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
