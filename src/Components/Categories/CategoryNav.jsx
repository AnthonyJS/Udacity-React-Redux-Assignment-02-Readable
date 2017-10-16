import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CategoryLoader from '../Categories/CategoryLoader'

const CategoryNav = ({ categories }) => (
    <div>
        <CategoryLoader />
        <div>
            <span>Choose category: </span>
            <span>
                <Link to="/">all</Link>
            </span>
            {categories.map(cat => (
                <span key={cat.name}>
                    {' '}
                    - <Link to={`/${cat.name}`}>{cat.name}</Link>
                </span>
            ))}
        </div>
    </div>
)

CategoryNav.propTypes = {
    categories: PropTypes.array
}

const mapStateToProps = ({ category }) => ({
    categories: category.categories
})

export default connect(mapStateToProps)(CategoryNav)
