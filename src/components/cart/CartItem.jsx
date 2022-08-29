import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux'
import '../../styles/CartItem.css'

// const product = {
//     id: product?.id,
//     name: product?.name,
//     img: product?.imageURL1,
//     qtyToBuy: 1,
// }

const CartItem = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <div className='cart-item'>
            <div className='cart-item-header'>
                <div className='cart-item-qty'>{product?.qtyToBuy}x</div>
                <div className='cart-item-name'>{product?.name}</div>
            </div>
            <img src={product?.img} alt='product' />
            <button onClick={() => dispatch(removeFromCart(product))}>
                Remove
            </button>
        </div>
    )
}

export default CartItem
