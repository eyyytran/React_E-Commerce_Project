import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToggleIsCartOpen } from '../../redux'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import SearchIcon from '@mui/icons-material/Search'
import '../../styles/Navbar.css'

const MobileUserNav = () => {
    const dispatch = useDispatch()
    const isAdmin = useSelector(state => state.app.isAdmin)

    const handleCartClick = e => {
        e.stopPropagation()
        e.preventDefault()
        dispatch(ToggleIsCartOpen())
    }

    return (
        <div className='mobile-user-nav'>
            <div className='mobile-user-btn'>
                <Link to='/account'>
                    <PermIdentityIcon fontSize='large' />
                </Link>
                <div>Account</div>
            </div>
            <div className='mobile-user-btn'>
                <button onClick={handleCartClick}>
                    <ShoppingBagOutlinedIcon fontSize='large' />
                </button>
                <div>Bag</div>
            </div>
            <div
                className={
                    isAdmin ? 'mobile-user-btn' : 'mobile-user-btn hidden'
                }
            >
                <Link to='/admin'>
                    <AdminPanelSettingsOutlinedIcon fontSize='large' />
                </Link>
                <div>Admin</div>
            </div>
        </div>
    )
}

export default MobileUserNav
