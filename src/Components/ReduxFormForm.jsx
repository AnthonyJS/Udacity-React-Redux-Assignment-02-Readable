import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

let ReduxFormForm = props => (
    <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <Field name="title" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <Field name="body" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <Field name="author" component="input" type="email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
)

ReduxFormForm.propTypes = {}

ReduxFormForm = reduxForm({
    form: 'reduxFormSpike'
})(ReduxFormForm)

export default ReduxFormForm
