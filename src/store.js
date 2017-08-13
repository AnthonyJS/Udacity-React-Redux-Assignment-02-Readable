import { createStore, compose } from 'redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
)

export default store
