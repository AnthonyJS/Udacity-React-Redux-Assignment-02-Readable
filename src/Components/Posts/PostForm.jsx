import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import CategorySelect from '../Categories/CategorySelect'

const PostForm = ({ handleSubmit }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                Title<br />
                <Field name="title" component="input" type="text" />
            </div>
            <div>
                Body<br />
                <Field name="body" component="textarea" />
            </div>
            <div>
                Author<br />
                <Field name="author" component="input" type="text" />
            </div>
            <div>
                <CategorySelect />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
)

PostForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
    form: 'post'
})(PostForm)
