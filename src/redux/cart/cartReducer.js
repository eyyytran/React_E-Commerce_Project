import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    EMPTY_CART,
    SEND_CART,
} from './cartType'

const initialState = {
    cart: [],
    subtotal: 0,
}

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            const matchingProductIndex = state.cart.findIndex(
                product => product.id === payload.id
            )
            if (matchingProductIndex === -1) {
                return {
                    ...state,
                    cart: [...state.cart, payload],
                }
            } else {
                const matchingProduct = state.cart.splice(
                    matchingProductIndex,
                    1
                )
                matchingProduct[0].qtyToBuy = matchingProduct[0].qtyToBuy + 1
                state.cart.splice(matchingProductIndex, 0, matchingProduct[0])
                return { ...state, cart: [...state.cart] }
            }
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
