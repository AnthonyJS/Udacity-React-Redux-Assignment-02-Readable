import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get } from 'lodash'
import Vote from '../Shared/Vote'
import {
    UpVotePost,
    DownVotePost,
    GetPostById
} from '../../actions/postActions'

const PostDetail = ({
    id,
    timestamp,
    title,
    body,
    author,
    category,
    deleted,
    voteScore,
    deleteHandler,
    upVotePost,
    downVotePost,
    match,
    getPostById
}) => {
    console.log('aaaaa')

    // if (!title) {
    const idFromUrl = get(match, 'params.post_id')
    getPostById(idFromUrl)

    //  }

    console.log('hererherere')

    return (
        <div>
            <div>id - {id}</div>
            <div>timestamp - {timestamp}</div>
            <div>title - {title}</div>
            <div>body - {body}</div>
            <div>author - {author}</div>
            <div>category - {category}</div>
            <div>deleted - {deleted}</div>

            <button onClick={e => deleteHandler(e, id)}>Delete</button>
            <Vote
                voteScore={voteScore}
                handleUpVote={() => upVotePost(id)}
                handleDownVote={() => downVotePost(id)}
            />
        </div>
    )
}

PostDetail.propTypes = {
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    deleted: PropTypes.bool,
    voteScore: PropTypes.number.isRequired,
    deleteHandler: PropTypes.func.isRequired,
    upVotePost: PropTypes.func.isRequired,
    downVotePost: PropTypes.func.isRequired,
    getPostById: PropTypes.func.isRequired
}

const mapStateToProps = ({ content }) => ({
    ...content.posts[content.currentPostId]
})

const mapDispatchToProps = dispatch => ({
    upVotePost: id => dispatch(UpVotePost(id)),
    downVotePost: id => dispatch(DownVotePost(id)),
    getPostById: id => dispatch(GetPostById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
