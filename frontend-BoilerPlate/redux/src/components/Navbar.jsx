import React from 'react'
import { useSelector } from 'react-redux';

import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const {addToCart} = useSelector((state)=>state.addToCartReducer)
// console.log("navbar addTocart",addToCart);

    const navigate = useNavigate()

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm sticky-top">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">RR COLLECTION</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                            
                        </ul>
                      <div className="buttons">
                        <button className='btn btn-outline-dark'>
                            <i className='fa fa-sign-in me-1'></i>
                            login
                        </button>
                        <button className='btn btn-outline-dark ms-2'>
                            <i className='fa fa-user-plus me-1'></i>
                            Register
                        </button>
                        <button className='btn btn-outline-dark ms-2'onClick={()=>navigate('/cartpage')} >
                            <i className='fa fa-shopping-cart me-1'></i>
                            Cart({addToCart.length})
                        </button>
                      </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
