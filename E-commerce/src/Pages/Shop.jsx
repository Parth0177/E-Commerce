import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import New from '../components/NewCollection/New'
import News from '../components/NewsLetter/News'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <New/>
      <News/>
    </div>
  )
}

export default Shop