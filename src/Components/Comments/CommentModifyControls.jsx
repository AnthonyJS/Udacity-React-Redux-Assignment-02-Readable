import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ModifyControls from '../Shared/ModifyControls'
import { DeleteComment } from '../../Features/Comments/commentActions'

const CommentModifyControls = ({ handleDelete, id, match, history }) => {
    const handleEdit = () => {
        const { category, post_id } = match.params

        history.push(`/${category}/${post_id}/edit/${id}`) // eslint-disable-line camelcase
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
    id: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
    handleDelete: id => dispatch(DeleteComment(id))
})

export default withRouter(
    connect(null, mapDispatchToProps)(CommentModifyControls)
)
