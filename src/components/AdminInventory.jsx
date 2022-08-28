import { collection, getDocs } from 'firebase/firestore'
import { useQueryClient, useQuery } from 'react-query'
import { db } from '../firebaseConfig'

const AdminInventory = () => {
    const fetchInventory = async () => {
        const products = []
        const docs = await getDocs(collection(db, 'products'))
        docs.forEach(doc => {
            products.push(doc.data())
        })
        return products
    }

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
                return <div>{product.name}</div>
            })}
        </div>
    )
}

export default AdminInventory
