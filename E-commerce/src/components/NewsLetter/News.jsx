import React from 'react'
import './newsletter.css'

const News = () => {
  return (
    <div className='newsletter'>
      <h1>
        Get Exclusive Offers on your Email
      </h1>
      <p>Subscribe to our news letter and stay updated.</p>
      <div>
        <input type="email" placeholder='Enter your Email id:' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default News