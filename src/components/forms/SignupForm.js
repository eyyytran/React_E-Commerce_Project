import { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirm !== '') {
            if (password !== confirm) {
                isValid = false
                console.error('The passwords do not match')
            }
        }
        return isValid
    }

    const register = e => {
        e.preventDefault()
        if (validatePassword()) {
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
