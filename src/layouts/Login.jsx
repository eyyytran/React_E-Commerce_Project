import { Link } from 'react-router-dom'
import LoginForm from '../components/forms/LoginForm'

const Login = () => {
    return (
        <div className='login'>
            <h1>Log in</h1>
            <LoginForm />
            <Link to={'/signup'}>Create an account</Link>
        </div>
    )
}

export default Login
