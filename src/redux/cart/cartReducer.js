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
                    subtotal: state.subtotal + payload.price,
                    cart: [...state.cart, payload],
                }
            } else {
                const newCart = Array.from(state.cart)
                newCart[matchingProductIndex].qtyToBuy++
                return {
                    ...state,
                    subtotal: state.subtotal + payload.price,
                    cart: newCart,
                }
            }
        case REMOVE_FROM_CART:
            const matchingProduct = state.cart.find(
                product => product.id === payload.id
            )
            const qty = matchingProduct.qtyToBuy
            return {
                ...state,
                subtotal: state.subtotal - payload.price * qty,
                cart: state.cart.filter(product => product.id !== payload.id),
            }
        case EMPTY_CART:
            return { ...state, subtotal: 0, cart: [] }
        case SEND_CART:
            return state
        default:
            return state
    }
}

export { cartReducer }
