import React, { useState, createContext } from 'react';

export const CartContext = createContext();
export const CartConsumer = createContext();

export const CartProvider = (props) => {



/*      const addToCart = () => {
        const newCart = cart.cart;
        newCart.push({test2: "working"});
        console.log(newCart);
        setCart({
            cart: newCart
        });
    }  */

    const [cart, setCart] = useState({
        cart: [
            
        ]
    });

  
/*     function addToCart(item){
        const newCart = cart;
        newCart.push(item)
        setCart(newCart);
        console.log(cart);
    } */

    function addToCart(item){
        const newCart = cart.cart;
        newCart.push(item)
        setCart({
            cart: newCart
        });
        console.log(cart);
    }

    function removeFromCart(item){
        const newCart = cart.cart;
        const itemIndex = newCart.findIndex(item.id);
        newCart.splice(itemIndex, 1);
        
    }

    function changeQuantity(item, type, value){
        const newCart = cart.cart;
        const itemIndex = newCart.findIndex(item.id);

        if(type === "set"){
            newCart[itemIndex].quantity = value;
        }
        if(type === "add"){
            newCart[itemIndex].quantity += value;
        }
        if(type === "subtract"){
            newCart[itemIndex].quantity -= value;
        }
        if(newCart[itemIndex].quantity < 0){
            newCart[itemIndex].quantity = 0;
        }
    }

    function testing(){
        console.log("Clicked the button");
    }


    return (
        <CartContext.Provider value={{
                cart: {cart},
                add: {addToCart},
                remove: {removeFromCart},
                change: {changeQuantity},
                test: {testing}
            }}>
            {props.children}
        </CartContext.Provider>
    );
}