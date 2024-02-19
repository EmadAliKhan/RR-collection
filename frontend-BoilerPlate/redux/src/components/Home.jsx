import React from 'react'
import Products from './Products'
const Home = () => {
  return (
    <div className='hero'>
      
      <div className="card bg-dark text-white border-0">
  <img src="https://img.freepik.com/free-photo/gray-painted-background_53876-94041.jpg" height="550px" className="card-img" alt="Background"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
    <p className="card-text lead fs-2">
        CHECKOUT ALL THE TRENDS
    </p>
    </div>
  </div>
</div>
<Products/>
    </div>
    
  )
  
}


export default Home
