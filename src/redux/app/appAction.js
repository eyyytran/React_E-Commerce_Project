import {
    SET_IS_ADMIN,
    SET_USER,
    SET_IS_CART_OPEN,
    TOGGLE_IS_CART_OPEN,
    SET_IS_SUBMENU_OPEN,
    SET_IS_MOBILESUB_OPEN,
    SET_IS_MOBILENAV_OPEN,
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

const SetIsSubmenuOpen = isOpen => {
    return {
        type: SET_IS_SUBMENU_OPEN,
        payload: isOpen,
    }
}

const SetIsMobileSubOpen = isOpen => {
    return {
        type: SET_IS_MOBILESUB_OPEN,
        payload: isOpen,
    }
}

const SetIsMobileNavOpen = isOpen => {
    return {
        type: SET_IS_MOBILENAV_OPEN,
        payload: isOpen,
    }
}

export {
    SetIsAdmin,
    SetUser,
    SetIsCartOpen,
    ToggleIsCartOpen,
    SetIsSubmenuOpen,
    SetIsMobileSubOpen,
    SetIsMobileNavOpen,
}
