import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer'
import { initialState } from './initialState'

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk))