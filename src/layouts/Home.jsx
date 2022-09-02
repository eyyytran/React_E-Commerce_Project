import { useRef } from 'react'
import { useQueryClient, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/collections/ProductCard'
import { fetchCollection } from '../components/utils/dbRequests'

const Home = () => {
    const queryClient = useQueryClient()
    const { data } = useQuery([`collection-suncare`], () =>
        fetchCollection('suncare')
    )
    const navigate = useNavigate()
    return (
        <div className='homepage'>
            <div className='hero-container'>
                <img
                    src={require('../assets/twofriends.jpeg')}
                    alt='makeup flatlay'
                />
            </div>
            <div className='featured-container'>
                <div className='featured-banner'>
                    <h1>Protect the Skin You're In</h1>
                    <p>
                        Our handpicked sunscreens provide the best protection
                        while leaving your skin glowy and smooth.
                    </p>
                    <button
                        className='primary-btn'
                        onClick={() => navigate('/collections/suncare')}
                    >
                        Shop All Suncare
                    </button>
                </div>
                <div className='featured-products'>
                    {data?.map(product => {
                        return (
                            <ProductCard product={product} key={product.id} />
                        )
                    })}
                </div>
                <div className='featured-story'>
                    <img
                        src={require('../assets/pink_bottles.jpeg')}
                        alt='pink items flatlay'
                    />
                    <div className='story-content'>
                        <h1>Our Promise to You</h1>
                        <p>
                            We select products with your needs in mind. No fake
                            reviews here. Only skincare nerds.{' '}
                        </p>
                    </div>
                </div>
                <div className='featured-story'>
                    <div className='story-content'>
                        <h1>Beautiful Skin for All</h1>
                        <p>
                            SM Beauty is dedicated to making quality skincare
                            affordable and accesible to everyone.
                        </p>
                    </div>
                    <img
                        src={require('../assets/group-of-women.jpeg')}
                        alt='pink items flatlay'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
