import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field } from 'redux-form'

const CategorySelect = ({ categories }) => (
    <div>
        <Field name="category" component="select">
            {categories.map(cat => (
                <option value={cat.name}>{cat.name}</option>
            ))}
        </Field>
    </div>
)

CategorySelect.propTypes = {
    categories: PropTypes.array.isRequired
}

const mapStateToProps = ({ category }) => ({
    categories: category.categories
})

export default connect(mapStateToProps)(CategorySelect)
