import { useState } from 'react'

import {
    EmailAuthProvider,
    getAuth,
    reauthenticateWithCredential,
} from 'firebase/auth'

const ReAuthForm = ({ setIsAuth }) => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const auth = getAuth()

    const handleReAuth = async e => {
        e.preventDefault()
        try {
            const credential = await EmailAuthProvider.credential(
                auth.currentUser?.email,
                password
            )
            await reauthenticateWithCredential(auth.currentUser, credential)
            setIsAuth(true)
            setError('')
        } catch (error) {
            setIsAuth(false)
            setError('unable to authenticate user')
        }
    }

    return (
        <>
            <form>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <small>{error}</small>
                <button className='primary-btn' onClick={handleReAuth}>
                    Confirm Password
                </button>
            </form>
        </>
    )
}

export default ReAuthForm
