import { productTypes } from '../utils/productTypes'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import { useQueryClient, useMutation } from 'react-query'

const AddInventoryForm = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState(null)
    const [subtitle, setSubtitle] = useState('')
    const [description, setDescription] = useState('')
    const [actives, setActives] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [usage, setUsage] = useState('')
    const [imageURL1, setImageURL1] = useState('')
    const [imageURL2, setImageURL2] = useState('')
    const [imageURL3, setImageURL3] = useState('')
    const [qty, setQty] = useState(0)

    const queryClient = useQueryClient()

    const addProduct = async () => {
        try {
            await addDoc(collection(db, 'products'), {
                name,
                type,
                subtitle,
                description,
                actives,
                ingredients,
                usage,
                imageURL1,
                imageURL2,
                imageURL3,
                qty,
            })
            setName('')
            setType('')
            setSubtitle('')
            setDescription('')
            setActives('')
            setIngredients('')
            setUsage('')
            setImageURL1('')
            setImageURL2('')
            setImageURL3('')
            setQty(0)
        } catch (error) {
            console.error(error)
        }
    }

    const mutation = useMutation(addProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries(['products'])
        },
    })

    const handleClick = e => {
        e.preventDefault()
        mutation.mutate()
    }

    return (
        <form>
            <input
                type='text'
                placeholder='Product Name'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <select name='type' onChange={e => setType(e.target.value)}>
                <option>Select Type:</option>
                {productTypes.map(type => (
                    <option key={type} value={type.toLowerCase()}>
                        {type}
                    </option>
                ))}
            </select>
            <input
                type='text'
                placeholder='Subtitle'
                value={subtitle}
                onChange={e => {
                    setSubtitle(e.target.value)
                }}
            />
            <input
                type='text'
                placeholder='Description'
                value={description}
                onChange={e => {
                    setDescription(e.target.value)
                }}
            />
            <input
                type='text'
                placeholder='Featured Ingredients'
                value={actives}
                onChange={e => {
                    setActives(e.target.value)
                }}
            />
            <input
                type='text'
                placeholder='All Ingredients'
                value={ingredients}
                onChange={e => {
                    setIngredients(e.target.value)
                }}
            />
            <input
                type='text'
                placeholder='Directions'
                value={usage}
                onChange={e => {
                    setUsage(e.target.value)
                }}
            />

            <input
                type='text'
                name='imageUrl'
                placeholder='Primary Image'
                value={imageURL1}
                onChange={e => setImageURL1(e.target.value)}
            />
            <input
                type='text'
                name='imageUrl'
                placeholder='Secondary Image'
                value={imageURL2}
                onChange={e => setImageURL2(e.target.value)}
            />
            <input
                type='text'
                name='imageUrl'
                placeholder='Tertiary Image'
                value={imageURL3}
                onChange={e => setImageURL3(e.target.value)}
            />

            <input
                type='number'
                name='quanity'
                placeholder='QTY'
                value={qty}
                onChange={e => setQty(e.target.value)}
            />
            <button onClick={handleClick}>Add Product</button>
        </form>
    )
}

export default AddInventoryForm
