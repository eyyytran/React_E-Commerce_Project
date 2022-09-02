import { useState } from 'react'
import TextField from '@mui/material/TextField'
import {
    EmailAuthProvider,
    getAuth,
    reauthenticateWithCredential,
} from 'firebase/auth'

const ReAuthForm = ({ setIsAuth }) => {
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState(false)

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
            setErrorMessage('')
            setError(false)
        } catch (error) {
            setIsAuth(false)
            setErrorMessage('unable to authenticate user')
            setError(true)
        }
    }

    return (
        <>
            <h3>Confirm password to make changes to account.</h3>
            <form>
                <TextField
                    error={error}
                    id='standard-password-input'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                    variant='standard'
                    helperText={errorMessage}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    sx={{
                        width: { xs: '100%', md: 300 },
                    }}
                />
                <button className='primary-btn' onClick={handleReAuth}>
                    Confirm Password
                </button>
            </form>
        </>
    )
}

export default ReAuthForm
