import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

class ReduxFormSpike extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" component="input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" component="input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

ReduxFormSpike.propTypes = {}

ReduxFormSpike = reduxForm({
    form: 'reduxFormSpike'
})(ReduxFormSpike)

export default ReduxFormSpike
