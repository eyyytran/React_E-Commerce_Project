import { productTypes } from '../utils/productTypes'
import { useState } from 'react'
import { deleteDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import { useQueryClient, useMutation } from 'react-query'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const EditInventoryForm = ({ product }) => {
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
    const [price, setPrice] = useState(product?.price || 0)
    const [qty, setQty] = useState(product?.qty || 0)

    const queryClient = useQueryClient()

    const editProduct = async () => {
        try {
            await setDoc(doc(db, 'products', product?.id), {
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
        } catch (error) {
            console.error(error)
        }
    }

    const deleteProduct = async () => {
        try {
            await deleteDoc(doc(db, 'products', product?.id))
        } catch (error) {
            console.error(error)
        }
    }

    const editMutation = useMutation(editProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries(['products'])
        },
    })

    const handleEdit = e => {
        e.preventDefault()
        editMutation.mutate()
    }

    const deleteMutation = useMutation(deleteProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries(['products'])
        },
    })

    const handleDelete = e => {
        e.preventDefault()
        deleteMutation.mutate()
    }

    return (
        <>
            <form className='edit-inventory-form'>
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
                <button className='primary-btn' onClick={handleEdit}>
                    Edit
                </button>
                <button className='secondary-btn' onClick={handleDelete}>
                    Delete
                </button>
            </form>
            <div>
                {editMutation.isLoading ? 'updating product' : ''}
                {editMutation.isError ? editMutation.error.message : ''}
                {deleteMutation.isLoading ? 'deleting product' : ''}
                {deleteMutation.isError ? deleteMutation.error.message : ''}
            </div>
        </>
    )
}

export default EditInventoryForm
