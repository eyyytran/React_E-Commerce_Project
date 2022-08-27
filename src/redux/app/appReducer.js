import { IS_LOGGED_IN, IS_ADMIN } from './appType'

const initialState = {
    isLoggedIn: false,
    isAdmin: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_LOGGED_IN':
            return { ...state }
        case 'IS_ADMIN':
            return { ...state }
        default:
            return state
    }
}

export { appReducer }
