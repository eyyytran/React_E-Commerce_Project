import {
    SET_IS_ADMIN,
    SET_USER,
    SET_IS_CART_OPEN,
    TOGGLE_IS_CART_OPEN,
} from './appType'

const initialState = {
    isAdmin: null,
    user: null,
    isCartOpen: false,
}

const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_IS_ADMIN:
            return { ...state, isAdmin: payload }
        case SET_USER:
            return { ...state, user: payload }
        case SET_IS_CART_OPEN:
            return { ...state, isCartOpen: payload }
        case TOGGLE_IS_CART_OPEN:
            return { ...state, isCartOpen: !state.isCartOpen }
        default:
            return state
    }
}

export { appReducer }
