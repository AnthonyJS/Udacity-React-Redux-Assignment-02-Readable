import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import CategorySelect from '../Shared/CategorySelect'

const PostForm = ({ handleSubmit }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <Field name="title" component="input" type="text" />
            <Field name="body" component="input" type="text" />
            <Field name="author" component="input" type="text" />
            <CategorySelect />
            <button type="submit">Submit</button>
        </form>
    </div>
)

PostForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
    form: 'post'
})(PostForm)
