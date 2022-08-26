import { useState } from 'react'
import { useAuthCreateUserWithEmailAndPassword } from '@react-query-firebase/auth'
import { auth } from '../../firebaseConfig'

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const mutation = useAuthCreateUserWithEmailAndPassword(auth)

    function handleClick() {
        mutation.mutate({ email, password })
    }

    return (
        <form>
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
            <button onClick={handleClick}>Register</button>
        </form>
    )
}

export default SignupForm
