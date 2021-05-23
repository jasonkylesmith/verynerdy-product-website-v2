import React from 'react';
import ProductsSection from './ProductsSection';
import ShoppingCartIcon from './ShoppingCartIcon';

class ShoppingCartHandler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart: [

            ]
        }
    }

    updateCartState(updatedCart){
        this.setState({
            cart: updatedCart
        });
    }

    addToCart(item){
        const newCart = this.state.cart;
        newCart.push(item)
        this.updateCartState(newCart);
    }

    removeFromCart(item){
        const newCart = this.state.cart;
        const itemIndex = newCart.findIndex(item.id);
        newCart.splice(itemIndex, 1);
        this.updateCartState(newCart);
    }

    changeQuantity(item, type, value){
        const newCart = this.state.cart;
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

        this.updateCartState(newCart);
    }

    render(){
        return (
            <React.Fragment>
                <ProductsSection />
                <ShoppingCartIcon />
            </React.Fragment>
        )
    }
}

export default ShoppingCartHandler;

