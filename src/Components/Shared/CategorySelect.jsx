import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field } from 'redux-form'
import { GetCategories } from '../../Features/Categories/categoryActions'

const CategorySelect = ({ categories, getCategories }) => {
    if (categories.length === 0) {
        getCategories()
        return <div>Loading...</div>
    }

    return (
        <div>
            <Field name="category" component="select">
                {categories.map(cat => (
                    <option value={cat.name}>{cat.name}</option>
                ))}
            </Field>
        </div>
    )
}
CategorySelect.propTypes = {
    categories: PropTypes.array.isRequired,
    getCategories: PropTypes.func.isRequired
}

const mapStateToProps = ({ category }) => ({
    categories: category.categories
})

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(GetCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect)
