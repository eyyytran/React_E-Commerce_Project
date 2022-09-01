import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CartCalculations from '../components/cart/CartCalculations'
import CartItem from '../components/cart/CartItem'
import EmptyCart from '../components/cart/EmptyCart'
import CloseIcon from '@mui/icons-material/Close'
import { SetIsCartOpen } from '../redux'

function useOutsideClick(ref, callback) {
    useEffect(() => {
        function handleClick(e) {
            if (!ref.current) return
            if (ref.current.contains(e.target)) return
            callback(e)
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [ref, callback])
}

const Cart = () => {
    const cartContents = useSelector(state => state.cart.cart)
    const isCartOpen = useSelector(state => state.app.isCartOpen)
    const dispatch = useDispatch()
    const cartContentRef = useRef()

    const handleCloseClick = () => {
        if (isCartOpen) dispatch(SetIsCartOpen(false))
    }

    useOutsideClick(cartContentRef, handleCloseClick)

    return (
        <div className={isCartOpen ? 'cart is-open' : 'cart'}>
            <div ref={cartContentRef} className='cart-contents'>
                <h1>Your Bag</h1>
                <div className='cart-item-container'>
                    {cartContents?.length === 0 ? (
                        <EmptyCart />
                    ) : (
                        cartContents?.map(product => {
                            return (
                                <CartItem product={product} key={product.id} />
                            )
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
                <button className='primary-btn'>
                    <Link
                        to='/checkout'
                        onClick={() => dispatch(SetIsCartOpen(false))}
                        style={{ color: 'var(--white)' }}
                    >
                        Check Out
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Cart
