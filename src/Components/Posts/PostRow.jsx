import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Vote from '../Shared/Vote'
import { UpVotePost, DownVotePost } from '../../actions/postActions'

const PostRow = ({
    id,
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
    <li key={id}>
        <div>id - {id}</div>
        <div>timestamp - {timestamp}</div>
        <div>title - {title}</div>
        <div>body - {body}</div>
        <div>author - {author}</div>
        <div>category - {category}</div>
        <div>deleted - {deleted}</div>

        <button
            value="edit"
            onClick={() => {
                updateCurrentPostId(id)
            }}
        >
            Edit
        </button>
        <button onClick={e => deleteHandler(e, id)}>Delete</button>
        <Vote
            voteScore={voteScore}
            handleUpVote={() => upVotePost(id)}
            handleDownVote={() => downVotePost(id)}
        />
    </li>
)

PostRow.propTypes = {
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    deleted: PropTypes.bool.isRequired,
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

export default connect(null, mapDispatchToProps)(PostRow)
