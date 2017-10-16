import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const VoteScore = styled.span`
    font-size: 20pt;
    font-weight: bold;
`

const Vote = ({ voteScore, handleUpVote, handleDownVote }) => (
    <div>
        <button onClick={handleUpVote}>+</button>
        <VoteScore>{voteScore}</VoteScore>
        <button onClick={handleDownVote}>-</button>
    </div>
)

Vote.propTypes = {
    voteScore: PropTypes.number.isRequired,
    handleUpVote: PropTypes.func.isRequired,
    handleDownVote: PropTypes.func.isRequired
}

export default Vote
