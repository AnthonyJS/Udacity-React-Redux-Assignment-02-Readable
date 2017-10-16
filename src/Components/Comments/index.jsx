import React from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList'
import CreateComment from './CreateComment'
import SetSortBy from '../Shared/SetSortBy'
import { COMMENT_TYPE } from '../../Common/enums'

const Comments = ({ postId }) => (
    <div>
        <SetSortBy type={COMMENT_TYPE} />
        <CommentsList postId={postId} />
        <CreateComment postId={postId} />
    </div>
)

Comments.propTypes = {
    postId: PropTypes.string.isRequired
}

export default Comments
