import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import CommentForm from './CommentForm'
import { UpdateComment } from '../../Features/Comments/commentActions'
import { CommentDiv } from '../../Common/styles'

const EditComment = ({ initialValues, editComment, history }) => {
    const handleSubmit = values => {
        if (!values.body) return

        editComment(values)
        history.goBack()
    }

    return (
        <CommentDiv>
            <h1>Edit comment</h1>
            <CommentForm
                onSubmit={handleSubmit}
                initialValues={initialValues}
                enableReinitialize
            />
            <button onClick={() => history.goBack()}>Cancel</button>
        </CommentDiv>
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
