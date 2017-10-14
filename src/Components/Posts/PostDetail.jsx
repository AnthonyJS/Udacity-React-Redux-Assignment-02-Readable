import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import Vote from '../Shared/Vote'
import EditPost from './EditPost'

import {
    UpVotePost,
    DownVotePost,
    GetPostById,
    UpdateCurrentPostId
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
    getPostById,
    updateCurrentPostId
}) => {
    if (!title) {
        const idFromUrl = get(match, 'params.post_id')
        updateCurrentPostId(idFromUrl)
        getPostById(idFromUrl)
    }

    return (
        <div>
            <Link to={`/${category}`}>Link back to {category} category</Link>
            {title && (
                <div>
                    <div>id - {id}</div>
                    <div>
                        timestamp -{' '}
                        {dateFormat(
                            timestamp,
                            'dddd, mmmm dS, yyyy, h:MM:ss TT'
                        )}
                    </div>
                    <div>title - {title}</div>
                    <div>body - {body}</div>
                    <div>author - {author}</div>
                    <div>category - {category}</div>

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
                </div>
            )}
            <EditPost postId={id} />
        </div>
    )
}

PostDetail.propTypes = {
    id: PropTypes.string,
    timestamp: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    deleted: PropTypes.bool,
    voteScore: PropTypes.number,
    deleteHandler: PropTypes.func,
    upVotePost: PropTypes.func,
    downVotePost: PropTypes.func,
    getPostById: PropTypes.func.isRequired,
    updateCurrentPostId: PropTypes.func.isRequired,
    match: PropTypes.object
}

const mapStateToProps = ({ content }) => ({
    ...content.posts[content.currentPostId]
})

const mapDispatchToProps = dispatch => ({
    upVotePost: id => dispatch(UpVotePost(id)),
    downVotePost: id => dispatch(DownVotePost(id)),
    getPostById: id => dispatch(GetPostById(id)),
    updateCurrentPostId: id => dispatch(UpdateCurrentPostId(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
