import React from 'react'
import PropTypes from 'prop-types'

const ModifyControls = ({ handleUpdateCurrentId, handleDelete, id }) => (
    <div>
        <button
            value="edit"
            onClick={() => {
                handleUpdateCurrentId(id)
            }}
        >
            Edit
        </button>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
)

ModifyControls.propTypes = {
    id: PropTypes.string.isRequired,
    handleUpdateCurrentId: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default ModifyControls
