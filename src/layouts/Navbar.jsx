import { useSelector, useDispatch } from 'react-redux'
import Logo from '../components/nav/Logo'
import MainNav from '../components/nav/MainNav'
import SubMenu from '../components/nav/SubMenu'
import UserNav from '../components/nav/UserNav'
import { ToggleIsSubmenuOpen } from '../redux'
import '../styles/Navbar.css'

const Navbar = () => {
    const dispatch = useDispatch()
    const isSubmenuOpen = useSelector(state => state.app.isSubmenuOpen)
    return (
        <div className='nav_container'>
            <nav className='main_nav_container'>
                <Logo />
                <MainNav />
                <UserNav />
            </nav>
            <nav
                className={
                    !isSubmenuOpen
                        ? 'submenu_container'
                        : 'submenu_container is-open'
                }
                onMouseLeave={() => dispatch(ToggleIsSubmenuOpen())}
            >
                <SubMenu />
            </nav>
        </div>
    )
}

export default Navbar
