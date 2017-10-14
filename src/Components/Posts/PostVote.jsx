import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Vote from '../Shared/Vote'

import { UpVotePost, DownVotePost } from '../../actions/postActions'

const PostVote = ({ voteScore, id, upVotePost, downVotePost }) => (
    <Vote
        voteScore={voteScore}
        handleUpVote={() => upVotePost(id)}
        handleDownVote={() => downVotePost(id)}
    />
)

PostVote.propTypes = {
    id: PropTypes.string,
    voteScore: PropTypes.number,
    upVotePost: PropTypes.func,
    downVotePost: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
    upVotePost: id => dispatch(UpVotePost(id)),
    downVotePost: id => dispatch(DownVotePost(id))
})

export default connect(null, mapDispatchToProps)(PostVote)
