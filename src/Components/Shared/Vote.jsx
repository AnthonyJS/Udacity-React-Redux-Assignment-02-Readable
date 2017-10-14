import React from 'react'
import PropTypes from 'prop-types'

const Vote = ({ voteScore, handleUpVote, handleDownVote }) => (
    <div>
        <span>{voteScore}</span>
        <button onClick={handleUpVote}>+</button>
        <button onClick={handleDownVote}>-</button>
    </div>
)

Vote.propTypes = {
    voteScore: PropTypes.number.isRequired,
    handleUpVote: PropTypes.func.isRequired,
    handleDownVote: PropTypes.func.isRequired
}

export default Vote
