import { bestsellersList } from '../utils/productTypes'

import ProductCard from './ProductCard'

const BestSellers = () => {
    const data = bestsellersList

    return (
        <div className='collection-container'>
            <div className='collection-header'>
                <h1>Best Sellers</h1>
            </div>
            <div className='collection'>
                {data?.map(product => {
                    return <ProductCard product={product} key={product.id} />
                })}
            </div>
        </div>
    )
}

export default BestSellers
