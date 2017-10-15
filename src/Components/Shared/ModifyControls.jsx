import React from 'react'
import PropTypes from 'prop-types'

const ModifyControls = ({ handleEdit, handleDelete, id }) => (
    <div>
        <button onClick={() => handleEdit(id)}>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
)

ModifyControls.propTypes = {
    id: PropTypes.string.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default ModifyControls
