import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    EMPTY_CART,
    SEND_CART,
} from './cartType'

const addToCart = () => {
    return {
        type: ADD_TO_CART,
    }
}

const removeFromCart = () => {
    return {
        type: REMOVE_FROM_CART,
    }
}

const emptyCart = () => {
    return {
        type: EMPTY_CART,
    }
}

const sendCart = () => {
    return {
        type: SEND_CART,
    }
}

export { addToCart, sendCart, emptyCart, removeFromCart }
