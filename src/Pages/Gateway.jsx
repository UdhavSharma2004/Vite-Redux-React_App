import { React, useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../Store/cartSlice'
import './index.css';

const Gateway = () => {
    const items = useSelector((state) => state.cart)

    // create an object to store the quantity of each product

    const [quantity, setQuantity] = useState({})
    const [totalBill, setTotalBill] = useState(0)
    const [showbill, setShowBill] = useState(false)
    const [payment, setPayment] = useState(false)

    // create a function to handle the quantity of each product

    useEffect(() => {
        let temp = {}
        items.map((item) => {
            temp[item.id] = 1
        })
        setQuantity(temp)
    }, [items])

    const handleQuantity = (e, id) => {
        let temp = { ...quantity }
        temp[id] = e.target.value
        setQuantity(temp)
    }

    const handleGenerateBill = () => {
        setShowBill(true)
        let total = 0;
        console.log(quantity)
        items.map((item) => {
            console.log(item.price, quantity[item.id])
            total += item.price * quantity[item.id]
        })
        total = total.toFixed(3)
        console.log(total)
        setTotalBill(total)
    }

    const handlePayNow = () => {
        setPayment(true)
        items.map((item) => {
            dispatch(removeProduct(item.id))
        })

    }

    if (payment) {
        return (
            <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_yedpxhln.json"
                mode="bounce"
                background="transparent"
                speed={1}
                style={{ width: 500, height: 500 }}
                loop=""
                controls=""
                autoPlay=""
            />

        )
    }

    return (
        <div className=''>
            <h2 className='products'>Selected Products</h2>
            <h3 className='products'>You have selected following products, now select the number of items you want to purchase </h3>
            <div className="products black-font">
                {items.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.title} className='product-image' />
                        <div className="product-info">
                            <p className="info-title heading">{product.title}</p>
                            <p className="info-price heading">Price - <span className='price'>{product.price} $</span></p>
                        </div>
                        <div className="quantity">
                            <label htmlFor="quantity">Quantity</label>
                            {!showbill ? (
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min="0"
                                    defaultValue={1}
                                    className='quantity'
                                    onChange={(e) => { handleQuantity(e, product.id) }}
                                />
                            ) : (
                                <div>
                                    <p className='quantity'>{quantity[product.id]||1}</p>
                                </div>
                            )}

                        </div>
                    </div>
                ))}
            </div>
            <div className='PayNow-box'>
                {!showbill ? (
                    <button className='PayNow-btn' onClick={() => { handleGenerateBill() }}>Generate Bill</button>
                ) : (
                    <div className=''>
                        <div className='totalBill'>
                            <h3 className='totalBill-heading products'>Total Bill</h3>
                            <h3 className='totalBill-price products'>{totalBill} $</h3>
                        </div>
                        <div className='products'>
                            <button className='PayNow-btn' onClick={() => { handlePayNow() }}>Pay Now $ {totalBill}</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Gateway
