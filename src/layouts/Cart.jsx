import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CartCalculations from '../components/cart/CartCalculations'
import CartItem from '../components/cart/CartItem'
import EmptyCart from '../components/cart/EmptyCart'
import CloseIcon from '@mui/icons-material/Close'
import { ToggleIsCartOpen, SetIsCartOpen } from '../redux'

const Cart = () => {
    const cartContents = useSelector(state => state.cart.cart)
    const isCartOpen = useSelector(state => state.app.isCartOpen)
    const dispatch = useDispatch()

    const handleCloseClick = () => {
        dispatch(ToggleIsCartOpen())
    }

    return (
        <div className={isCartOpen ? 'cart is-open' : 'cart'}>
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
            <button
                className='close-cart-btn-container'
                onClick={handleCloseClick}
            >
                <CloseIcon />
            </button>
            <Link
                className='checkout-btn'
                to='/checkout'
                onClick={() => dispatch(SetIsCartOpen(false))}
            >
                Check Out
            </Link>
        </div>
    )
}

export default Cart
