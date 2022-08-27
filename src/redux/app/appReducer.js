import { SET_IS_ADMIN, SET_USER } from './appType'

const initialState = {
    isAdmin: null,
    user: null,
}

const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_IS_ADMIN:
            return { ...state, isAdmin: payload }
        case SET_USER:
            return { ...state, user: payload }
        default:
            return state
    }
}

export { appReducer }
