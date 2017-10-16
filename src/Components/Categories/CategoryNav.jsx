import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CategoryLoader from '../Categories/CategoryLoader'

const CategoryNav = ({ categories }) => (
    <div>
        <CategoryLoader />
        <Link to="/">Link to all</Link>
        <ul>
            {categories.map(cat => (
                <li key={cat.name}>
                    <Link to={`/${cat.name}`}>{cat.name}</Link>
                </li>
            ))}
        </ul>
    </div>
)

CategoryNav.propTypes = {
    categories: PropTypes.array
}

const mapStateToProps = ({ category }) => ({
    categories: category.categories
})

export default connect(mapStateToProps)(CategoryNav)
