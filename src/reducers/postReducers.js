import { GET_POSTS, ADD_POST, EDIT_POST } from '../actions/postActions'

export default function Reducer(state = { posts: [] }, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }

        case ADD_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.payload.id]: action.payload
                }
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
