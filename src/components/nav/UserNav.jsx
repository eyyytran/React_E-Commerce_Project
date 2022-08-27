import SearchIcon from '@mui/icons-material/Search'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
const UserNav = () => {
    return (
        <div className='global_user_nav'>
            <a href='*'>
                <SearchIcon />
            </a>
            <a href='*'>
                <PermIdentityIcon />
            </a>
            <a href='*'>
                <AdminPanelSettingsOutlinedIcon />
            </a>
            <a href='*'>
                <ShoppingBagOutlinedIcon />
            </a>
        </div>
    )
}

export default UserNav
