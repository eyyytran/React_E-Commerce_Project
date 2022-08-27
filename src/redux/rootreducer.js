import { combineReducers } from 'redux'
import { appReducer } from './app/appReducer'

export const rootReducer = combineReducers({ app: appReducer })
