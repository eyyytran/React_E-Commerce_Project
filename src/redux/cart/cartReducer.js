import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    EMPTY_CART,
    SEND_CART,
} from './cartType'

const initialState = {
    cart: [],
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] }
        case REMOVE_FROM_CART:
            return state
        case EMPTY_CART:
            return { ...state, cart: initialState.cart }
        case SEND_CART:
            return state
        default:
            return state
    }
}

export { CartReducer }
