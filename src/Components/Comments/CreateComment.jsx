import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import { AddComment } from '../../Features/Comments/CommentActions'

const CreateComment = ({ addComment, postId }) => {
    const handleSubmit = values => {
        values.postId = postId
        addComment(values)
    }

    return (
        <div>
            Create<CommentForm
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
