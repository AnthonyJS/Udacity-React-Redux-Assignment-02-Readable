import { GET_CATEGORIES } from '../actions/categoryActions'

export default function Reducer(state = { categories: [] }, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories
            }
        default:
            return state
    }
}
