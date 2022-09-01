import { Link } from 'react-router-dom'
import LoginForm from '../components/forms/LoginForm'

const Login = () => {
    return (
        <div className='login'>
            <h2>Log in</h2>
            <LoginForm />
            <Link to={'/signup'} style={{ textAlign: 'center' }}>
                <p>New to SM Beauty? Create an account.</p>
            </Link>
        </div>
    )
}

export default Login
