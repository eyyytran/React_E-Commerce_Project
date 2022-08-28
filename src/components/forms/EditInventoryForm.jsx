import { productTypes } from '../utils/productTypes'
import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const EditInventoryForm = ({ product, key }) => {
    const [name, setName] = useState(product?.name || '')
    const [type, setType] = useState(product?.type || null)
    const [subtitle, setSubtitle] = useState(product?.subtitle || '')
    const [description, setDescription] = useState(product?.description || '')
    const [actives, setActives] = useState(product?.actives || '')
    const [ingredients, setIngredients] = useState(product?.ingredients || '')
    const [usage, setUsage] = useState(product?.usage || '')
    const [imageURL1, setImageURL1] = useState(product?.imageURL1 || '')
    const [imageURL2, setImageURL2] = useState(product?.imageURL2 || '')
    const [imageURL3, setImageURL3] = useState(product?.imageURL3 || '')
    const [qty, setQty] = useState(product?.qty || 0)

    const handleClick = async e => {
        try {
            e.preventDefault()

            await setDoc(doc(db, 'products'), {
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
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <form className='edit-inventory-form'>
            <input
                type='text'
                placeholder={product?.name}
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
                placeholder={product?.subtitle}
                value={subtitle}
                onChange={e => {
                    setSubtitle(e.target.value)
                }}
            />
            <input
                type='text'
                placeholder={product?.description}
                value={description}
                onChange={e => {
                    setDescription(e.target.value)
                }}
            />
            <input
                type='text'
                placeholder={product?.actives}
                value={actives}
                onChange={e => {
                    setActives(e.target.value)
                }}
            />
            <input
                type='text'
                placeholder={product?.ingredients}
                value={ingredients}
                onChange={e => {
                    setIngredients(e.target.value)
                }}
            />
            <input
                type='text'
                placeholder={product?.usage}
                value={usage}
                onChange={e => {
                    setUsage(e.target.value)
                }}
            />

            <input
                type='text'
                name='imageUrl'
                placeholder={product?.imageURL1}
                value={imageURL1}
                onChange={e => setImageURL1(e.target.value)}
            />
            <input
                type='text'
                name='imageUrl'
                placeholder={product?.imageURL2}
                value={imageURL2}
                onChange={e => setImageURL2(e.target.value)}
            />
            <input
                type='text'
                name='imageUrl'
                placeholder={product?.imageURL3}
                value={imageURL3}
                onChange={e => setImageURL3(e.target.value)}
            />

            <input
                type='number'
                name='quanity'
                placeholder={product?.qty}
                value={qty}
                onChange={e => setQty(e.target.value)}
            />
            <button onClick={handleClick}>Edit</button>
        </form>
    )
}

export default EditInventoryForm
