import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { SetIsMobileSubOpen, SetIsMobileNavOpen } from '../../redux'
import { productTypes } from '../utils/productTypes'
import { useDispatch } from 'react-redux'

const MobileNavSub = () => {
    const dispatch = useDispatch()
    const handleLinkClick = () => {
        dispatch(SetIsMobileNavOpen(false))
        dispatch(SetIsMobileSubOpen(false))
    }
    return (
        <div className='mobile-nav-submenu'>
            <button onClick={() => dispatch(SetIsMobileSubOpen(false))}>
                <ArrowBackIosNewIcon fontSize='large' />
            </button>
            <Link
                to='collections/all'
                style={{
                    paddingBottom: '10px',
                    paddingTop: '10px',
                    borderTop: '1px solid var(--borderColor)',
                }}
                onClick={handleLinkClick}
            >
                ALL PRODUCTS
            </Link>
            {productTypes.map(type => {
                return (
                    <Link
                        to={`collections/${type.toLowerCase()}`}
                        key={type}
                        style={{
                            paddingBottom: '10px',
                            paddingTop: '10px',
                            borderTop: '1px solid var(--borderColor)',
                        }}
                        onClick={handleLinkClick}
                    >
                        {type.toUpperCase()}
                    </Link>
                )
            })}
        </div>
    )
}

export default MobileNavSub
