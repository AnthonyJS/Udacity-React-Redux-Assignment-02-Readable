import { GET_POSTS, ADD_POST, EDIT_POST } from '../actions/postActions'

export default function Reducer(state = {}, action) {
    console.log('action.payload', action.payload)
    switch (action.type) {
        case GET_POSTS:
            return Object.assign(
                {},
                state,
                action.payload.reduce(
                    (prev, curr) => ({ ...prev, [curr.id]: curr }),
                    {}
                )
            )
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
