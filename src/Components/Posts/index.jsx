import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get, orderBy } from 'lodash'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { GetPosts } from '../../Features/Posts/postActions'
import PostRow from './PostRow'
import CategoryLoader from '../Shared/CategoryLoader'
import SetSortBy from '../Shared/SetSortBy'

class PostsList extends Component {
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
        const { posts, categories, match, sortBy } = this.props

        this.category = get(match, 'params.category')

        console.log('sortBy', sortBy)
        const sortedPosts = orderBy(posts, [sortBy], ['desc'])

        return (
            <div>
                <SetSortBy />
                <CategoryLoader />
                <button>
                    {this.category ? (
                        <Link to={`/${this.category}/create`}>Add post</Link>
                    ) : (
                        <Link to="/create">Add post</Link>
                    )}
                </button>
                <Link to="/">Link to all</Link>
                <ul>
                    {categories.map(cat => (
                        <li key={cat.name}>
                            <Link to={`/${cat.name}`}>{cat.name}</Link>
                        </li>
                    ))}
                </ul>
                <ul>
                    {sortedPosts.map(post => (
                        <PostRow key={post.id} {...post} />
                    ))}
                </ul>
            </div>
        )
    }
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    sortBy: PropTypes.string.isRequired
}

const mapStateToProps = ({ posts, category, display }) => ({
    posts: Object.values(posts),
    categories: category.categories,
    sortBy: display.sortBy
})

const mapDispatchToProps = dispatch => ({
    getPosts: category => dispatch(GetPosts(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
