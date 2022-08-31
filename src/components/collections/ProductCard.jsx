import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, SetIsCartOpen } from '../../redux'
import '../../styles/productCard.css'

const ProductCard = ({ product }) => {
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()
    const productToBuy = {
        id: product?.id,
        name: product?.name,
        price: parseFloat(product?.price),
        img: product?.imageURL1,
        qtyToBuy: 1,
    }
    const handleClick = () => {
        dispatch(addToCart(productToBuy))
        dispatch(SetIsCartOpen(true))
    }
    return (
        <div className='product-card'>
            <div
                className='product-image-container'
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <img src={product?.imageURL1} alt='product' />
                <div
                    className='product-overlay'
                    style={!isHover ? { display: 'none' } : { display: 'flex' }}
                >
                    <p className='product-description'>
                        {product?.description}
                    </p>
                    <button>Quick Shop</button>
                </div>
            </div>
            <div className='product-name'>{product?.name}</div>
            <div className='product-subtitle'>{product?.subtitle}</div>
            <button disabled={product?.qty === 0 ? true : false}>
                <div className='button-text' onClick={handleClick}>
                    {product?.qty === 0 ? 'SOLD OUT' : 'ADD TO BAG'}
                </div>
                <div
                    className={
                        product?.qty === 0
                            ? 'product-price hidden'
                            : 'product-price'
                    }
                >
                    {product?.price}
                </div>
            </button>
        </div>
    )
}

export default ProductCard
