import { productTypes } from '../utils/productTypes'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import { useQueryClient, useMutation } from 'react-query'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const AddInventoryForm = ({ openForm, setOpenForm }) => {
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
    const [price, setPrice] = useState(0)
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
                price,
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
            setPrice(0)
            setQty(0)
        } catch (error) {
            console.error(error)
        }
    }

    const mutation = useMutation(addProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries(['products'])
            setOpenForm(false)
        },
    })

    const handleClick = e => {
        e.preventDefault()
        mutation.mutate()
    }

    return (
        <form className={!openForm ? 'hidden' : 'unhidden'}>
            <TextField
                fullWidth
                margin='normal'
                id='standard-basic'
                label='Product Name'
                variant='standard'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <FormControl fullWidth margin='normal'>
                <InputLabel id='admin-inventory-select'>
                    Choose Product Type:
                </InputLabel>
                <Select
                    labelId='admin-inventory-select-label'
                    id='admin-inventory-select'
                    value={type}
                    label='type'
                    onChange={e => setType(e.target.value)}
                >
                    {productTypes.map(type => (
                        <MenuItem key={type} value={type.toLowerCase()}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                fullWidth
                margin='normal'
                id='standard-basic'
                label='Subtitle'
                variant='standard'
                value={subtitle}
                onChange={e => {
                    setSubtitle(e.target.value)
                }}
            />
            <TextField
                fullWidth
                margin='normal'
                id='standard-basic'
                label='Description'
                variant='standard'
                value={description}
                onChange={e => {
                    setDescription(e.target.value)
                }}
            />
            <TextField
                fullWidth
                margin='normal'
                id='standard-basic'
                label='Featured Ingredients'
                variant='standard'
                value={actives}
                onChange={e => {
                    setActives(e.target.value)
                }}
            />
            <TextField
                fullWidth
                margin='normal'
                id='standard-basic'
                variant='standard'
                label='All Ingredients'
                value={ingredients}
                onChange={e => {
                    setIngredients(e.target.value)
                }}
            />
            <TextField
                fullWidth
                margin='normal'
                id='standard-basic'
                variant='standard'
                label='Directions'
                value={usage}
                onChange={e => {
                    setUsage(e.target.value)
                }}
            />

            <TextField
                fullWidth
                margin='normal'
                id='standard-basic'
                variant='standard'
                label='Primary Image'
                value={imageURL1}
                onChange={e => setImageURL1(e.target.value)}
            />
            <TextField
                fullWidth
                margin='normal'
                id='standard-basic'
                variant='standard'
                label='Secondary Image'
                value={imageURL2}
                onChange={e => setImageURL2(e.target.value)}
            />
            <TextField
                fullWidth
                margin='normal'
                id='standard-basic'
                variant='standard'
                label='Tertiary Image'
                value={imageURL3}
                onChange={e => setImageURL3(e.target.value)}
            />
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor='outlined-adornment-amount'>
                    Amount
                </InputLabel>
                <OutlinedInput
                    id='outlined-adornment-amount'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    startAdornment={
                        <InputAdornment position='start'>$</InputAdornment>
                    }
                    label='Amount'
                />
            </FormControl>
            <TextField
                fullWidth
                margin='normal'
                id='standard-number'
                label='Quantity in Stock'
                type='number'
                value={qty}
                onChange={e => setQty(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
                variant='standard'
            />
            <button onClick={handleClick}>Add Product</button>
        </form>
    )
}

export default AddInventoryForm
