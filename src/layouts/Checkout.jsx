import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { PAYPAL_CLIENT_ID } from '../env'
import PayPalBtnWrapper from '../components/PayPalBtnWrapper'

const Checkout = () => {
    return (
        <div className='checkout-container'>
            <h1>Checkout</h1>
            <PayPalScriptProvider options={{ 'client-id': PAYPAL_CLIENT_ID }}>
                <PayPalBtnWrapper />
            </PayPalScriptProvider>
        </div>
    )
}

export default Checkout
