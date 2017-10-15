import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ModifyControls from '../Shared/ModifyControls'
import { UpdateCurrentPostId, DeletePost } from '../../actions/postActions'

const PostModifyControls = ({
    handleUpdateCurrentPostId,
    handleDelete,
    id
}) => (
    <ModifyControls
        handleUpdateCurrentId={() => handleUpdateCurrentPostId(id)}
        handleDelete={() => handleDelete(id)}
        id={id}
    />
)

PostModifyControls.propTypes = {
    handleUpdateCurrentPostId: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
    handleDelete: id => dispatch(DeletePost(id)),
    handleUpdateCurrentPostId: id => dispatch(UpdateCurrentPostId(id))
})

export default connect(null, mapDispatchToProps)(PostModifyControls)
