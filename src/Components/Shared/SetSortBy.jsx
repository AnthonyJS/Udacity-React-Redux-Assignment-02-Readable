import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    UpdatePostSortBy,
    UpdateCommentSortBy
} from '../../Features/Display/displayActions'

const SetSortBy = ({ setPostSortBy, setCommentSortBy, type }) => {
    const doSortBy = value => {
        if (type === 'Posts') return setPostSortBy(value)

        return setCommentSortBy(value)
    }

    return (
        <div>
            Sort by: <br />
            <button onClick={() => doSortBy('voteScore')}>Vote Count</button>
            <button onClick={() => doSortBy('timestamp')}>Timestamp</button>
        </div>
    )
}

SetSortBy.propTypes = {
    setPostSortBy: PropTypes.func.isRequired,
    setCommentSortBy: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    sortBy: state.display.sortBy
})

const mapDispatchToProps = dispatch => ({
    setPostSortBy: sortBy => dispatch(UpdatePostSortBy(sortBy)),
    setCommentSortBy: sortBy => dispatch(UpdateCommentSortBy(sortBy))
})

export default connect(mapStateToProps, mapDispatchToProps)(SetSortBy)
