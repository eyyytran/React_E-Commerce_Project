import {
    SET_IS_ADMIN,
    SET_USER,
    SET_IS_CART_OPEN,
    TOGGLE_IS_CART_OPEN,
    SET_IS_SUBMENU_OPEN,
    SET_IS_MOBILESUB_OPEN,
    SET_IS_MOBILENAV_OPEN,
} from './appType'

const initialState = {
    isAdmin: null,
    user: null,
    isCartOpen: false,
    isSubmenuOpen: false,
    isMobileSubOpen: false,
    isMobileNavOpen: false,
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
        case SET_IS_SUBMENU_OPEN:
            return { ...state, isSubmenuOpen: payload }
        case SET_IS_MOBILESUB_OPEN:
            return { ...state, isMobileSubOpen: payload }
        case SET_IS_MOBILENAV_OPEN:
            return { ...state, isMobileNavOpen: payload }
        default:
            return state
    }
}

export { appReducer }
