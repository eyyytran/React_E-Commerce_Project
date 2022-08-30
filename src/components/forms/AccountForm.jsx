import { useState } from 'react'
import {
    getAuth,
    updatePassword,
    updateEmail,
    updateProfile,
} from 'firebase/auth'

const AccountForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    return (
        <form action=''>
            <input
                type='text'
                name='name'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type='text'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type='text'
                name='new'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <input
                type='text'
                name='confirm'
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
            />
            <button>Update Profile</button>
        </form>
    )
}

export default AccountForm
