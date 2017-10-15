import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ModifyControls from '../Shared/ModifyControls'
import {
    UpdateCurrentPostId,
    DeletePost
} from '../../Features/Posts/postActions'

const PostModifyControls = ({
    handleUpdateCurrentPostId,
    handleDelete,
    category,
    id,
    history
}) => {
    const handleEdit = () => {
        handleUpdateCurrentPostId(id)
        history.push(`/${category}/${id}`)
    }

    return (
        <ModifyControls
            handleEdit={handleEdit}
            handleDelete={() => handleDelete(id)}
            id={id}
        />
    )
}

PostModifyControls.propTypes = {
    handleUpdateCurrentPostId: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
    handleDelete: id => dispatch(DeletePost(id)),
    handleUpdateCurrentPostId: id => dispatch(UpdateCurrentPostId(id))
})

export default withRouter(connect(null, mapDispatchToProps)(PostModifyControls))
