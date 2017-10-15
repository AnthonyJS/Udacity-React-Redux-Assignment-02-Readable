import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ModifyControls from '../Shared/ModifyControls'
import { DeleteComment } from '../../Features/Comments/commentActions'

const CommentModifyControls = ({ handleDelete, id }) => {
    const handleEdit = () => {
        // TODO
    }

    return (
        <ModifyControls
            handleEdit={() => handleEdit(id)}
            handleDelete={() => handleDelete(id)}
            id={id}
        />
    )
}

CommentModifyControls.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
    handleDelete: id => dispatch(DeleteComment(id))
})

export default connect(null, mapDispatchToProps)(CommentModifyControls)
