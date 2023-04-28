import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

const Thanks = () => {
    return (
        <div className=''>
            <h3 className='products'>Thanks for shopping with us. We will add further functionality very soon !!</h3>
            <Link to='/' className='products'>
                <button className="GobackBtn">Shop More</button>
            </Link>
        </div>
    )
}

export default Thanks
