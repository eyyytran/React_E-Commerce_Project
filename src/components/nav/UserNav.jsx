import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToggleIsCartOpen } from '../../redux'
import SearchIcon from '@mui/icons-material/Search'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

const UserNav = () => {
    const dispatch = useDispatch()
    const isAdmin = useSelector(state => state.app.isAdmin)

    const handleCartClick = e => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(ToggleIsCartOpen())
    }

    return (
        <div className='global_user_nav'>
            <Link to='/account'>
                <PermIdentityIcon />
            </Link>
            <Link to='/admin' className={!isAdmin ? 'hidden' : 'unhidden'}>
                <AdminPanelSettingsOutlinedIcon />
            </Link>
            <button onClick={handleCartClick}>
                <ShoppingBagOutlinedIcon />
            </button>
        </div>
    )
}

export default UserNav
