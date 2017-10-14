import React from 'react'
import PropTypes from 'prop-types'

const PostRow = ({ post, updateCurrentPostId, deleteHandler }) => (
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
        <button onClick={e => deleteHandler(e, post.id)}>Delete</button>
    </li>
)

PostRow.propTypes = {
    post: PropTypes.object.isRequired,
    updateCurrentPostId: PropTypes.func.isRequired,
    deleteHandler: PropTypes.func.isRequired
}

export default PostRow
