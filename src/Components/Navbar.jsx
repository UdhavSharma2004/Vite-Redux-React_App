import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state) => state.cart)
    return (
        <div>
            <div className='nav'>
                <Link to="/" className='heading link-main'>
                    <h3>React Redux Store</h3>
                </Link>
                <div className="nav-container">
                    <ul className="nav-links">
                        <li>
                            <Link to="/" className='home body link-main'>Home</Link>
                        </li>
                        <li>
                            <Link to="/cart" className='cart body link-main'>Cart-{items.length}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
