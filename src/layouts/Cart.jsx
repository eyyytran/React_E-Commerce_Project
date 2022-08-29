import { useSelector } from 'react-redux'
import CartCalculations from '../components/cart/CartCalculations'
import CartItem from '../components/cart/CartItem'
import EmptyCart from '../components/cart/EmptyCart'

const Cart = () => {
    const cartContents = useSelector(state => state.cart.cart)
    return (
        <div className='cart'>
            <h1>Your Bag</h1>
            <div className='cart-item-container'>
                {cartContents?.length === 0 ? (
                    <EmptyCart />
                ) : (
                    cartContents?.map(product => {
                        return <CartItem product={product} key={product.id} />
                    })
                )}
            </div>
            <div className='cart-calculation-container'>
                <CartCalculations />
            </div>
        </div>
    )
}

export default Cart
