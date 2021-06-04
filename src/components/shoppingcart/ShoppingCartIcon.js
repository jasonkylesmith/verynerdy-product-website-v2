import React from 'react';
import {CartContext} from '../main/ShoppingCartContext';
import {Badge, Button} from 'reactstrap';

function showNumOfItems(length){
    if(length>0){
        // Show number icon
        return (
            <Badge color="primary" className="mx-1">{length}</Badge>
        );
    }
}

function ShoppingCartIcon() {

    return (
            <CartContext.Consumer>
                {context => (
                    <React.Fragment>
                        <li className="nav-item">
                            <Button className="nav-link no-style"
                                onClick={() => {
                                    context.show.toggleShowCart();
                                }}>
                                <i className="fa fa-shopping-cart"></i>
                                {showNumOfItems(context.cart.cart.cart.length)}
                            </Button>
                        </li>
                    </React.Fragment>


                )}
                
            </CartContext.Consumer>
                
    );
}

export default ShoppingCartIcon;