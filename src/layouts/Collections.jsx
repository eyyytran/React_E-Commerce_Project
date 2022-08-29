import { Outlet } from 'react-router-dom'

const Collections = () => {
    return (
        <div className='collections-container'>
            <h1>Collection</h1>
            <Outlet />
        </div>
    )
}

export default Collections
