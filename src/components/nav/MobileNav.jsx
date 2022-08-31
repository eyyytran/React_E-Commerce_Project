import { useDispatch } from 'react-redux'
import { SetIsMobileSubOpen } from '../../redux'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const MobileNav = () => {
    const dispatch = useDispatch()
    const handleClick = e => {
        e.preventDefault(e)
        dispatch(SetIsMobileSubOpen(true))
    }
    return (
        <div className='mobile-nav'>
            <div className='mobile_nav_items-container'>
                <li className='mobile_nav_item' onClick={handleClick}>
                    <div className='main_nav_link'>SHOP</div>

                    <ChevronRightIcon fontSize='large' />
                </li>
                <li className='mobile_nav_item'>
                    <a
                        className='main_nav_link'
                        href='/collections/bestsellers'
                    >
                        BEST SELLERS
                    </a>
                </li>
                <li className='mobile_nav_item'>
                    <a className='main_nav_link' href='*'>
                        SKIN CONCIERGE
                    </a>
                </li>
                <li className='mobile_nav_item'>
                    <a className='main_nav_link' href='*'>
                        OUR STORY
                    </a>
                </li>
            </div>
        </div>
    )
}

export default MobileNav
