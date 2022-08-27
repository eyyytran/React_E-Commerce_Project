import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoutes = () => {
    const user = useSelector(state => state.app.user)
    return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes
