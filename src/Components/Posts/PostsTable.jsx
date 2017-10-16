import React from 'react'
import PropTypes from 'prop-types'
import PostRow from './PostRow'

const PostsTable = ({ posts }) => (
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
        <tbody>{posts.map(post => <PostRow key={post.id} {...post} />)}</tbody>
    </table>
)

PostsTable.propTypes = {
    posts: PropTypes.array
}

export default PostsTable
