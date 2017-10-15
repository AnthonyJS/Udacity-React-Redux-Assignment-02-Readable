import {
    GET_COMMENTS_BY_POST_ID,
    UP_VOTE_COMMENT,
    DOWN_VOTE_COMMENT,
    ADD_COMMENT,
    DELETE_COMMENT,
    CURRENT_COMMENT_ID
} from './CommentActions'

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
        case ADD_COMMENT:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case UP_VOTE_COMMENT:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    voteScore: state[action.payload].voteScore + 1
                }
            }
        case DOWN_VOTE_COMMENT:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    voteScore: state[action.payload].voteScore - 1
                }
            }
        case DELETE_COMMENT:
            const tempComments = { ...state }
            delete tempComments[action.payload]
            return {
                ...tempComments
            }

        case CURRENT_COMMENT_ID:
            return {
                ...state,
                currentCommentId: action.payload
            }
        default:
            return state
    }
}
