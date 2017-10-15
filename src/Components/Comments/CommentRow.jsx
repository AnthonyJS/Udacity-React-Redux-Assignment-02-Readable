import React from 'react'
import PropTypes from 'prop-types'
import CommentVote from './CommentVote'
import CommentModifyControls from './CommentModifyControls'

const CommentRow = ({ comment }) => (
    <li>
        Body:{comment.body}
        <br />
        Author:{comment.author}
        <br />
        <CommentVote id={comment.id} />
        <CommentModifyControls id={comment.id} />
    </li>
)

CommentRow.propTypes = {
    comment: PropTypes.object.isRequired
}

export default CommentRow
