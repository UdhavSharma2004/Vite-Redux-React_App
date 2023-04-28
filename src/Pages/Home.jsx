import './index.css'
import { Link } from 'react-router-dom'
import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from "../Store/cartSlice";

const Home = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart)

  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [products, setproducts] = useState([])
  const [allproducts, setallproducts] = useState([])


  useEffect(() => async () => {
    setLoading(true);
    let url = `https://fakestoreapi.com/products`;
    let response = await fetch(url);
    let data = await response.json();
    data = data.filter((product) => !items.find((item) => item.id === product.id))
    setallproducts(data);
    setLoading(false);
    setproducts(data);
  }, []);


  const handleAdd = (product) => {
    dispatch(addProduct(product))
    setproducts(products.filter((item) => item.id !== product.id))
  }


  const handleSearch = () => {
    console.log(search)
    const results = allproducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
    setproducts(results);
  }

  const handleReset = () => {
    setSearch('');
    setproducts(allproducts);
  }


  if (loading) {
    return (
      <div className='errorPage'>
        <p className='heading'>
          Loading The products
        </p>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className='errorPage'>
        <p className='heading'>
          There are no new products to show ..
        </p>
      </div>
    )
  }

  return (
    <div className='main black-font'>
      <div className="search">
        <input type="text" placeholder="Search" value={search} className='search-input body' autoComplete="off" onChange={() => {
          setSearch(event.target.value);
          handleSearch()
        }} />
        <button className='reset-button' onClick={handleReset}>Reset</button>
      </div>
      {searchResults.length === 0 && search !== '' && (
        <div className='errorPage'>
          <p className='heading'>
            No Products Found
          </p>
        </div>
      )}
      <div className="products">
        {products.map((product) => (
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
              <button className='cart-addition' onClick={() => { handleAdd(product) }} > Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
