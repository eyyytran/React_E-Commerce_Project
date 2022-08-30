import AccountForm from '../components/forms/AccountForm'
import DeleteAccountForm from '../components/forms/DeleteAccountForm'
import Shelfie from '../components/Shelfie'
import { auth } from '../firebaseConfig'

const Account = () => {
    const handleLogout = () => {
        auth.signOut()
    }

    return (
        <div className='account-container'>
            <div className='header-container'>
                <div className='greeting'>
                    <h1>Welcome,</h1>
                </div>
                <button onClick={handleLogout}>Sign Out</button>
            </div>
            <div className='shelfie-container'>
                <Shelfie />
            </div>
            <div className='account-settings-container'>
                <AccountForm />
                <DeleteAccountForm />
            </div>
        </div>
    )
}

export default Account
