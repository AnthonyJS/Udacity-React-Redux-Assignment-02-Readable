import uuid from 'uuid/v4'
import {
    getCommentsByPostId,
    updateCommentVote,
    addComment
} from './CommentData'

export const GET_COMMENTS_BY_POST_ID = 'GET_COMMENTS_BY_POST_ID'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'

export const GetCommentsByPostId = id => dispatch =>
    getCommentsByPostId(id).then(data => {
        dispatch({
            type: GET_COMMENTS_BY_POST_ID,
            payload: data
        })
    })

export const UpVoteComment = id => dispatch =>
    updateCommentVote({ id, option: 'upVote' }).then(() => {
        dispatch({
            type: UP_VOTE_COMMENT,
            payload: id
        })
    })

export const DownVoteComment = id => dispatch =>
    updateCommentVote({ id, option: 'downVote' }).then(() => {
        dispatch({
            type: DOWN_VOTE_COMMENT,
            payload: id
        })
    })

export const AddComment = ({ body, author, postId }) => {
    const comment = {
        id: uuid(),
        parentId: postId,
        timestamp: Date.now(),
        body,
        author,
        deleted: false,
        parentDeleted: false,
        voteScore: 1
    }

    return dispatch =>
        addComment(comment).then(() => {
            dispatch({
                type: ADD_COMMENT,
                payload: comment
            })
        })
}
