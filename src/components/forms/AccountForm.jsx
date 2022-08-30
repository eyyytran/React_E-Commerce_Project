import { useState } from 'react'
import { getAuth, updatePassword } from 'firebase/auth'
import { isRequired, isEmail, isSecure } from '../utils/validations'
import { updateDisplayName, updateUserEmail } from '../utils/dbRequests'

const AccountForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const auth = getAuth()

    const validateEmail = () => {
        let valid = false
        if (!isRequired(email)) {
            setError('Email is required.')
        } else if (!isEmail(email)) {
            setError('Not a valid email')
        } else {
            setError('')
            valid = true
        }
        return valid
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (name) {
            try {
                updateDisplayName(auth.currentUser, name)
                setSuccess('successfully updated display name')
                setError('')
                setName('')
            } catch (error) {
                setError('unable to update display name')
            }
        }
        if (validateEmail()) {
            try {
                updateUserEmail(auth.currentUser, email)
                setSuccess('successfully updated email')
            } catch (error) {
                setError('unable to update email')
            }
        }
    }

    return (
        <form action=''>
            <input
                type='text'
                name='name'
                value={name}
                placeholder='Set Display Name'
                onChange={e => setName(e.target.value)}
            />
            <input
                type='text'
                name='email'
                value={email}
                placeholder='Set New Email'
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type='text'
                name='new'
                value={password}
                placeholder='New Password'
                onChange={e => setPassword(e.target.value)}
            />
            <input
                type='text'
                name='confirm'
                value={confirm}
                placeholder='Confirm New Password'
                onChange={e => setConfirm(e.target.value)}
            />
            <small>{error}</small>
            <small>{success}</small>
            <button onClick={handleSubmit}>Update Profile</button>
        </form>
    )
}

export default AccountForm
