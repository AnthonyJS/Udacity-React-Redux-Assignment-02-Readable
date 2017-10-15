import {
    GET_POSTS,
    GET_POST_BY_ID,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    CURRENT_POST_ID,
    UP_VOTE_POST,
    DOWN_VOTE_POST
} from '../actions/postActions'

export default function Reducer(state = { posts: {} }, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload.reduce(
                    (prev, curr) => ({ ...prev, [curr.id]: curr }),
                    {}
                )
            }

        case GET_POST_BY_ID:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.id]: action.payload
                }
            }

        case ADD_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.id]: action.payload
                }
            }
        case DELETE_POST:
            const tempPosts = { ...state.posts }
            delete tempPosts[action.payload]
            return {
                ...state,
                posts: tempPosts
            }
        case EDIT_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.id]: action.payload
                }
            }
        case CURRENT_POST_ID:
            return {
                ...state,
                currentPostId: action.payload
            }
        case UP_VOTE_POST:
            // const tempPostsa = { ...state.posts }

            // tempPostsa[action.payload].voteScore++

            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload]: {
                        ...state.posts[action.payload],
                        voteScore: state.posts[action.payload].voteScore + 1
                    }
                }
            }
        case DOWN_VOTE_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload]: {
                        ...state.posts[action.payload],
                        voteScore: state.posts[action.payload].voteScore - 1
                    }
                }
            }
        default:
            return state
    }
}
