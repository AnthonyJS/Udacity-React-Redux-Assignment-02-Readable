import {
    GET_COMMENTS_BY_POST_ID,
    UP_VOTE_COMMENT,
    DOWN_VOTE_COMMENT
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
        case UP_VOTE_COMMENT:
            const tempComments1 = { ...state }

            tempComments1[action.payload].voteScore++

            return {
                ...tempComments1
            }
        case DOWN_VOTE_COMMENT:
            const tempComments2 = { ...state }

            tempComments2[action.payload].voteScore--

            return {
                ...tempComments2
            }
        default:
            return state
    }
}
