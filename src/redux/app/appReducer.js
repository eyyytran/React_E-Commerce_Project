import { SIGN_OUT, SET_ADMIN, SET_USER } from './appType'

const initialState = {
    user: null,
    isAdmin: null,
}

const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGN_OUT:
            return { ...state, user: null, isAdmin: null }
        case SET_ADMIN:
            return { ...state, isAdmin: payload }
        case SET_USER:
            return { ...state, user: payload }
        default:
            return state
    }
}

export { appReducer }
