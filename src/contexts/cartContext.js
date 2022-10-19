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
const removeCartItem=(cartItems,productToRemove)=>{
    //if more than one item is there
    const existingCartItem=cartItems.find((cartItem)=>{
        return cartItem.id===productToRemove.id;
    });
    if(existingCartItem)
    {
        if(productToRemove.quantity==1)
        {
            return cartItems.filter(cartItem=>cartItem.id!==productToRemove.id);
        }
        return cartItems.map(cartItem=>{
            return (cartItem.id===productToRemove.id)?
            {...cartItem,quantity:cartItem.quantity-1}
            :cartItem;
        })
    }

}
const removeCartItemSet=(cartItems,productToRemove)=>{
    const existingCartItem=cartItems.find((cartItem)=>{
        return cartItem.id===productToRemove.id;
    });
    if(existingCartItem)
    {
        return cartItems.filter((cartItem)=>cartItem.id!==productToRemove.id);
    }
}

export const cartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0,
    removeItemFromCart:()=>{},
    removeItemSet:()=>{},
    cartTotal:0
});

export const  CartProvider=({children})=>{

    const [isCartOpen,setIsCartOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]=useState(0);
    const [cartTotal,setCartTotal]=useState(0);

    useEffect(()=>{
        let total=0;
        total=cartItems.reduce((total,curr)=>{return total+curr.price*curr.quantity;},0);
        setCartTotal(total);
    },[cartItems])

    useEffect(()=>{
        setCartCount(cartItems.reduce((total,curr)=>total+curr.quantity,0));
    },[cartItems]);

    const removeItemFromCart=(productToRemove)=>{
        setCartItems(removeCartItem(cartItems,productToRemove));
    }
    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    const removeItemSet=(productToRemove)=>{
        setCartItems(removeCartItemSet(cartItems,productToRemove));
    }
    const value={isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount,removeItemFromCart,removeItemSet,cartTotal};
    return<cartContext.Provider value={value}>{children}</cartContext.Provider>
}