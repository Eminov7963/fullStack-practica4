import React, { createContext, useState } from 'react'
export const ProductsContext = createContext(null)

const ProductsProvider = ({children}) => {
    const [wish, setWish]= useState([])


    const ToggleWishlist = (product)=>{
        const idx = wish.findIndex((w)=>w._id === product._id)
        if (idx === -1) {
            setWish([...wish,{...product}])
        }
        else{
            setWish([...wish].filter((c)=>c._id !== product._id))
        }
    }
  return (
    <ProductsContext.Provider value={{wish, ToggleWishlist}}>{children}</ProductsContext.Provider>
  )
}

export default ProductsProvider