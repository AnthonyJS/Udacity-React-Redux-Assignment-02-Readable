export const GET_COMMENTS_FOR_POST = 'GET_POSTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'

export function AddComment(comment) {
    // Send data to API
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}

export function EditComment(comment) {
    // Send data to API
    return {
        type: EDIT_COMMENT,
        payload: comment
    }
}
