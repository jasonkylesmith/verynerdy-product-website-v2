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
            
        ],
        newCartId: 0,
        showCart: false
    });

  
/*     function addToCart(item){
        const newCart = cart;
        newCart.push(item)
        setCart(newCart);
        console.log(cart);
    } */

    function toggleShowCart(){
        setCart({...cart, showCart: !cart.showCart});
    }

    function addToCart(item){
        const newCart = cart.cart;

        newCart.push({...item, cartId: (cart.newCartId+1), qtyPrice: (item.qty * item.price)});
        
        setCart({...cart, cart: newCart, newCartId: cart.newCartId+1});
    }

    function removeFromCart(item){
        const newCart = cart.cart;
        const itemIndex = newCart.findIndex((product) => product.cartId === item.cartId);
        newCart.splice(itemIndex, 1);
        setCart({...cart, cart: newCart});
    }

    function changeQuantity(item, type, value){
        const newCart = cart.cart;
        const itemIndex = newCart.findIndex((product) => product.cartId === item.cartId);

        if(type === "set"){
            newCart[itemIndex].qty = value;
        }
        if(type === "add"){
            newCart[itemIndex].qty += value;
        }
        if(type === "subtract"){
            newCart[itemIndex].qty -= value;
        }
        if(newCart[itemIndex].qty < 0){
            newCart[itemIndex].qty = 0;
        }

        const newQtyPrice = newCart[itemIndex].qty * cart.cart[itemIndex].price;
        newCart[itemIndex] = {...newCart[itemIndex], qtyPrice: newQtyPrice}
        
        setCart({...cart, cart: newCart});
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
                test: {testing},
                show: {toggleShowCart}
            }}>
            {props.children}
        </CartContext.Provider>
    );
}