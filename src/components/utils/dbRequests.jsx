import {
    getDocs,
    collection as firestoreCollection,
    query,
    where,
    doc,
    getDoc,
} from 'firebase/firestore'
import { updateProfile, updateEmail, updatePassword } from 'firebase/auth'
import { db } from '../../firebaseConfig'

export const fetchInventory = async () => {
    const products = []
    const docs = await getDocs(firestoreCollection(db, 'products'))
    docs.forEach(doc => {
        products.push({ ...doc.data(), id: doc.id })
    })
    return products
}

export const fetchCollectionByType = async param => {
    const products = []
    const docs = query(
        firestoreCollection(db, 'products'),
        where('type', '==', param.toString())
    )

    const querySnapshot = await getDocs(docs)
    querySnapshot.forEach(doc => {
        products.push({ ...doc.data(), id: doc.id })
    })
    return products
}

export const fetchProductById = async param => {
    let product = {}
    const docRef = doc(db, 'products', param)
    const docSnap = await getDoc(docRef)
    return (product = { ...docSnap.data(), id: param })
}

export const fetchCollection = async collection => {
    const products = []
    const docs = query(
        firestoreCollection(db, 'products'),
        where('type', '==', collection)
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

export const updateUserEmail = async (user, newEmail) => {
    updateEmail(user, newEmail)
}

export const updateUserPassword = async (user, newPassword) => {
    updatePassword(user, newPassword)
}
