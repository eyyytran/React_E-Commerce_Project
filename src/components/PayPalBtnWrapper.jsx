import { useEffect, useState } from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { useDispatch, useSelector } from 'react-redux'
import { useQueryClient } from 'react-query'
import { db } from '../firebaseConfig'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { emptyCart } from '../redux'

const PayPalBtnWrapper = () => {
    const queryClient = useQueryClient()
    const reduxDispatch = useDispatch()
    const [showButtons, setShowButtons] = useState(false)
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer()
    const total = useSelector(state => state.cart.subtotal)
    const cart = useSelector(state => state.cart.cart)

    useEffect(() => {
        setTimeout(() => setShowButtons(true), 200)
    }, [])

    const updateQty = async () => {
        for (const product of cart) {
            const docRef = doc(db, 'products', product.id)
            const querySnapshot = await getDoc(docRef)
            const currentQty = parseInt(querySnapshot.data().qty)
            await updateDoc(docRef, {
                qty: currentQty - product.qtyToBuy,
            })
        }
    }

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
                    //invalidate cache
                    reduxDispatch(emptyCart())
                    updateQty()
                    queryClient.invalidateQueries()
                    //update inventory
                })
            }}
            onError={error => {
                console.error(error)
            }}
        />
    )
}

export default PayPalBtnWrapper
