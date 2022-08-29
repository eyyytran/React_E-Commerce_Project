import { useSelector } from 'react-redux'
import CartCalculations from '../components/cart/CartCalculations'
import CartItem from '../components/cart/CartItem'

const Cart = () => {
    const cartContents = useSelector(state => state.cart.cart)
    return (
        <div className='cart'>
            <h1>Your Cart</h1>
            <div className='cart-item-container'>
                {cartContents?.length === 0
                    ? 'Your cart is empty'
                    : cartContents?.map(product => {
                          return <CartItem product={product} />
                      })}
            </div>
            <div className='cart-calculation-container'>
                <CartCalculations />
            </div>
        </div>
    )
}

export default Cart
