import { useQueryClient, useQuery } from 'react-query'
import { fetchInventory } from './utils/dbRequests'
import AdminInventoryItem from './AdminInventoryItem'

const AdminInventory = () => {
    const queryClient = useQueryClient()

    const { data, error, isError, isLoading } = useQuery(['products'], () =>
        fetchInventory()
    )

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className='admin_inventory-container'>
            {data?.map(product => {
                return <AdminInventoryItem product={product} key={product.id} />
            })}
        </div>
    )
}

export default AdminInventory
