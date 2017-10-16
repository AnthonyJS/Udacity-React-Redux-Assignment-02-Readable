export const SET_POST_SORT_BY = 'SET_POST_SORT_BY'
export const SET_COMMENT_SORT_BY = 'SET_COMMENT_SORT_BY'

export const UpdatePostSortBy = sortBy => dispatch =>
    dispatch({
        type: SET_POST_SORT_BY,
        payload: sortBy
    })

export const UpdateCommentSortBy = sortBy => dispatch =>
    dispatch({
        type: SET_COMMENT_SORT_BY,
        payload: sortBy
    })
