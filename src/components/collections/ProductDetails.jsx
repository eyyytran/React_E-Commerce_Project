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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import '../../styles/productPage.css'

const ProductDetails = () => {
    let params = useParams()
    const dispatch = useDispatch()
    const queryClient = useQueryClient()
    const { data, error, isError, isLoading } = useQuery(
        [`product-${params.productId}`],
        () => fetchProductById(params.productId)
    )

    const [QTY, setQTY] = useState(1)
    const [imageURL, setImageURL] = useState(data?.imageURL1)
    const [ingredientsClicked, setIngredientsClicked] = useState(false)
    const [usageClicked, setUsageClicked] = useState(false)

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

    const qtyAvailable = qty => {
        const result = []
        for (let i = 1; i < qty + 1; i++) result.push(i)
        return result
    }

    const qtyToPrint = qtyAvailable(data?.qty)

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
            <div className='top-wrapper'></div>
            <div className='product-main-container'>
                <div className='top-wrapper'>
                    <div className='image-wrapper'>
                        <div className='main-image'>
                            <img
                                src={imageURL ? imageURL : data?.imageURL1}
                                alt='product'
                            />
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
                                    {qtyToPrint.map(qty => {
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
                                onClick={handleClick}
                            >
                                <div className='button-text'>
                                    {data?.qty === 0
                                        ? 'SOLD OUT'
                                        : 'ADD TO BAG'}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='ingredients'>
                    <div className='ingredients-header'>
                        <h2>Ingredients</h2>
                        <button
                            onClick={() =>
                                setIngredientsClicked(!ingredientsClicked)
                            }
                        >
                            {!ingredientsClicked ? (
                                <ExpandMoreIcon fontSize='large' />
                            ) : (
                                <ExpandLessIcon fontSize='large' />
                            )}
                        </button>
                    </div>
                    <div
                        className={
                            !ingredientsClicked
                                ? 'ingredients-expand hidden'
                                : 'ingredients-expand'
                        }
                    >
                        {data?.ingredients}
                    </div>
                </div>
                <div className='usage'>
                    <div className='usage-header'>
                        <h2>How to Use</h2>
                        <button onClick={() => setUsageClicked(!usageClicked)}>
                            {!usageClicked ? (
                                <ExpandMoreIcon fontSize='large' />
                            ) : (
                                <ExpandLessIcon fontSize='large' />
                            )}
                        </button>
                    </div>
                    <div
                        className={
                            !usageClicked
                                ? 'usage-expand hidden'
                                : 'usage-expand'
                        }
                    >
                        {data?.usage}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
