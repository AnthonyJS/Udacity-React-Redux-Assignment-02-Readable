import React from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList'
import CreateComment from './CreateComment'
import SetSortBy from '../Shared/SetSortBy'

const Comments = ({ postId }) => (
    <div>
        <SetSortBy type="Comments" />
        <CommentsList postId={postId} />
        <CreateComment postId={postId} />
    </div>
)

Comments.propTypes = {
    postId: PropTypes.string.isRequired
}

export default Comments
