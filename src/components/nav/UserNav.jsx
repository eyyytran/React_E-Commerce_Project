import SearchIcon from '@mui/icons-material/Search'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { auth } from '../../firebaseConfig'

const UserNav = () => {
    function handleLogout() {
        auth.signOut()
    }

    return (
        <div className='global_user_nav'>
            <a href='*'>
                <SearchIcon />
            </a>
            <a href='/account'>
                <PermIdentityIcon />
            </a>
            <a href='*'>
                <AdminPanelSettingsOutlinedIcon />
            </a>
            <a href='*'>
                <ShoppingBagOutlinedIcon />
            </a>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default UserNav
