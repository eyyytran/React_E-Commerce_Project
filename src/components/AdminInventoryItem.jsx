import { useState } from 'react'
import EditInventoryForm from './forms/EditInventoryForm'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import '../styles/InventoryItem.css'

const AdminInventoryItem = ({ product }) => {
    const [active, setActive] = useState(false)
    return (
        <div className='admin_inventory-item_container'>
            <div className='admin_inventory-item'>
                <img src={product?.imageURL1} alt='product' />
                <div className='inventory-item-name'>{product?.name}</div>
                <div className='inventory-item-price'>{product?.price}</div>
                <div className='inventory-item-qty'>{product?.qty}</div>
                <button onClick={() => setActive(!active)}>
                    <ExpandMoreIcon />
                </button>
            </div>
            <div
                className={
                    active === true
                        ? 'admin_edit-module '
                        : 'admin_edit-module hidden'
                }
            >
                <EditInventoryForm product={product} key={product?.id} />
            </div>
        </div>
    )
}

export default AdminInventoryItem
