import { SHOW_CREATE_POST, HIDE_CREATE_POST } from './displayActions'

export default function Reducer(state = {}, action) {
    switch (action.type) {
        case SHOW_CREATE_POST:
            return {
                ...state,
                showCreatePost: true
            }
        case HIDE_CREATE_POST:
            return {
                ...state,
                showCreatePost: false
            }
        default:
            return state
    }
}
