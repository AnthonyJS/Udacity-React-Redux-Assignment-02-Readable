import {
    GET_POSTS,
    GET_POST_BY_ID,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    UP_VOTE_POST,
    DOWN_VOTE_POST
} from './postActions'

export default function Reducer(state = { posts: {} }, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...action.payload.reduce(
                    (prev, curr) => ({ ...prev, [curr.id]: curr }),
                    {}
                )
            }

        case GET_POST_BY_ID:
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        case ADD_POST:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case DELETE_POST:
            const tempPosts = { ...state }
            delete tempPosts[action.payload]
            return {
                ...tempPosts
            }
        case EDIT_POST:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case UP_VOTE_POST:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    voteScore: state[action.payload].voteScore + 1
                }
            }
        case DOWN_VOTE_POST:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    voteScore: state[action.payload].voteScore - 1
                }
            }
        default:
            return state
    }
}
