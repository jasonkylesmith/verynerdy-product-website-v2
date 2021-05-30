import React, { useState, createContext } from 'react';

export const CartContext = createContext();
export const CartConsumer = createContext();

export const CartProvider = (props) => {

    

    const [cart, setCart] = useState({
        cart: [
            
        ],
        newCartId: 0,
        showCart: false
    });


    function toggleShowCart(){
        setCart({...cart, showCart: !cart.showCart});

        if(!cart.showCart){
            document.getElementsByTagName("body")[0].classList.add("stop-scrolling");
        } else {
            document.getElementsByTagName("body")[0].classList.remove("stop-scrolling");
        }
    }

    function addToCart(item){
        const newCart = cart.cart;
        newCart.push({...item, cartId: (cart.newCartId+1), qtyPrice: (item.qty * item.price)});
        setCart({...cart, cart: newCart, newCartId: cart.newCartId+1});
    }

    function removeFromCart(item){
        let newCart = cart.cart; 
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
            newCart[itemIndex].qty += 1;
        }
        if(type === "subtract"){
            if(newCart[itemIndex].qty === 1){
                removeFromCart(item);
                return;
            } else {
                newCart[itemIndex].qty -= 1;
            }
            
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