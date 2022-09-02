import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SetIsAdmin } from '../../redux'
import { auth } from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import TextField from '@mui/material/TextField'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = async e => {
        e.preventDefault()

        const checkAdmin = async () => {
            const adminRef = collection(db, 'admin')
            const q = query(adminRef, where('email', '==', email))
            const snapshot = await getDocs(q)
            let isAdmin = false
            snapshot.forEach(doc => {
                if (doc.data()) isAdmin = true
            })
            return isAdmin
        }

        try {
            const results = await Promise.all([
                signInWithEmailAndPassword(auth, email, password),
                checkAdmin(),
            ])
            const user = results[0].user
            const isAdmin = results[1]
            if (user) {
                dispatch(SetIsAdmin(isAdmin))
                navigate('/')
            }
        } catch (error) {
            setError('Wrong email or password')
        }
    }

    return (
        <form onSubmit={login}>
            <TextField
                sx={{ width: { sm: 200, md: 300 } }}
                margin='normal'
                variant='standard'
                type='text'
                name='email'
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                sx={{ width: { sm: 200, md: 300 } }}
                margin='normal'
                variant='standard'
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <small className={error === '' ? 'hidden' : 'error'}>{error}</small>
            <button className='primary-btn'>Login</button>
        </form>
    )
}

export default LoginForm
