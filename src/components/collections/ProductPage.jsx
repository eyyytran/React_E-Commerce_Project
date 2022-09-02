import { Outlet } from 'react-router-dom'

const ProductPage = () => {
    return (
        <div className='product-page-container'>
            <Outlet />
        </div>
    )
}

export default ProductPage
