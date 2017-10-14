import {
    GET_POSTS,
    ADD_POST,
    EDIT_POST,
    DELETE_POST
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

        case ADD_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.id]: action.payload
                }
            }
        case DELETE_POST:
            let tempPosts = { ...state.posts }
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
        default:
            return state
    }
}
