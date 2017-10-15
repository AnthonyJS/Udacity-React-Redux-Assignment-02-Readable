import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import postReducers from '../Features/Posts/postReducers'
import categoryReducers from '../Features/Categories/categoryReducers'
import commentReducers from '../Features/Comments/commentReducers'
import displayReducers from '../Features/Display/displayReducers'

const rootReducer = combineReducers({
    posts: postReducers,
    comments: commentReducers,
    category: categoryReducers,
    display: displayReducers,
    form: formReducer
})

export default rootReducer
