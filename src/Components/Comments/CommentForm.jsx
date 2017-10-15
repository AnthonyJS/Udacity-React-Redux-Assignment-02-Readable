import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

const CommentForm = ({ handleSubmit }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <Field name="body" component="input" type="text" />
            <Field name="author" component="input" type="text" />
            <button type="submit">Submit</button>
        </form>
    </div>
)

CommentForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
    form: 'comment'
})(CommentForm)
