const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-links'>
                <a href='https://github/com/eyyytran'>
                    <img
                        src={require('../assets/GitHub-Mark-32px.png')}
                        alt='github logo'
                    />
                </a>
            </div>
            <div className='footer-content'>
                <p>Made By</p>
                <a href='https://andreatran.net' className='my-name'>
                    Andrea Tran
                </a>
            </div>
            <div className='disclaimer'>
                This website was made {''} for educational purposes.
            </div>
        </div>
    )
}

export default Footer
