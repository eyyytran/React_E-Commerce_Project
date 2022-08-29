import { useSelector } from 'react-redux'

const CartCalculations = () => {
    const cartContents = useSelector(state => state.cart.cart)
    const subtotal = cartContents.reduce(
        (total, product) => total + parseInt(product.price),
        0
    )
    console.log(subtotal)

    return (
        <div className='cart-calculations'>
            <div className='subtotal-container'>
                <div className='subtotal-header'>Subtotal</div>
                <div className='subtotal'>{subtotal}</div>
            </div>
            <div className='tax-container'>
                <div className='tax-header'>
                    <p className='tax-mainheader'>Tax</p>
                    <p className='tax-subheader'>calculated at checkout</p>
                </div>
                <div className='tax'>--</div>
            </div>
            <div className='shipping-container'>
                <div className='shipping-header'>
                    <p className='shipping-mainheader'>Shipping</p>
                    <p className='shipping-subheader'>
                        free standard shipping over $30
                    </p>
                </div>
                <div className='shipping'>
                    {subtotal >= 30 ? 'Free' : '$' + 7.98}
                </div>
            </div>
        </div>
    )
}

export default CartCalculations
