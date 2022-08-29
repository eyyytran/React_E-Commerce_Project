import {
    SET_IS_ADMIN,
    SET_USER,
    SET_IS_CART_OPEN,
    TOGGLE_IS_CART_OPEN,
} from './appType'

const SetIsAdmin = isAdmin => {
    return {
        type: SET_IS_ADMIN,
        payload: isAdmin,
    }
}

const SetUser = user => {
    return {
        type: SET_USER,
        payload: user,
    }
}

const SetIsCartOpen = isOpen => {
    return {
        type: SET_IS_CART_OPEN,
        payload: isOpen,
    }
}

const ToggleIsCartOpen = () => {
    return {
        type: TOGGLE_IS_CART_OPEN,
    }
}

export { SetIsAdmin, SetUser, SetIsCartOpen, ToggleIsCartOpen }
