import '../styles/InventoryItem.css'
import EditInventoryForm from './forms/EditInventoryForm'

const AdminInventoryItem = ({ product }) => {
    return (
        <div className='admin_inventory-item_container'>
            <div className='admin_inventory-item'>
                <img src={product?.imageURL1} alt='product' />
                <div className='inventory-item-name'>{product?.name}</div>
                <div className='inventory-item-price'>{product?.price}</div>
                <div className='inventory-item-qty'>{product?.qty}</div>
            </div>
            <div className='admin_edit-module'>
                <EditInventoryForm product={product} key={product?.id} />
            </div>
        </div>
    )
}

export default AdminInventoryItem
