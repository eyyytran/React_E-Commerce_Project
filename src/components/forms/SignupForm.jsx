import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { isRequired, isSecure, isEmail } from '../utils/validations'
import TextField from '@mui/material/TextField'

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmError, setConfirmError] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState(false)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(false)
    const [confirmErrorMessage, setConfirmErrorMessage] = useState(false)

    const navigate = useNavigate()

    const validateEmail = () => {
        let valid = false
        if (!isRequired(email)) {
            setEmailErrorMessage('Email is required.')
            setEmailError(true)
        } else if (!isEmail(email)) {
            setEmailErrorMessage('Not a valid email')
            setEmailError(true)
        } else {
            setEmailErrorMessage('')
            setEmailError(false)
            valid = true
        }
        return valid
    }

    const validatePassword = () => {
        let valid = false
        if (!isRequired(password)) {
            setPasswordErrorMessage('Password is required')
            setPasswordError(true)
        } else if (!isSecure(password)) {
            setPasswordErrorMessage(
                'Passwords must be between 8-50 characters, include 1 uppercase, 1 number, and 1 special character'
            )
            setPasswordError(true)
        } else if (password !== confirm) {
            setConfirmErrorMessage('Passwords do not match')
            setConfirmError(true)
            setPasswordError(true)
        } else {
            setConfirmError('')
            setPasswordErrorMessage('')
            setPasswordError(false)
            setConfirmError(false)
            valid = true
        }
        return valid
    }

    const validateForm = () => {
        let validPassword = validatePassword()
        let validEmail = validateEmail()
        let valid = false
        if (validPassword && validEmail) {
            return (valid = true)
        }
        return valid
    }

    const register = e => {
        e.preventDefault()
        if (validateForm()) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    navigate('/')
                })
                .catch(err => console.error(err))
        }
        setEmail('')
        setPassword('')
        setConfirm('')
    }

    return (
        <form className='signup' onSubmit={register}>
            <TextField
                error={emailError}
                helperText={emailErrorMessage}
                sx={{ width: { sm: 200, md: 300 } }}
                margin='normal'
                variant='standard'
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                sx={{ width: { sm: 200, md: 300 } }}
                error={passwordError}
                helperText={passwordErrorMessage}
                margin='normal'
                variant='standard'
                type='password'
                name='password'
                placeholder='Create a password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <TextField
                error={confirmError}
                helperText={confirmErrorMessage}
                sx={{ width: { sm: 200, md: 300 } }}
                margin='normal'
                variant='standard'
                type='password'
                name='confirm-password'
                placeholder='Confirm password'
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
            />
            <button className='primary-btn' type='submit'>
                Register
            </button>
        </form>
    )
}

export default SignupForm
