import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    EMPTY_CART,
    SEND_CART,
} from './cartType'

const initialState = {
    cart: [],
}

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, payload] }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== payload.id),
            }
        case EMPTY_CART:
            return { ...state, cart: initialState.cart }
        case SEND_CART:
            return state
        default:
            return state
    }
}

export { cartReducer }
