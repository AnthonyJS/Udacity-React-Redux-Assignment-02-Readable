import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostRow from './PostRow'
import { UpdatePostSortBy } from '../../Features/Display/displayActions'

const PostsTable = ({ posts, setPostSortBy }) => (
    <table>
        <thead>
            <tr>
                <th>
                    <a role="button" onClick={() => setPostSortBy('timestamp')}>
                        Timestamp
                    </a>
                </th>
                <th>Title</th>
                <th>Body</th>
                <th>Author</th>
                <th>Category</th>
                <th>Modify</th>
                <th>
                    <a role="button" onClick={() => setPostSortBy('voteScore')}>
                        Vote
                    </a>
                </th>
            </tr>
        </thead>
        <tbody>{posts.map(post => <PostRow key={post.id} {...post} />)}</tbody>
    </table>
)

PostsTable.propTypes = {
    posts: PropTypes.array,
    setPostSortBy: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    setPostSortBy: sortBy => dispatch(UpdatePostSortBy(sortBy))
})

export default connect(null, mapDispatchToProps)(PostsTable)
