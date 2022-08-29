import { useSelector } from 'react-redux'
import CartItem from '../components/cart/CartItem'

const Cart = () => {
    const cartContents = useSelector(state => state.cart.cart)
    console.log(cartContents)
    return (
        <div className='cart'>
            <h1>Your Cart</h1>
            {cartContents?.length === 0
                ? 'Your cart is empty'
                : cartContents?.map(product => {
                      return <CartItem product={product} />
                  })}
        </div>
    )
}

export default Cart
