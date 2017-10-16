import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import CommentForm from './CommentForm'
import { UpdateComment } from '../../Features/Comments/commentActions'

const EditComment = ({ initialValues, editComment, history }) => {
    const handleSubmit = values => {
        editComment(values)
        history.goBack()
    }

    return (
        <div>
            <h1>Edit comment</h1>
            <CommentForm
                onSubmit={handleSubmit}
                initialValues={initialValues}
                enableReinitialize
            />
            <button onClick={() => history.goBack()}>Cancel</button>
        </div>
    )
}

EditComment.propTypes = {
    editComment: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

const mapStateToProps = (state, { commentId }) => ({
    initialValues: state.comments[commentId]
})

const mapDispatchToProps = dispatch => ({
    editComment: comment => dispatch(UpdateComment(comment))
})

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EditComment)
)
