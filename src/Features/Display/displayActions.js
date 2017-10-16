export const SET_SORT_BY = 'SET_SORT_BY'

export const UpdateSortBy = sortBy => dispatch =>
    dispatch({
        type: SET_SORT_BY,
        payload: sortBy
    })
