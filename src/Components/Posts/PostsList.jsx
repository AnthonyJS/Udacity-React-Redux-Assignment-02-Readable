import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { GetPosts } from '../../Features/Posts/postActions'
import PostRow from './PostRow'
import CategoryLoader from '../Shared/CategoryLoader'

class PostsList extends Component {
    componentDidMount() {
        const { getPosts, match } = this.props

        this.category = get(match, 'params.category')

        getPosts(this.category)
    }

    componentWillReceiveProps(nextProps) {
        const { match } = nextProps
        const { getPosts } = this.props

        const nextCategory = get(match, 'params.category')

        if (this.category === nextCategory) return

        this.category = nextCategory

        getPosts(this.category)
    }

    render() {
        const { posts, categories, match } = this.props

        this.category = get(match, 'params.category')

        return (
            <div>
                <CategoryLoader />
                {this.category ? (
                    <Link to={`/${this.category}/create`}>Add post</Link>
                ) : (
                    <Link to="/create">Add post</Link>
                )}
                <Link to="/">Link to all</Link>
                <ul>
                    {categories.map(cat => (
                        <li key={cat.name}>
                            <Link to={`/${cat.name}`}>{cat.name}</Link>
                        </li>
                    ))}
                </ul>
                <ul>
                    {posts.map(post => <PostRow key={post.id} {...post} />)}
                </ul>
            </div>
        )
    }
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
}

const mapStateToProps = ({ posts, category }) => ({
    posts: Object.values(posts),
    categories: category.categories
})

const mapDispatchToProps = dispatch => ({
    getPosts: category => dispatch(GetPosts(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
