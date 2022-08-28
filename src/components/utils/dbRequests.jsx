import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

export const fetchInventory = async () => {
    const products = []
    const docs = await getDocs(collection(db, 'products'))
    docs.forEach(doc => {
        products.push(doc.data())
    })
    return products
}
