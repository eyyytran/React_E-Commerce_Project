import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './layouts/Cart'
import Footer from './layouts/Footer'
import Home from './layouts/Home'
import Navbar from './layouts/Navbar'
import Collections from './layouts/Collections'
import Login from './layouts/Login'
import './styles/App.css'
import Concierge from './layouts/Concierge'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='collections' element={<Collections />} />
                <Route path='login' element={<Login />} />
                <Route path='concierge' element={<Concierge />} />
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
