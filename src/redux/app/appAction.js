import { IS_LOGGED_IN, IS_ADMIN } from './appType'

const isLoggedIn = () => {
    return {
        type: IS_LOGGED_IN,
    }
}

const isAdmin = () => {
    return {
        type: IS_ADMIN,
    }
}

export { isLoggedIn, isAdmin }
