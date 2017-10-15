import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Vote from '../Shared/Vote'
import {
    UpVoteComment,
    DownVoteComment
} from '../../Features/Comments/commentActions'

const CommentVote = ({ voteScore, id, upVoteComment, downVoteComment }) => (
    <Vote
        voteScore={voteScore}
        handleUpVote={() => upVoteComment(id)}
        handleDownVote={() => downVoteComment(id)}
    />
)

CommentVote.propTypes = {
    id: PropTypes.string,
    voteScore: PropTypes.number,
    upVoteComment: PropTypes.func,
    downVoteComment: PropTypes.func
}

const mapStateToProps = ({ comments }, ownProps) => ({
    voteScore: comments[ownProps.id].voteScore
})

const mapDispatchToProps = dispatch => ({
    upVoteComment: id => dispatch(UpVoteComment(id)),
    downVoteComment: id => dispatch(DownVoteComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentVote)
