import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get, orderBy } from 'lodash'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CategoryLoader from '../Categories/CategoryNav'
import { GetPosts } from '../../Features/Posts/postActions'
import PostRow from './PostRow'
import SetSortBy from '../Shared/SetSortBy'
import { POST_TYPE } from '../../Common/enums'

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
        const { posts, match, sortBy } = this.props

        this.category = get(match, 'params.category')

        const sortedPosts = orderBy(posts, [sortBy, 'timestamp'], ['desc'])

        return (
            <div>
                <SetSortBy type={POST_TYPE} />
                <button>
                    {this.category ? (
                        <Link to={`/${this.category}/create`}>Add post</Link>
                    ) : (
                        <Link to="/create">Add post</Link>
                    )}
                </button>
                <CategoryLoader />
                <table>
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Modify</th>
                            <th>Vote</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedPosts.map(post => (
                            <PostRow key={post.id} {...post} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

PostsList.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
