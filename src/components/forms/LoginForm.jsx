import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const login = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                setError('No matching records')
            })
    }
    return (
        <form onSubmit={login}>
            <input
                type='text'
                name='email'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type='text'
                name='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
            />
            <small className={error === '' ? 'hidden' : 'error'}>{error}</small>
            <button>Login</button>
        </form>
    )
}

export default LoginForm
