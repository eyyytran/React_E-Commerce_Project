import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, SetIsCartOpen } from '../../redux'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import QuickShop from './QuickShop'
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
    const handleClick = e => {
        e.stopPropagation()
        dispatch(addToCart(productToBuy))
        dispatch(SetIsCartOpen(true))
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }))

    return (
        <div className='product-card'>
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
                >
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
                        ${product?.price}
                    </div>
                </button>
            </div>
            {/* <QuickShop /> */}
        </div>
    )
}

export default ProductCard
