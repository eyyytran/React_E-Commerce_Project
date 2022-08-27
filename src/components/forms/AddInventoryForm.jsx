import { productTypes, productDescription } from '../utils'
import { useState } from 'react'
const AddInventoryForm = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState(null)
    const [subtitle, setSubtitle] = useState('')
    const [description, setDescription] = useState('')
    const [actives, setActives] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [usage, setUsage] = useState('')
    const [qty, setQty] = useState(0)
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
                type='number'
                name='quanity'
                placeholder='QTY'
                value={qty}
                onChange={e => setQty(e.target.value)}
            />
        </form>
    )
}

export default AddInventoryForm
