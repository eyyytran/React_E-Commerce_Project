const MainNav = () => {
    return (
        <div className='main_nav_items-container'>
            <li className='main_nav_item'>
                <a className='main_nav_link' href='/collections/all'>
                    SHOP ALL
                </a>
            </li>
            <li className='main_nav_item'>
                <a className='main_nav_link' href='/collections/bestsellers'>
                    BEST SELLERS
                </a>
            </li>
            <li className='main_nav_item'>
                <a className='main_nav_link' href='*'>
                    SKIN CONCIERGE
                </a>
            </li>
            <li className='main_nav_item'>
                <a className='main_nav_link' href='*'>
                    OUR STORY
                </a>
            </li>
        </div>
    )
}

export default MainNav
