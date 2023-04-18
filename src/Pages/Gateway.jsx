import { React ,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../Store/cartSlice'

const Gateway = () => {
    const items = useSelector((state) => state.cart)
    console.log(items)
    const dispatch = useDispatch()
    const handleRemove = (product) => {
        dispatch(removeProduct(product))
    }

    let initotalBill = items.reduce((acc, item) => acc + item.price, 0);
    initotalBill = initotalBill.toFixed(3);

    const [totalBill, setTotalBill] = useState(parseFloat(initotalBill))
    
    const handleQuantity = (quantity, price) => {
        quantity = parseInt(quantity)
        price = parseFloat(price)
        return (quantity * price)
    }
    return (
        <div className=''>
            <h2 className='products'>Selected Products</h2>
            <div className="selected-products products">
                {items.map((item) => (
                    <div className="product" key={item.id}>
                        <div className="product-details products">
                            <img src={item.image} alt={item.title} width={"200px"}/>
                            <h3>{item.title}</h3>
                            <p className='product-price'>Price: {item.price} $</p>
                        </div>
                        <button className='remove-cart' onClick={() => {
                            handleRemove(item)
                        }}>Cancel</button>
                        <label htmlFor="quantity">
                            Quantity:
                            <input type="number" className='quantity' name="quantity" onChange={() => {
                                let total = handleQuantity(event.target.value, item.price)
                                setTotalBill(total)
                            }} defaultValue={1}/>
                        </label>
                    </div>
                ))}
                <div>
                    <h3 className='total'>Total Bill: {totalBill.toFixed(3)} $</h3>
                </div>   
            </div>
        </div>
    )
}

export default Gateway
