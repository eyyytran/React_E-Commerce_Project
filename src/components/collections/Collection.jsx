import { useParams } from 'react-router-dom'
import { useQueryClient, useQuery } from 'react-query'
import { fetchCollectionByType } from '../utils/dbRequests'

const Collection = () => {
    let params = useParams()
    const queryClient = useQueryClient()

    const { data, error, isError, isLoading } = useQuery(['products'], () =>
        fetchCollectionByType(params.collection)
    )

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            Collection
            {params.collection}
            {data?.map(product => {
                return <div>{product.name}</div>
            })}
        </div>
    )
}

export default Collection
