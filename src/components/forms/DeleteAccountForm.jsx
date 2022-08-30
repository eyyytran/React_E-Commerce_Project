import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteUser, getAuth } from 'firebase/auth'

const DeleteAccountForm = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const auth = getAuth()

    const handleDelete = async e => {
        e.preventDefault()
        try {
            await deleteUser(auth.currentUser)
            navigate('/')
        } catch (error) {
            setError('unable to delete user')
        }
    }
    return (
        <div className='delete-btn-container'>
            <button onClick={handleDelete}>Delete Account</button>
            <small>{error}</small>
        </div>
    )
}

export default DeleteAccountForm
