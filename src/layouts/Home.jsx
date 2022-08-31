import { useRef } from 'react'
import { useQueryClient, useQuery } from 'react-query'
import ProductCard from '../components/collections/ProductCard'
import { fetchCollection } from '../components/utils/dbRequests'

const Home = () => {
    const queryClient = useQueryClient()
    const { data } = useQuery([`collection-suncare`], () =>
        fetchCollection('suncare')
    )
    const scrollElement = useRef(null)
    const slide = shift => {
        scrollElement.current.scrollLeft += shift
    }
    return (
        <div className='homepage'>
            <div className='hero-container'>
                <img
                    src={require('../assets/twofriends.jpeg')}
                    alt='makeup flatlay'
                />
            </div>
            <div className='featured-container'>
                <h1>Protect the Skin You're In</h1>
                <p>
                    Our handpicked our favorite sunscreens that provide the best
                    protection while leaving your skin glowy and smooth.
                </p>
                <button className='primary-btn'>Shop All Suncare</button>
                <div className='featured-products' ref={scrollElement}>
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
