import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ModifyControls from '../Shared/ModifyControls'
import {
    UpdateCurrentCommentId,
    DeleteComment
} from '../../Features/Comments/CommentActions'

const CommentModifyControls = ({
    handleUpdateCurrentCommentId,
    handleDelete,
    id
}) => (
    <ModifyControls
        handleUpdateCurrentCommentId={() => handleUpdateCurrentCommentId(id)}
        handleDelete={() => handleDelete(id)}
        id={id}
    />
)

CommentModifyControls.propTypes = {
    handleUpdateCurrentCommentId: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
    handleDelete: id => dispatch(DeleteComment(id)),
    handleUpdateCurrentCommentId: id => dispatch(UpdateCurrentCommentId(id))
})

export default connect(null, mapDispatchToProps)(CommentModifyControls)
