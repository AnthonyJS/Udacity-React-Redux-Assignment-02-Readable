import React from 'react'
import PropTypes from 'prop-types'
import CommentVote from './CommentVote'

const CommentRow = ({ comment }) => (
    <li>
        {comment.body}
        <CommentVote id={comment.id} />
    </li>
)

CommentRow.propTypes = {
    comment: PropTypes.object.isRequired
}

export default CommentRow
