const SignupForm = () => {
    return (
        <form>
            <input type='text' name='email' />
            <input type='text' name='password' />
            <input type='text' name='confirm-password' />
            <button>Register</button>
        </form>
    )
}

export default SignupForm
