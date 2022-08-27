import { LOGIN, SET_USER, SET_ADMIN, SIGN_OUT } from './appType'

const SetUser = user => {
    return {
        type: SET_USER,
        payload: user,
    }
}

const SetAdmin = isAdmin => {
    return {
        type: SET_ADMIN,
        payload: isAdmin,
    }
}

const SignOut = () => {
    return {
        type: SIGN_OUT,
    }
}

export { SignOut, SetAdmin, SetUser }
