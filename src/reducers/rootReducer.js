import { combineReducers } from 'redux'
import postReducers from './postReducers'

const rootReducer = combineReducers({ content: postReducers })

export default rootReducer
