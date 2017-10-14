import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Vote from '../Shared/Vote'
import { UpVotePost, DownVotePost } from '../../actions/postActions'

const PostDetail = ({
    postId,
    timestamp,
    title,
    body,
    author,
    category,
    deleted,
    voteScore,
    updateCurrentPostId,
    deleteHandler,
    upVotePost,
    downVotePost
}) => (
    <div>
        <div>id - {postId}</div>
        <div>timestamp - {timestamp}</div>
        <div>title - {title}</div>
        <div>body - {body}</div>
        <div>author - {author}</div>
        <div>category - {category}</div>
        <div>deleted - {deleted}</div>
        <button
            value="edit"
            onClick={() => {
                updateCurrentPostId(postId)
            }}
        >
            Edit
        </button>
        <button onClick={e => deleteHandler(e, postId)}>Delete</button>
        <Vote
            voteScore={voteScore}
            handleUpVote={() => upVotePost(postId)}
            handleDownVote={() => downVotePost(postId)}
        />
    </div>
)

PostDetail.propTypes = {
    postId: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    deleted: PropTypes.bool,
    voteScore: PropTypes.number.isRequired,
    updateCurrentPostId: PropTypes.func.isRequired,
    deleteHandler: PropTypes.func.isRequired,
    upVotePost: PropTypes.func.isRequired,
    downVotePost: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    upVotePost: id => dispatch(UpVotePost(id)),
    downVotePost: id => dispatch(DownVotePost(id))
})

export default connect(null, mapDispatchToProps)(PostDetail)
