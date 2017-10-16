import { SET_SORT_BY } from './displayActions'

export default function Reducer(state = { sortBy: 'voteScore' }, action) {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        default:
            return state
    }
}
