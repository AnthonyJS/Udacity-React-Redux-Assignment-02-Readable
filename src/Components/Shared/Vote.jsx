import React from 'react'
import PropTypes from 'prop-types'

const Vote = ({ voteScore, handleUpVote, handleDownVote }) => (
    <div>
        <button onClick={handleUpVote}>+</button>
        <span>{voteScore}</span>
        <button onClick={handleDownVote}>-</button>
    </div>
)

Vote.propTypes = {
    voteScore: PropTypes.number.isRequired,
    handleUpVote: PropTypes.func.isRequired,
    handleDownVote: PropTypes.func.isRequired
}

export default Vote
