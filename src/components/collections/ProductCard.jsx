import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, SetIsCartOpen } from '../../redux'
import { useNavigate } from 'react-router-dom'

import '../../styles/productCard.css'

const ProductCard = ({ product }) => {
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const productToBuy = {
        id: product?.id,
        name: product?.name,
        price: parseFloat(product?.price),
        img: product?.imageURL1,
        qtyToBuy: 1,
    }
    const handleClick = e => {
        e.stopPropagation()
        dispatch(addToCart(productToBuy))
        dispatch(SetIsCartOpen(true))
    }

    const handleCardClick = e => {
        e.stopPropagation()
        navigate(`/product/${product.id}`)
    }

    return (
        <div className='product-card' onClick={handleCardClick}>
            <div
                className='product-image-container'
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <img
                    src={product?.imageURL1}
                    alt='product'
                    onMouseEnter={e => (e.target.src = product?.imageURL2)}
                    onMouseLeave={e => (e.target.src = product?.imageURL1)}
                />
            </div>
            <div className='product-card-content'>
                <div>
                    <div className='product-name'>{product?.name}</div>
                    <div className='product-subtitle'>{product?.subtitle}</div>
                </div>
                <button
                    disabled={product?.qty === 0 ? true : false}
                    style={product?.qty === 0 ? { placeContent: 'center' } : {}}
                    onClick={handleClick}
                >
                    <div className='button-text'>
                        {product?.qty === 0 ? 'SOLD OUT' : 'ADD TO BAG'}
                    </div>
                    <div
                        className={
                            product?.qty === 0
                                ? 'product-price hidden'
                                : 'product-price'
                        }
                    >
                        ${product?.price}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default ProductCard
