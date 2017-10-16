import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import CategoryLoader from '../Categories/CategoryLoader'

const NavDiv = styled.div`
    font-size: 18pt;
    padding: 10px;
`

const CategoryNav = ({ categories }) => (
    <NavDiv>
        <CategoryLoader />
        <div>
            <span>Category nav / </span>
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
    </NavDiv>
)

CategoryNav.propTypes = {
    categories: PropTypes.array
}

const mapStateToProps = ({ category }) => ({
    categories: category.categories
})

export default connect(mapStateToProps)(CategoryNav)
