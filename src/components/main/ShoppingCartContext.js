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
        // Toggles showCart boolean, which controls whether shopping cart is displayed
        setCart({...cart, showCart: !cart.showCart});

        // If showCart is false, add class to body element that changes to Overflow:hidden
        // so scrolling is disabled when shopping cart tray appears
        if(cart.showCart === false){
            document.getElementsByTagName("body")[0].classList.add("stop-scrolling");
        } else {
            document.getElementsByTagName("body")[0].classList.remove("stop-scrolling");
        }
    }

    function addToCart(item){
        // Creates copy of cart
        const newCart = cart.cart;
        // Adds new item to copy along with a generated cartId and calculated qtyPrice
        newCart.push({...item, cartId: (cart.newCartId+1), qtyPrice: (item.qty * item.price)});
        // setCart spreads cart and adds newCart, then increments newCartId for next added item
        setCart({...cart, cart: newCart, newCartId: cart.newCartId++});
    }

    function removeFromCart(item){
        // Creates copy of cart
        let newCart = cart.cart; 
        // Finds the index of the item in newCart
        const itemIndex = newCart.findIndex((product) => product.cartId === item.cartId); 
        // Removes item of that index from newCart        
        newCart.splice(itemIndex, 1);
        // Spreads cart and merges with newCart to remove previous item
        setCart({...cart, cart: newCart});
    }

    function changeQuantity(item, type, value){
        // Creates copy of cart
        const newCart = cart.cart;
        // Finds the index of the item in newCart
        const itemIndex = newCart.findIndex((product) => product.cartId === item.cartId);
        // If type passed is set, then update the item's quantity by the value passed
        if(type === "set"){
            newCart[itemIndex].qty = value;
        }
        // If type passed is add, then increase the item's quantity by 1
        if(type === "add"){
            newCart[itemIndex].qty += 1;
        }
        // If type passed is subtract, then reduce the item's quantity by 1
        // Before that, if quantity is already 1, will remove the item from cart instead
        if(type === "subtract"){
            if(newCart[itemIndex].qty === 1){
                removeFromCart(item);
                return;
            } else {
                newCart[itemIndex].qty -= 1;
            }
            
        }
        // Prevents over-clicking to reduce quantity below 0 - testing to see if still needed
        if(newCart[itemIndex].qty < 0){
            newCart[itemIndex].qty = 0;
        }

        // Calculates the new qtyPrice based on the updated quantity value
        const newQtyPrice = newCart[itemIndex].qty * cart.cart[itemIndex].price;

        // Updates the item in newCart
        newCart[itemIndex] = {...newCart[itemIndex], qtyPrice: newQtyPrice}

        // Spreads cart and adds newCart
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