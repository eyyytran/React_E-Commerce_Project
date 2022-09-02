import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Skeleton from '@mui/material/Skeleton'
import { fetchCollectionByType, fetchInventory } from '../utils/dbRequests'

import ProductCard from './ProductCard'

const Collection = () => {
    let { collection } = useParams()

    const { data, error, isError, isLoading } = useQuery(
        [`collection-${collection}`],
        collection === 'all'
            ? fetchInventory
            : () => fetchCollectionByType(collection)
    )

    if (isError) return <div>Error: {error.message}</div>
    return (
        <div className='collection-container'>
            <div className='collection-header'>
                <h1>{collection.toUpperCase()}</h1>
            </div>
            <div className='collection'>
                {isLoading
                    ? [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                          <Skeleton variant='rectangular' />
                      ))
                    : data?.map(product => {
                          return (
                              <ProductCard product={product} key={product.id} />
                          )
                      })}
            </div>
        </div>
    )
}

export default Collection
