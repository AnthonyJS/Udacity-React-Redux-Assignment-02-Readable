import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ModifyControls from '../Shared/ModifyControls'
import { DeletePost } from '../../Features/Posts/postActions'

const PostModifyControls = ({ deletePost, category, id, history }) => {
    const handleEdit = () => {
        history.push(`/${category}/${id}/edit`)
    }

    const handleDelete = postId => {
        deletePost(postId)
        history.goBack()
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
    deletePost: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
    deletePost: id => dispatch(DeletePost(id))
})

export default withRouter(connect(null, mapDispatchToProps)(PostModifyControls))
