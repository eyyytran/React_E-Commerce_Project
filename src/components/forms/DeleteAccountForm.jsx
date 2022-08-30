import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    deleteUser,
    EmailAuthProvider,
    getAuth,
    reauthenticateWithCredential,
} from 'firebase/auth'

const DeleteAccountForm = () => {
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
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

    const handleDelete = async e => {
        e.preventDefault()
        try {
            await deleteUser(auth.currentUser)
            navigate('/')
        } catch (error) {
            setError('unable to delete user')
        }
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
