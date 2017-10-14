import React from 'react'
import PropTypes from 'prop-types'

const ModifyControls = ({ handleUpdateCurrentPostId, handleDelete, id }) => (
    <div>
        <button
            value="edit"
            onClick={() => {
                handleUpdateCurrentPostId(id)
            }}
        >
            Edit
        </button>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
)

ModifyControls.propTypes = {
    id: PropTypes.string.isRequired,
    handleUpdateCurrentPostId: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default ModifyControls
