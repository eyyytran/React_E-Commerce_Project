import { getDocs, collection, query, where } from 'firebase/firestore'
import { updateProfile } from 'firebase/auth'
import { db } from '../../firebaseConfig'

export const fetchInventory = async () => {
    const products = []
    const docs = await getDocs(collection(db, 'products'))
    docs.forEach(doc => {
        products.push({ ...doc.data(), id: doc.id })
    })
    return products
}

export const fetchCollectionByType = async param => {
    const products = []
    const docs = query(
        collection(db, 'products'),
        where('type', '==', param.toString())
    )

    const querySnapshot = await getDocs(docs)
    querySnapshot.forEach(doc => {
        products.push({ ...doc.data(), id: doc.id })
    })
    return products
}

export const updateDisplayName = async (user, newDisplayName) => {
    updateProfile(user, {
        displayName: newDisplayName,
    })
}
