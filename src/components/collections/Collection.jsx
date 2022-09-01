import { useParams } from 'react-router-dom'
import { useQueryClient, useQuery } from 'react-query'
import { fetchCollectionByType, fetchInventory } from '../utils/dbRequests'

import ProductCard from './ProductCard'

const Collection = () => {
    let params = useParams()
    const queryClient = useQueryClient()
    let dbRequest = ''

    if (params.collection === 'all') {
        dbRequest = fetchInventory()
    } else {
        dbRequest = fetchCollectionByType(params.collection)
    }

    const { data, error, isError, isLoading } = useQuery(
        [`collection-${params.collection}`],
        () => dbRequest
    )

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className='collection-container'>
            <div className='collection-header'>
                <h1>{params.collection.toUpperCase()}</h1>
            </div>
            <div className='collection'>
                {data?.map(product => {
                    return <ProductCard product={product} key={product.id} />
                })}
            </div>
        </div>
    )
}

export default Collection
