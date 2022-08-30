import { Link } from 'react-router-dom'
import { productTypes } from '../utils/productTypes'

const SubMenu = () => {
    return (
        <div className='submenu'>
            <Link to='collections/all'>ALL PRODUCTS</Link>
            {productTypes.map(type => {
                return (
                    <Link to={`collections/${type.toLowerCase()}`}>
                        {type.toUpperCase()}
                    </Link>
                )
            })}
        </div>
    )
}

export default SubMenu
