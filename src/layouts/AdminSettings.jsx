import { useState } from 'react'
import AdminInventory from '../components/AdminInventory'
import AddInventoryForm from '../components/forms/AddInventoryForm'

const AdminSettings = () => {
    const [openForm, setOpenForm] = useState(false)
    return (
        <div className='admin'>
            <div className='admin-btn-container'>
                <button
                    className='primary-btn'
                    onClick={() => setOpenForm(!openForm)}
                >
                    {!openForm ? 'Add Product' : 'Cancel'}
                </button>
            </div>
            <AddInventoryForm openForm={openForm} setOpenForm={setOpenForm} />
            <AdminInventory />
        </div>
    )
}

export default AdminSettings
