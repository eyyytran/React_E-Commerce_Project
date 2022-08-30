import { useState } from 'react'
import {
    EmailAuthProvider,
    getAuth,
    reauthenticateWithCredential,
} from 'firebase/auth'

const DeleteAccountForm = () => {
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const auth = getAuth()

    const handleReAuth = async e => {
        e.preventDefault()
        try {
            const credential = await EmailAuthProvider.credential(
                auth.currentUser?.email,
                password
            )
            await reauthenticateWithCredential(auth.currentUser, credential)
            setSuccess(true)
            setError('')
        } catch (error) {
            setError('unable to authenticate user')
            setSuccess(false)
        }
    }

    const handleDelete = e => {
        e.preventDefault()
        console.log('deleted')
    }
    return (
        <form>
            <input
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <small>{error}</small>
            <button onClick={!success ? handleReAuth : handleDelete}>
                {!success ? 'Confirm Password' : 'Delete Account'}
            </button>
        </form>
    )
}

export default DeleteAccountForm
