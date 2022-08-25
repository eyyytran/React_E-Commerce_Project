import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './layouts/Footer'
import Home from './layouts/Home'
import Navbar from './layouts/Navbar'
import './styles/App.css'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='*'
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There is nothing here!</p>
                        </main>
                    }
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
