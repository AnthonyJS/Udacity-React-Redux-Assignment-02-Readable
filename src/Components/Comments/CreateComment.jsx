import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import { AddComment } from '../../Features/Comments/commentActions'
import { CommentDiv } from '../../Common/styles'

const CreateComment = ({ addComment, postId }) => {
    const handleSubmit = values => {
        const newComment = { ...values, postId }

        addComment(newComment)
    }

    return (
        <div>
            <h1>Add a comment to this post</h1>
            <CommentForm
                onSubmit={handleSubmit}
                initialValues={{}}
                enableReinitialize
            />
        </div>
    )
}

CreateComment.propTypes = {
    addComment: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch(AddComment(comment))
})

export default connect(null, mapDispatchToProps)(CreateComment)
