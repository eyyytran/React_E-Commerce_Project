import { useState } from 'react'
import AdminInventory from '../components/AdminInventory'
import AddInventoryForm from '../components/forms/AddInventoryForm'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

const AdminSettings = () => {
    const [openForm, setOpenForm] = useState(false)
    return (
        <div className='admin'>
            <button className='primary-btn' onClick={() => setOpenForm(true)}>
                <ControlPointIcon fontSize='large' />
            </button>
            <AddInventoryForm openForm={openForm} setOpenForm={setOpenForm} />
            <AdminInventory />
        </div>
    )
}

export default AdminSettings
