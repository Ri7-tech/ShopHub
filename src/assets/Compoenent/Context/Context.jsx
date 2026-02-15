import React, { createContext, useState } from 'react'
 const cartContext=createContext() ;



export default function   ({children}) {

  var cartData=localStorage.getItem('cartItem');
  var  cartData=JSON.parse(cartData);

  var [cartItem,setCartItem]=useState(cartData ?? [])
   var[wishList,setWishList]=useState()

   var Data={cartItem,setCartItem,wishList,setWishList}
  return (
    <>
      <cartContext.Provider value={Data}>
       {children}
      </cartContext.Provider>
    </>
  )
}
export {cartContext};
