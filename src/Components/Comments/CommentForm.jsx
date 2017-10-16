import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm, reset } from 'redux-form'

const afterSubmit = (result, dispatch) => dispatch(reset('comment'))

const CommentForm = ({ handleSubmit }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                Comment<br />
                <Field name="body" component="textarea" />
            </div>
            <div>
                by<br />
                <Field name="author" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
)

CommentForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
    form: 'comment',
    onSubmitSuccess: afterSubmit
})(CommentForm)
