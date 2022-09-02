import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { useSelector } from 'react-redux'
import { PAYPAL_CLIENT_ID } from '../env'
import PayPalBtnWrapper from '../components/PayPalBtnWrapper'
import CartCalculations from '../components/cart/CartCalculations'
import CartItem from '../components/cart/CartItem'
import EmptyCart from '../components/cart/EmptyCart'

const Checkout = () => {
    const cartContents = useSelector(state => state.cart.cart)
    return (
        <div className='checkout-container'>
            <div className='checkout-wrapper'>
                <h1>Checkout</h1>
                <div className='checkout-item-container'>
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
                <div className='checkout-calculation-container'>
                    <CartCalculations />
                </div>
                <PayPalScriptProvider
                    options={{ 'client-id': PAYPAL_CLIENT_ID }}
                >
                    <PayPalBtnWrapper />
                </PayPalScriptProvider>
            </div>
        </div>
    )
}

export default Checkout
