import React from 'react'
import './index.css'


const Error404 = () => {
  return (
    <div className='errorPage'>
      <p className='heading'>
        The Page you have requested is not available
      </p>
      <button onClick={() => {
        window.location.href = '/'
      }}
        className='GobackBtn'
      > Go to Home Page</button>
    </div>
  )
}

export default Error404
