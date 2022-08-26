import { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

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
            console.error('Email is required')
        } else if (!isEmail(email)) {
            console.error('Not a valid email')
        } else {
            console.log('email is valid')
            valid = true
        }
        return valid
    }

    const validatePassword = () => {
        let valid = false
        if (!isRequired(password)) {
            console.error('Password is required')
        } else if (!isSecure(password)) {
            console.error('Invalid Password')
        } else if (password !== confirm) {
            console.error('Passwords do not match')
        } else {
            console.log('This is a good password')
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
                .then(res => {
                    console.log(res.user)
                })
                .catch(err => console.error(err))
        }
        setEmail('')
        setPassword('')
        setConfirm('')
    }

    return (
        <form onSubmit={register}>
            <input
                type='text'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type='text'
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <input
                type='text'
                name='confirm-password'
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
            />
            <button type='submit'>Register</button>
        </form>
    )
}

export default SignupForm
