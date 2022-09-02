import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux'
import '../../styles/cartItem.css'

const CartItem = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <div className='cart-item'>
            <div className='cart-item-header'>
                <div className='cart-item-qty'>{product?.qtyToBuy}x</div>
                <div className='cart-item-name'>{product?.name}</div>
            </div>
            <div className='cart-item-price'>${product?.price}</div>
            <img src={product?.img} alt='product' />
            <button onClick={() => dispatch(removeFromCart(product))}>
                Remove
            </button>
        </div>
    )
}

export default CartItem
