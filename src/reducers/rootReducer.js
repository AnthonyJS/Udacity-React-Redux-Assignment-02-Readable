import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import postReducers from './postReducers'
import categoryReducers from './categoryReducers'

const rootReducer = combineReducers({
    content: postReducers,
    category: categoryReducers,
    form: formReducer
})

export default rootReducer
