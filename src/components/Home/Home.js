import React from 'react'
import CustomerReview from '../CustomerReview/CustomerReview'
import Hero from '../Hero/Hero'
import LatestProduct from '../LatestProduct/LatestProduct'
import NavBrand from '../NavBrand/NavBrand'
import ReasonToBuy from '../ReasonToBuy/ReasonToBuy'
import Services from '../Services/Services'
import ShopByPrice from '../ShopByPrice/ShopByPrice'

const Home = () => {
  return (
    <section>
      <NavBrand/>
      <Hero/>
      <LatestProduct/>
      <ShopByPrice/>
      <CustomerReview/>
      <ReasonToBuy/>
      <Services/>
    </section>
  )
}

export default Home