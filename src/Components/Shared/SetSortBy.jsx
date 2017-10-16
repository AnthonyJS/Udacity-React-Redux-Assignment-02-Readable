import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UpdateSortBy } from '../../Features/Display/displayActions'

const SetSortBy = ({ setSortBy }) => (
    <div>
        Sort by: <br />
        <button onClick={() => setSortBy('voteScore')}>Vote Count</button>
        <button onClick={() => setSortBy('timestamp')}>Timestamp</button>
    </div>
)

SetSortBy.propTypes = {
    setSortBy: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    sortBy: state.display.sortBy
})

const mapDispatchToProps = dispatch => ({
    setSortBy: sortBy => dispatch(UpdateSortBy(sortBy))
})

export default connect(mapStateToProps, mapDispatchToProps)(SetSortBy)
