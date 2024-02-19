import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartDecrement, cartIncrement, removeAddToCart } from '../store/AddToCartSlice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {


const navigate = useNavigate()
  //global states
  const { addToCart, count } = useSelector((state) => state.addToCartReducer);
  // console.log("addToCart Cart ", addToCart);
// const {count} = useSelector(state=>state.addToCartReducer)
// console.log("selector",count);
const dispatch = useDispatch()
const stock = 12;
  
  return (
    <>

      {addToCart.length !== 0 ?

        addToCart.map((product, index) => {

          return <div className="container-fluid my-5" key={index}>
            <section className="row">
              <div className="col-12 col-md-5">
                <div className='d-flex justify-content-center mt-3'>
                  <img src={product.image} height={200} alt={product.title} />
                </div>
              </div>
              <div className="col-12 col-md-4 my-3">
                <h3 className=''>{product.title}</h3>
                <h4 className='fw-bold my-4'>
                  {count} <span className='fs-5 fw-light'>X</span> ${product.price} = ${product.price * count}
                </h4>
                <div>
                  <button className='px-3 py-2 border-0 bg-dark text-white' onClick={() => {
                    count > 1 ? dispatch(cartDecrement(product.id)) : dispatch(removeAddToCart(product))
                  }} >
                    -
                  </button>
                  <button className='ms-3 px-3 py-2 border-0 bg-dark text-white' onClick={() => {
                   count < stock ? dispatch(cartIncrement(product.id)) : setCount(stock)
                  }} >
                    +
                  </button>
                </div>
              </div>           
            </section>
            
          </div>
          
        },
        ) : <h1 className='d-flex justify-content-center align-items-center my-5' style={{ color: "grey" }}>Your Cart is Empty</h1>
      }
{
  addToCart.length !== 0 && <div className='d-flex justify-content-center align-items-center'>
    <button className='btn btn-outline-dark px-4 py-2 fw-bold' onClick={()=>navigate('/checkout')}>
    Checkout
  </button>
  </div>
}
    </>
  )
}

export default CartPage
