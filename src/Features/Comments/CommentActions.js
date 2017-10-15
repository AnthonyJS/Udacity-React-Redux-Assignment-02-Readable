import { getCommentsByPostId } from './CommentData'

export const GET_COMMENTS_BY_POST_ID = 'GET_COMMENTS_BY_POST_ID'

export const GetCommentsByPostId = id => dispatch =>
    getCommentsByPostId(id).then(data => {
        dispatch({
            type: GET_COMMENTS_BY_POST_ID,
            payload: data
        })
    })
