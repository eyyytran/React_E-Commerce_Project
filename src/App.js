import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './components/routeTypes/PrivateRoutes'
import AdminRoutes from './components/routeTypes/AdminRoutes'
import Cart from './layouts/Cart'
import Footer from './layouts/Footer'
import Home from './layouts/Home'
import Navbar from './layouts/Navbar'
import Collections from './layouts/Collections'
import Collection from './components/collections/Collection'
import Login from './layouts/Login'
import Concierge from './layouts/Concierge'
import Signup from './layouts/Signup'
import Account from './layouts/Account'
import AdminSettings from './layouts/AdminSettings'
import Checkout from './layouts/Checkout'
import './styles/App.css'
import Banner from './components/nav/Banner'
import MobileUserNav from './components/nav/MobileUserNav'

function App() {
    return (
        <BrowserRouter>
            <Banner />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='collections' element={<Collections />}>
                    <Route path=':collection' element={<Collection />} />
                </Route>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='concierge' element={<Concierge />} />
                <Route path='checkout' element={<Checkout />} />
                <Route element={<PrivateRoutes />}>
                    <Route path='account' element={<Account />} />
                </Route>
                <Route element={<AdminRoutes />}>
                    <Route path='admin' element={<AdminSettings />} />
                </Route>
                <Route
                    path='*'
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There is nothing here!</p>
                        </main>
                    }
                />
            </Routes>
            <MobileUserNav />
            <Cart />
            <Footer />
        </BrowserRouter>
    )
}

export default App
