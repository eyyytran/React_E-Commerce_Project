import { useState } from 'react'
import { useSelector } from 'react-redux'
import AccountForm from '../components/forms/AccountForm'
import DeleteAccountForm from '../components/forms/DeleteAccountForm'
import ReAuthForm from '../components/forms/ReAuthForm'

import { auth } from '../firebaseConfig'

const Account = () => {
    const [isAuth, setIsAuth] = useState(false)
    const user = useSelector(state => state.app.user)
    const handleLogout = () => {
        auth.signOut()
    }

    return (
        <div className='account-container'>
            <div className='header-container'>
                <div className='greeting'>
                    <h1>Hello, {user.displayName}</h1>
                </div>
                <button className='primary-btn' onClick={handleLogout}>
                    Sign Out
                </button>
            </div>
            <div
                className={
                    !isAuth ? 'reauth-container' : 'reauth-container hidden'
                }
            >
                <ReAuthForm setIsAuth={setIsAuth} />
            </div>
            <div
                className={
                    !isAuth
                        ? 'account-settings-container hidden'
                        : 'account-settings-container'
                }
            >
                <AccountForm />
                <DeleteAccountForm />
            </div>
        </div>
    )
}

export default Account
