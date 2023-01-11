import React, { createContext, useState } from 'react'
import {Products} from '../products'

export const ShopContext = createContext( null )

const getDefaultCart = () => {
  // const cartContent = {
  //   cart: {},
  //   price: {}
  // }
  let cart = {}
  // let price = {}
  for ( let i = 1; i < Products.length + 1; i++ ){
    cart[ i ] = 0    
  }
  // for ( let i = 0; i < Products.length; i++ ){    
  //   price[ i + 1 ] = Products[ i ].price    
  //   cartContent.price[i + 1] = Products[i].price  
  // }
  return cart
}

export const ShopContextProvider = ( props ) => {
  const [ cartItems, setCartItems ] = useState( getDefaultCart() )
 
  const getCartItemNumber = () => {
    let numberOfItem = 0
    for (const item in cartItems) {
			if (cartItems[item] > 0) {
				numberOfItem += cartItems[item]
			}
		}
    return numberOfItem
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = Products.find((product) => product.id === Number(item))
				totalAmount += cartItems[item] * itemInfo.price
			}
		}
    return totalAmount
  }
  
  const addToCart = ( itemId ) => {    

    setCartItems( ( prev ) => ( { ...prev, [ itemId ]: prev[ itemId ] + 1 } ) )    
    /*
      get the previous state, spread throught
      [itemId] grap the id which is pass in
      prev[itemId] + 1: add one to whatever the value was
    */
  }

   const removeFromCart = (itemId) => {
			setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
			/*
      get the previous state, spread throught
      [itemId] grap the id which is pass in
      prev[itemId] - 1: subsract one from whatever the value was
    */
   }
  
  const updateCartItemPrice = ( newPrice, itemId ) => {
    setCartItems((prev) => ({...prev, [itemId]: newPrice}))
  }

    const updateCartItemCount = (newValue, itemId) => {
			setCartItems((prev) => ({ ...prev, [itemId]: newValue }))
		}

  const clearCart = () => {
    setCartItems(getDefaultCart())
  }
  
  const contextValue = {
		cartItems,
		addToCart,
		removeFromCart,
		updateCartItemPrice,
		updateCartItemCount,
		getTotalCartAmount,
		getCartItemNumber,
		clearCart,
	}  

  return <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
}

export default ShopContextProvider
