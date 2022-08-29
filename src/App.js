import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './components/routeTypes/PrivateRoutes'
import AdminRoutes from './components/routeTypes/AdminRoutes'
import Cart from './layouts/Cart'
import Footer from './layouts/Footer'
import Home from './layouts/Home'
import Navbar from './layouts/Navbar'
import Collections from './layouts/Collections'
import Login from './layouts/Login'
import Concierge from './layouts/Concierge'
import Signup from './layouts/Signup'
import Account from './layouts/Account'
import AdminSettings from './layouts/AdminSettings'
import './styles/App.css'
import Collection from './components/collections/Collection'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='collections' element={<Collections />}>
                    <Route path=':collection' element={<Collection />} />
                </Route>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='concierge' element={<Concierge />} />
                <Route path='cart' element={<Cart />} />
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
            <Cart />
            <Footer />
        </BrowserRouter>
    )
}

export default App
