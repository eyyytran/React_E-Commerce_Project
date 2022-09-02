import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteUser, getAuth } from 'firebase/auth'

const DeleteAccountForm = ({ isAuth }) => {
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
        <>
            <button
                id='delete-account-btn'
                className='danger-btn'
                onClick={handleDelete}
                disabled={!isAuth}
            >
                Delete Account
            </button>
            <small>{error}</small>
        </>
    )
}

export default DeleteAccountForm
