import { SET_POST_SORT_BY, SET_COMMENT_SORT_BY } from './displayActions'

export default function Reducer(
    state = { postSortBy: 'voteScore', commentSortBy: 'voteScore' },
    action
) {
    switch (action.type) {
        case SET_POST_SORT_BY:
            return {
                ...state,
                postSortBy: action.payload
            }
        case SET_COMMENT_SORT_BY:
            return {
                ...state,
                commentSortBy: action.payload
            }
        default:
            return state
    }
}
