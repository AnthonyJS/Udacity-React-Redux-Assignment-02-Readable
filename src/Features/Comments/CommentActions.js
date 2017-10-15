import { getCommentsByPostId, updateCommentVote } from './CommentData'

export const GET_COMMENTS_BY_POST_ID = 'GET_COMMENTS_BY_POST_ID'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'

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
