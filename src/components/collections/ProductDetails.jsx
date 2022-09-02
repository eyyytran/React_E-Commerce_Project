import { useParams } from 'react-router-dom'
import { useQueryClient, useQuery } from 'react-query'
import { fetchProductById } from '../utils/dbRequests'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, SetIsCartOpen } from '../../redux'
import '../../styles/productPage.css'

const ProductDetails = () => {
    const [QTY, setQTY] = useState(1)
    let params = useParams()
    const dispatch = useDispatch()
    const queryClient = useQueryClient()
    const { data, error, isError, isLoading } = useQuery(
        [`product-${params.productId}`],
        () => fetchProductById(params.productId)
    )
    const [imageURL, setImageURL] = useState(data?.imageURL1)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }

    const productToBuy = {
        id: data?.id,
        name: data?.name,
        price: parseFloat(data?.price),
        img: data?.imageURL1,
        qtyToBuy: QTY,
    }

    const qtyAvailable = Array.from(String(data?.qty), Number)
    console.log(qtyAvailable)

    const handleChange = e => {
        setQTY(e.target.value)
    }

    const handleClick = e => {
        e.stopPropagation()
        dispatch(addToCart(productToBuy))
        dispatch(SetIsCartOpen(true))
    }

    return (
        <div className='product-page'>
            <div className='product-page-header'>
                <h2 className='name'>{data?.name}</h2>
                <div className='price'>${data?.price}</div>
            </div>
            <div className='product-images'>
                <div className='main-image'>
                    <img src={imageURL} alt='product' />
                </div>
                <div className='sub-images'>
                    <img
                        src={data?.imageURL1}
                        alt='product'
                        onClick={e => setImageURL(data?.imageURL1)}
                    />
                    <img
                        src={data?.imageURL2}
                        alt='product'
                        onClick={e => setImageURL(data?.imageURL2)}
                    />
                    <img
                        src={data?.imageURL3}
                        alt='product'
                        onClick={e => setImageURL(data?.imageURL3)}
                    />
                </div>
                <div className='product-details-container'>
                    <div className='subtitle'>
                        {data?.subtitle.toUpperCase()}
                    </div>
                    <div className='description'>{data?.description}</div>
                    <div className='add-to-cart'>
                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                            <InputLabel id='demo-simple-select-label'>
                                QTY
                            </InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={QTY}
                                label='Age'
                                onChange={handleChange}
                            >
                                {qtyAvailable.map(qty => {
                                    return (
                                        <MenuItem value={parseInt(qty)}>
                                            {qty}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <button
                            disabled={data?.qty === 0 ? true : false}
                            style={
                                data?.qty === 0
                                    ? { placeContent: 'center' }
                                    : {}
                            }
                        >
                            <div className='button-text' onClick={handleClick}>
                                {data?.qty === 0 ? 'SOLD OUT' : 'ADD TO BAG'}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
