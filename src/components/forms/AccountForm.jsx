import { useState } from 'react'
import { getAuth, updatePassword } from 'firebase/auth'
import { isRequired, isEmail, isSecure } from '../utils/validations'
import {
    updateDisplayName,
    updateUserEmail,
    updateUserPassword,
} from '../utils/dbRequests'

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

    const validatePassword = () => {
        let valid = false
        if (!isRequired(password)) {
            setError('Password is required')
        } else if (!isSecure(password)) {
            setError(
                'Passwords must be between 8-50 characters, include 1 uppercase, 1 number, and 1 special character'
            )
        } else if (password !== confirm) {
            setError('Passwords do not match')
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
        if (email && validateEmail()) {
            try {
                updateUserEmail(auth.currentUser, email)
                setSuccess('successfully updated email')
            } catch (error) {
                setError('unable to update email')
            }
        }
        if (password && validatePassword()) {
            try {
                updateUserPassword(auth.currentUser, password)
                setSuccess('successfully updated password')
            } catch (error) {
                setError('')
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
                type='password'
                name='new'
                value={password}
                placeholder='New Password'
                onChange={e => setPassword(e.target.value)}
            />
            <input
                type='password'
                name='confirm'
                value={confirm}
                placeholder='Confirm New Password'
                onChange={e => setConfirm(e.target.value)}
            />
            <small>{error}</small>
            <small className='success-text'>{success}</small>
            <button className='primary-btn' onClick={handleSubmit}>
                Update Profile
            </button>
        </form>
    )
}

export default AccountForm
