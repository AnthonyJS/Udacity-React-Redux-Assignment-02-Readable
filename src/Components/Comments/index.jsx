import React from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList'
import CreateComment from './CreateComment'

const Comments = ({ postId }) => (
    <div>
        <CommentsList postId={postId} />
        <CreateComment postId={postId} />
    </div>
)

Comments.propTypes = {
    postId: PropTypes.string.isRequired
}

export default Comments
