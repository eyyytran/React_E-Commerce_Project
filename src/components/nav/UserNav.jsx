import { useDispatch } from 'react-redux'
import { ToggleIsCartOpen } from '../../redux'
import { auth } from '../../firebaseConfig'
import SearchIcon from '@mui/icons-material/Search'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

const UserNav = () => {
    const dispatch = useDispatch()

    function handleLogout() {
        auth.signOut()
    }

    function handleCartClick(e) {
        e.preventDefault()
        dispatch(ToggleIsCartOpen())
    }

    return (
        <div className='global_user_nav'>
            <a href='*'>
                <SearchIcon />
            </a>
            <a href='/account'>
                <PermIdentityIcon />
            </a>
            <a href='/admin'>
                <AdminPanelSettingsOutlinedIcon />
            </a>
            <a href='*' onClick={handleCartClick}>
                <ShoppingBagOutlinedIcon />
            </a>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default UserNav
