const ErrorPage = () => {
    return (
        <div className='error-page'>
            <h1>Page Not Found!</h1>
            <p>Try clicking one of the links from the navbar</p>
            <img
                src={require('../assets/empty_bottle.jpeg')}
                alt='empty bottle on a shelf'
            />
        </div>
    )
}

export default ErrorPage
