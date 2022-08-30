import { useDispatch } from 'react-redux'
import { addToCart, SetIsCartOpen } from '../../redux'
import '../../styles/ProductCard.css'

const ProductCard = ({ product }) => {
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
            <img src={product?.imageURL1} alt='product' />
            <div className='product-name'>{product?.name}</div>
            <div className='product-subtitle'>{product?.subtitle}</div>
            <button>
                <div className='button-text' onClick={handleClick}>
                    Add to Bag
                </div>
                <div className='product-price'>{product?.price}</div>
            </button>
        </div>
    )
}

export default ProductCard