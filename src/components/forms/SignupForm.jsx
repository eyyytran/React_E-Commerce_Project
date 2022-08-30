import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmError, setConfirmError] = useState('')

    const navigate = useNavigate()

    const isRequired = value => (value === '' ? false : true)

    const isEmail = () => {
        const re = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
        console.log(re.test(email))
        return re.test(email)
    }

    const isSecure = () => {
        const re = new RegExp(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,50}$'
        )

        return re.test(password)
    }

    const validateEmail = () => {
        let valid = false
        if (!isRequired(email)) {
            setEmailError('Email is required.')
        } else if (!isEmail(email)) {
            setEmailError('Not a valid email')
        } else {
            setEmailError('')
            valid = true
        }
        return valid
    }

    const validatePassword = () => {
        let valid = false
        if (!isRequired(password)) {
            setPasswordError('Password is required')
        } else if (!isSecure(password)) {
            setPasswordError(
                'Passwords must be between 8-50 characters, include 1 uppercase, 1 number, and 1 special character'
            )
        } else if (password !== confirm) {
            setConfirmError('Passwords do not match')
        } else {
            setConfirmError('')
            setPasswordError('')
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
            <input
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <small className={emailError === '' ? 'hidden' : 'error'}>
                {emailError}
            </small>
            <input
                type='password'
                name='password'
                placeholder='Create a password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <small className={passwordError === '' ? 'hidden' : 'error'}>
                {passwordError}
            </small>
            <input
                type='password'
                name='confirm-password'
                placeholder='Confirm password'
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
            />
            <small className={confirmError === '' ? 'hidden' : 'error'}>
                {confirmError}
            </small>
            <button type='submit'>Register</button>
        </form>
    )
}

export default SignupForm
