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
                        Our handpicked our favorite sunscreens that provide the
                        best protection while leaving your skin glowy and
                        smooth.
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
            </div>
        </div>
    )
}

export default Home
