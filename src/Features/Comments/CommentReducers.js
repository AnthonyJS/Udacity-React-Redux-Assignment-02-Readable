import { GET_COMMENTS_BY_POST_ID } from './CommentActions'

export default function Reducer(state = {}, action) {
    switch (action.type) {
        case GET_COMMENTS_BY_POST_ID:
            return {
                ...state,
                ...action.payload.reduce(
                    (prev, curr) => ({ ...prev, [curr.id]: curr }),
                    {}
                )
            }
        default:
            return state
    }
}
