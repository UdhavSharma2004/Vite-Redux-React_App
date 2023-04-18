import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { addProduct, removeProduct } from "../Store/cartSlice";
import './index.css';
import './product.css'

const Product = () => {
    const { id } = useParams();
    const [product, setproduct] = useState({})
    const dispatch = useDispatch();
    const [added, setadded] = useState(false);
    useEffect(() => async () => {
        let url = `https://fakestoreapi.com/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setproduct(data);
    }, []);

    const handleAdd = (product) => {
        dispatch(addProduct(product))
        setadded(true)
    }
    const handleRemove = (product) => {
        dispatch(removeProduct(product))
        setadded(false)
    }
    return (
        <div>
            <div className="product-box">
                <div className="image-box">
                    <img src={product.image} alt="" className='image-main' />
                </div>
                <div className="product-info-box">
                    <div className="product-title">{product.title}</div>
                    <div className="product-description">{product.description}</div>
                    <div className="product-price">${product.price} only</div>
                    <div className="product-category">Category - {product.category}</div>
                </div>
                <div className="product-button-box">
                    {!added ? (
                        <button className="product-button cart-addition" onClick={() => {
                            handleAdd(product)
                        }}>Add to Cart</button>
                    ) : (
                            <button className="product-button remove-cart" onClick={() => {
                                handleRemove(product)
                        }}>Remove from Cart</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Product
