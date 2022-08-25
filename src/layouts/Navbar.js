import Logo from '../components/navBarComponents/Logo'
import MainNav from '../components/navBarComponents/MainNav'
import UserNav from '../components/navBarComponents/UserNav'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className='main_nav_container'>
            <Logo />
            <MainNav />
            <UserNav />
        </nav>
    )
}

export default Navbar
