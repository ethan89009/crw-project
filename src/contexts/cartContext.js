import { createContext,useEffect,useState } from "react";

const addCartItem=(cartItems,productToAdd)=>{
    const existingCartItem=cartItems.find((cartItem)=>{
        return cartItem.id===productToAdd.id;
    });

    if(existingCartItem)
    {
        return cartItems.map(cartItem=>{
            return (cartItem.id===productToAdd.id)?
            {...cartItem,quantity:cartItem.quantity+1}
            :cartItem;
        })
    }

    //if no other cart items of the same time are there
    return [...cartItems,{...productToAdd,quantity:1}];
}

export const cartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0
});

export const  CartProvider=({children})=>{

    const [isCartOpen,setIsCartOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]=useState(0);

    useEffect(()=>{
        setCartCount(cartItems.reduce((total,curr)=>total+curr.quantity,0));
    },[cartItems]);

    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    const value={isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount};
    return<cartContext.Provider value={value}>{children}</cartContext.Provider>
}