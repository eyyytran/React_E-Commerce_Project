import { useParams } from 'react-router-dom'
import { useQueryClient, useQuery } from 'react-query'
import { fetchCollectionByType, fetchInventory } from '../utils/dbRequests'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
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
            <h1>{params.collection.toUpperCase()}</h1>
            <div className='collection'>
                <Grid container spacing={1}>
                    {data?.map(product => {
                        return (
                            <Grid item xs={6}>
                                <ProductCard
                                    product={product}
                                    key={product.id}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </div>
    )
}

export default Collection
