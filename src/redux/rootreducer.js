import { combineReducers } from 'redux'
import { appReducer } from './app/appReducer'
import { cartReducer } from './cart/cartReducer'

export const rootReducer = combineReducers({
    app: appReducer,
    cart: cartReducer,
})
