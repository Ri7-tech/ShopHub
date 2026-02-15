import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from './Context/Context'

export default function ViewCart() {

     var {cartItem,setCartItem}=useContext(cartContext)
     var[cartTotal,setCartTotal]=useState(0)

     useEffect(()=>{
      
      var sum=0;
      cartItem.forEach((v)=>{
        let num=parseInt(v.price)
       sum+=num
      })
        setCartTotal(sum);
        
     },[cartItem])

     var deleteProduct =(product_id)=>{
      if(confirm("Are you sure want to Delete")){
             var finalData =cartItem.filter((v)=>{
          if(product_id !=v.id){
            return v;
          }
         })
          setCartItem([...finalData]);
          localStorage.setItem('cartItem',JSON.stringify(finalData))
      }
       
      console.log(finalData);
     }
  return (
    <>
      <div className="container-fluid">
         <div class="container py-3">
      <h3>Shopping Cart</h3>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-8">
          {/* <!-- single cart item  --> */}
          <hr />
          {
            cartItem.map((v,i)=>{
              return(
                <>
                 <div class="cart-item py-2">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="d-flex justify-content-between mb-3">
                  <img
                    class="cart-image d-block"
                    src={v.image}
                    alt=""
                  />
                  <div class="mx-3">
                    <h5>{v.name}</h5>
                    <p>Lorem ipsum, dolor sit</p>
                    <h5>Rs.{v.price}</h5>
                    <small
                      class="text-white bg-success px-2 py-1 d-inline-block rounded-3 mt-2"
                      >In Stock</small
                    >
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="d-flex justify-content-between">
                  <div>
                    <select class="form-select">
                      <option value="1" selected={
                        v.quantity==1 ?'selected' : ''
                      }>1</option>
                      <option value="2" selected={
                        v.quantity==2 ?'selected' : ''
                      }>2</option>
                      <option value="3" selected={
                        v.quantity==3 ?'selected' : ''
                      }>3</option>
                      <option value="4" selected={
                        v.quantity==4 ?'selected' : ''
                      }>4</option>
                       <option value="5" selected={
                        v.quantity==5 ?'selected' : ''
                      }>5</option>
                        <option value="6" selected={
                        v.quantity==7 ?'selected' : ''
                      }>6</option>
                         <option value="7" selected={
                        v.quantity==8 ?'selected' : ''
                      }>7</option>
                    </select>
                  </div>
                  <div>
                    <button onClick={()=>deleteProduct(v.id)}
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ./ single cart item end  --> */}
          {/* <!-- single cart item  --> */}
          <hr />
                </>
              )
            })
          }
          <div class="cart-item py-2">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="d-flex justify-content-between mb-3">
                  <img
                    class="cart-image d-block"
                    src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                  <div class="mx-3">
                    <h5>Basic Tee</h5>
                    <p>Lorem ipsum, dolor sit</p>
                    <h5>Rs.{cartItem.price}</h5>
                    <small
                      class="text-white bg-success px-2 py-1 d-inline-block rounded-3 mt-2"
                      >In Stock</small
                    >
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="d-flex justify-content-between">
                  <div>
                    <select class="form-select">
                      <option selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ./ single cart item end  --> */}
          {/* <!-- single cart item  --> */}
          <hr />
          <div class="cart-item py-2">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="d-flex justify-content-between mb-3">
                  <img
                    class="cart-image d-block"
                    src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                  <div class="mx-3">
                    <h5>Basic Tee</h5>
                    <p>Lorem ipsum, dolor sit</p>
                    <h5>Rs. 800</h5>
                    <small
                      class="text-white bg-success px-2 py-1 d-inline-block rounded-3 mt-2"
                      >In Stock</small
                    >
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="d-flex justify-content-between">
                  <div>
                    <select class="form-select">
                      <option selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* <!-- ./ single cart item end  --> */}
        </div>
        <div class="col-12 col-sm-12 col-md-8 col-lg-4">
          <div class="bg-light rounded-3 p-4 sticky-top">
            <h6 class="mb-4">Order Summary</h6>
            <div class="d-flex justify-content-between align-items-center">
              <div>Subtotal</div>
              <div><strong>Rs.{cartTotal}</strong></div>
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-center">
              <div>Delivery Charge</div>
              <div><strong>Rs. 100</strong></div>
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-center">
              <div>Total</div>
              <div><strong>Rs.{cartTotal+100}</strong></div>
            </div>
            <button class="btn btn-primary w-100 mt-4">Checkout</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
