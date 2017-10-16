import React from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList'
import CreateComment from './CreateComment'
import { CommentDiv } from '../../Common/styles'

const Comments = ({ postId }) => (
    <CommentDiv>
        <CommentsList postId={postId} />
        <CreateComment postId={postId} />
    </CommentDiv>
)

Comments.propTypes = {
    postId: PropTypes.string.isRequired
}

export default Comments
