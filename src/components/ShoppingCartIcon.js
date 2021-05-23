import React, {useContext} from 'react';
import {CartContext, CartConsumer} from './ShoppingCartContext';
import {Badge, Button} from 'reactstrap';

function ShowNumOfItems(length){
    if(length>0){
        // Show number icon
        return (
            <Badge color="primary" className="mx-1">{length}</Badge>
        );
    }
}

function ShoppingCartIcon(props) {
    const cart = useContext(CartContext);
    console.log(cart.cart.cart.length);

    return (
            <CartContext.Consumer>
                {context => (

                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="fa fa-shopping-cart"></i>
                            {/* {ShowNumOfItems(cart.cart.cart.length)} */}
                            {ShowNumOfItems(context.cart.cart.cart.length)}
                        </a>
                        <Button onClick={() => {
                            context.add.addToCart({test2: "working"})
                        }}>Click</Button>
                    </li>


                )}
                
            </CartContext.Consumer>
                
    );
}

export default ShoppingCartIcon;