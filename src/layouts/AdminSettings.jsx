import { useState } from 'react'
import AdminInventory from '../components/AdminInventory'
import AddInventoryForm from '../components/forms/AddInventoryForm'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import CloseIcon from '@mui/icons-material/Close'

const AdminSettings = () => {
    const [openForm, setOpenForm] = useState(false)
    return (
        <div className='admin'>
            <div className='admin-btn-container'>
                <button
                    className='primary-btn'
                    onClick={() => setOpenForm(!openForm)}
                >
                    {!openForm ? (
                        <ControlPointIcon fontSize='large' />
                    ) : (
                        <CloseIcon fontSize='large' />
                    )}
                </button>
            </div>
            <AddInventoryForm openForm={openForm} setOpenForm={setOpenForm} />
            <AdminInventory />
        </div>
    )
}

export default AdminSettings
