import { SET_IS_ADMIN, SET_USER } from './appType'

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

export { SetIsAdmin, SetUser }
