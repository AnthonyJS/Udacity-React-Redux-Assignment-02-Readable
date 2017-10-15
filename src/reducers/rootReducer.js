import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import postReducers from './postReducers'
import categoryReducers from './categoryReducers'
import commentReducers from '../Features/Comments/CommentReducers'

const rootReducer = combineReducers({
    content: postReducers,
    comments: commentReducers,
    category: categoryReducers,
    form: formReducer
})

export default rootReducer
