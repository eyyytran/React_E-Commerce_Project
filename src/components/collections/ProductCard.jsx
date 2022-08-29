import '../../styles/ProductCard.css'

const ProductCard = ({ product }) => {
    return (
        <div className='product-card'>
            <img src={product?.imageURL1} alt='product' />
            <div className='product-name'>{product?.name}</div>
            <div className='product-subtitle'>{product?.subtitle}</div>
            <button>
                <div className='button-text'>Add to Bag</div>
                <div className='product-price'>{product?.price}</div>
            </button>
        </div>
    )
}

export default ProductCard
