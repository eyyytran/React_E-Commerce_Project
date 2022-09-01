import { useDispatch } from 'react-redux'
import { SetIsSubmenuOpen } from '../../redux'

const MainNav = () => {
    const dispatch = useDispatch()
    return (
        <div className='main_nav_items-container'>
            <li className='main_nav_item'>
                <a
                    className='main_nav_link'
                    href='/collections/all'
                    onMouseEnter={() => dispatch(SetIsSubmenuOpen(true))}
                >
                    SHOP
                </a>
            </li>
            <li className='main_nav_item'>
                <a className='main_nav_link' href='/collections/bestsellers'>
                    BEST SELLERS
                </a>
            </li>

            <li className='main_nav_item'>
                <a className='main_nav_link' href='*'>
                    OUR STORY
                </a>
            </li>
        </div>
    )
}

export default MainNav
