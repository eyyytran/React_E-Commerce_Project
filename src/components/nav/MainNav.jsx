import { useDispatch } from 'react-redux'
import { ToggleIsSubmenuOpen } from '../../redux'

const MainNav = () => {
    const dispatch = useDispatch()
    // const handleShopClick = e => {
    //     e.preventDefault()
    //     dispatch(ToggleIsSubmenuOpen())
    // }
    return (
        <div className='main_nav_items-container'>
            <li className='main_nav_item'>
                <a
                    className='main_nav_link'
                    href='*'
                    onMouseEnter={() => dispatch(ToggleIsSubmenuOpen())}
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
                    SKIN CONCIERGE
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
