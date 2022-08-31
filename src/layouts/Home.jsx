import { useQueryClient, useQuery } from 'react-query'
import ProductCard from '../components/collections/ProductCard'
import { fetchCollection } from '../components/utils/dbRequests'

const Home = () => {
    const queryClient = useQueryClient()
    const { data } = useQuery([`collection-suncare`], () =>
        fetchCollection('suncare')
    )

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
                <p>Shop our collection of hand-picked sunscreens</p>
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
