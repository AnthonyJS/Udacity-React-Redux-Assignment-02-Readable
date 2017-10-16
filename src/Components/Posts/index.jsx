import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get, orderBy } from 'lodash'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { GetPosts } from '../../Features/Posts/postActions'
import PostsTable from './PostsTable'
import { PostDiv } from '../../Common/styles'

class Posts extends Component {
    componentDidMount() {
        const { getPosts, match } = this.props

        this.category = get(match, 'params.category')

        getPosts(this.category)
    }

    componentWillReceiveProps({ match }) {
        const { getPosts } = this.props

        const nextCategory = get(match, 'params.category')

        if (this.category === nextCategory) return

        this.category = nextCategory

        getPosts(this.category)
    }

    render() {
        const { posts, match, sortBy } = this.props

        this.category = get(match, 'params.category')

        const sortedPosts = orderBy(posts, [sortBy, 'timestamp'], ['desc'])

        return (
            <PostDiv>
                <h1>
                    Posts for{' '}
                    {this.category
                        ? `${this.category} category`
                        : 'all categories'}
                </h1>

                <PostsTable posts={sortedPosts} />
                <button>
                    {this.category ? (
                        <Link to={`/${this.category}/create`}>Add post</Link>
                    ) : (
                        <Link to="/create">Add post</Link>
                    )}
                </button>
            </PostDiv>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
    match: PropTypes.object,
    sortBy: PropTypes.string.isRequired
}

const mapStateToProps = ({ posts, display }) => ({
    posts: Object.values(posts),
    sortBy: display.postSortBy
})

const mapDispatchToProps = dispatch => ({
    getPosts: category => dispatch(GetPosts(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
