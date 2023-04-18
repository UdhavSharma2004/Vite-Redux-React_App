import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { removeProduct } from '../Store/cartSlice'


const Cart = () => {
    const dispatch=useDispatch();
    const items = useSelector((state) => state.cart)


    const handleRemove = (product) => {
        dispatch(removeProduct(product))
    }

    if (items.length === 0) {
        return (
            <div>
                <div className='main black-font center-large-font'>
                    Cart List
                </div>
                <div className='errorPage'>
                    <p className='heading'>
                        No Products added till now..
                    </p>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className='main black-font center-large-font'>
                Cart List
            </div>
            <div className="products black-font">
                {items.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.title} className='product-image' />
                        <div className="product-info">
                            <p className="info-title heading">{product.title}</p>
                            <p className="info-price heading">Only at <span className='price'>{product.price} $</span></p>
                            <p className="info-description">{product.description}</p>
                        </div>
                        <div className='more-info'>
                            <Link to={`/product/${product.id}`} className='product-link'>
                                <button className='product-button'>View Details</button>
                            </Link>
                            <button className='remove-cart' onClick={() => { handleRemove(product) }} > Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='PayNow-box'>
                <Link to='/checkout'>
                    <button className='PayNow-btn'>Proceed Further</button>
                </Link>
            </div>
        </div>

    )
}

export default Cart
