import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './components/routeTypes/PrivateRoutes'
import AdminRoutes from './components/routeTypes/AdminRoutes'
import Cart from './layouts/Cart'

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
import Promo from './components/nav/Promo'
import MobileUserNav from './components/nav/MobileUserNav'
import BestSellers from './components/collections/BestSellers'
import ErrorPage from './layouts/ErrorPage'
import Footer from './layouts/Footer'
import ProductPage from './components/collections/ProductPage'
import ProductDetails from './components/collections/ProductDetails'
import About from './layouts/About'

function App() {
    return (
        <BrowserRouter>
            <Promo />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='collections' element={<Collections />}>
                    <Route path='bestsellers' element={<BestSellers />} />
                    <Route path=':collection' element={<Collection />} />
                </Route>
                <Route path='product' element={<ProductPage />}>
                    <Route path=':productId' element={<ProductDetails />} />
                </Route>

                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='about' element={<About />} />
                <Route path='checkout' element={<Checkout />} />
                <Route element={<PrivateRoutes />}>
                    <Route path='account' element={<Account />} />
                </Route>
                <Route element={<AdminRoutes />}>
                    <Route path='admin' element={<AdminSettings />} />
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <MobileUserNav />
            <Cart />
            <Footer />
        </BrowserRouter>
    )
}

export default App
