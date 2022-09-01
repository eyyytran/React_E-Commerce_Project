import { useDispatch } from 'react-redux'
import { ToggleIsCartOpen } from '../../redux'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import '../../styles/navbar.css'

const MobileUserNav = () => {
    const dispatch = useDispatch()

    const handleCartClick = e => {
        e.preventDefault()
        dispatch(ToggleIsCartOpen())
    }
    return (
        <div className='mobile-user-nav'>
            {/* <a href='*'>
                <SearchIcon />
            </a> */}
            <a href='/account'>
                <PermIdentityIcon fontSize='large' />
            </a>
            <a href='*' onClick={handleCartClick}>
                <ShoppingBagOutlinedIcon fontSize='large' />
            </a>
            <a href='/admin'>
                <AdminPanelSettingsOutlinedIcon fontSize='large' />
            </a>
        </div>
    )
}

export default MobileUserNav
