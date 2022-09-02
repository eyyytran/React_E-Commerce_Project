import { useDispatch, useSelector } from 'react-redux'
import { ToggleIsCartOpen } from '../../redux'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import SearchIcon from '@mui/icons-material/Search'
import '../../styles/navbar.css'

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
                <a href='/account'>
                    <PermIdentityIcon fontSize='large' />
                </a>
                <div>Account</div>
            </div>
            <div className='mobile-user-btn'>
                <a href='*' onClick={handleCartClick}>
                    <ShoppingBagOutlinedIcon fontSize='large' />
                </a>
                <div>Bag</div>
            </div>
            <div
                className={
                    isAdmin ? 'mobile-user-btn' : 'mobile-user-btn hidden'
                }
            >
                <a href='/admin'>
                    <AdminPanelSettingsOutlinedIcon fontSize='large' />
                </a>
                <div>Admin</div>
            </div>
        </div>
    )
}

export default MobileUserNav
