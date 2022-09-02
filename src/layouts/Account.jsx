import { useState } from 'react'
import { useSelector } from 'react-redux'
import AccountForm from '../components/forms/account/AccountForm'
import DeleteAccountButton from '../components/forms/account/DeleteAccountButton'
import ReAuthForm from '../components/forms/account/ReAuthForm'
import { auth } from '../firebaseConfig'
import '../styles/Account.css'

const Account = () => {
    const [isAuth, setIsAuth] = useState(false)
    const user = useSelector(state => state.app.user)
    const handleLogout = () => {
        auth.signOut()
    }

    return (
        <div className='account-container'>
            <div className='header-container'>
                <h1>Hello, {user.displayName}</h1>
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
                className={`account-settings-container ${!isAuth && 'hidden'}`}
            >
                <AccountForm isAuth={isAuth} />
                <DeleteAccountButton isAuth={isAuth} />
            </div>
        </div>
    )
}

export default Account
