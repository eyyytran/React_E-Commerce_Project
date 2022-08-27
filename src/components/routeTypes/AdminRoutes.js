import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminRoutes = () => {
    const { isAdmin, user } = useSelector(state => state.app)
    return user && isAdmin ? <Outlet /> : <Navigate to='/' />
}

export default AdminRoutes
