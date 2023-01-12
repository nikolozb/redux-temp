import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from 'redux'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	cash: cashReducer,
	customers: customerReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
