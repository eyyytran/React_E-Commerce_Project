import AdminInventory from '../components/AdminInventory'
import AddInventoryForm from '../components/forms/AddInventoryForm'

const AdminSettings = () => {
    return (
        <div className='admin'>
            <AddInventoryForm />
            <AdminInventory />
        </div>
    )
}

export default AdminSettings
