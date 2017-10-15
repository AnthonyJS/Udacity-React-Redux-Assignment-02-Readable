import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetCategories } from '../../Features/Categories/categoryActions'

const CategoryLoader = ({ categories, getCategories }) => {
    if (categories.length === 0) getCategories()

    return null
}

CategoryLoader.propTypes = {
    categories: PropTypes.array.isRequired,
    getCategories: PropTypes.func.isRequired
}

const mapStateToProps = ({ category }) => ({
    categories: category.categories
})

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(GetCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryLoader)
