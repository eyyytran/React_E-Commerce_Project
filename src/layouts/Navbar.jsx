import Logo from '../components/nav/Logo'
import MainNav from '../components/nav/MainNav'
import SubMenu from '../components/nav/SubMenu'
import UserNav from '../components/nav/UserNav'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className='main_nav_container'>
            <Logo />
            <MainNav />
            <UserNav />
            <SubMenu />
        </nav>
    )
}

export default Navbar
