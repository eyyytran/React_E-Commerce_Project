import { useSelector, useDispatch } from 'react-redux'
import Logo from '../components/nav/Logo'
import MainNav from '../components/nav/MainNav'
import MobileNav from '../components/nav/MobileNav'
import SubMenu from '../components/nav/SubMenu'
import UserNav from '../components/nav/UserNav'
import {
    SetIsMobileNavOpen,
    SetIsSubmenuOpen,
    SetIsMobileSubOpen,
} from '../redux'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Box } from '@mui/material'
import '../styles/navbar.css'
import MobileNavSub from '../components/nav/MobileNavSub'

const Navbar = () => {
    const dispatch = useDispatch()
    const isSubmenuOpen = useSelector(state => state.app.isSubmenuOpen)
    const isMobileNavOpen = useSelector(state => state.app.isMobileNavOpen)
    const isMobileSubOpen = useSelector(state => state.app.isMobileSubOpen)

    return (
        <div className='nav_container'>
            <nav className='main_nav_container'>
                <div className='mobile-hamburger-btn'>
                    <Box display={!isMobileNavOpen ? 'block' : 'none'}>
                        <MenuIcon
                            fontSize='large'
                            onClick={() => dispatch(SetIsMobileNavOpen(true))}
                        />
                    </Box>
                    <Box display={!isMobileNavOpen ? 'none' : 'block'}>
                        <CloseIcon
                            fontSize='large'
                            onClick={() => dispatch(SetIsMobileNavOpen(false))}
                        />
                    </Box>
                </div>
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
                onMouseLeave={() => dispatch(SetIsSubmenuOpen(false))}
            >
                <SubMenu />
            </nav>
            <nav
                className={
                    !isMobileNavOpen
                        ? 'mobile-nav-container'
                        : 'mobile-nav-container is-open'
                }
            >
                <MobileNav />
            </nav>
            <nav
                className={
                    !isMobileSubOpen
                        ? 'mobile-navsub_container'
                        : 'mobile-navsub_container is-open'
                }
            >
                <MobileNavSub />
            </nav>
        </div>
    )
}

export default Navbar
