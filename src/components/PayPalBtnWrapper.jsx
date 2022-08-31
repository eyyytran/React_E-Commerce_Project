import { useEffect, useState } from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { useSelector } from 'react-redux'

const PayPalBtnWrapper = () => {
    const [showButtons, setShowButtons] = useState(false)
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer()
    const total = useSelector(state => state.cart.subtotal)

    useEffect(() => {
        setTimeout(() => setShowButtons(true), 100)
    }, [])

    if (!showButtons || isPending) return <div>Loading...</div>
    return (
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order
                    .create({
                        purchase_units: [
                            {
                                description: 'skincare',
                                amount: {
                                    value: total,
                                },
                            },
                        ],
                    })
                    .then(orderId => {
                        console.log({ orderId })
                        return orderId
                    })
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then(details => {
                    console.log('on approve', details)
                })
            }}
            onError={error => {
                console.error(error)
            }}
        />
    )
}

export default PayPalBtnWrapper
