import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SetUser, SetAdmin, SignOut } from '../../redux'
import { auth } from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

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
            console.log({ user, isAdmin })
            if (user) {
                dispatch(SetUser(user))
                dispatch(SetAdmin(isAdmin))
                navigate('/')
            }
        } catch (error) {
            setError('Wrong email or password')
        }
    }

    return (
        <>
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
                <small className={error === '' ? 'hidden' : 'error'}>
                    {error}
                </small>
                <button>Login</button>
            </form>
            <button onClick={() => dispatch(SignOut())}>Logout</button>
        </>
    )
}

export default LoginForm
