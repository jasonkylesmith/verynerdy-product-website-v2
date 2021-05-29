import React, {useContext} from 'react';
import {CartContext} from './ShoppingCartContext';
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
                                {ShowNumOfItems(context.cart.cart.cart.length)}
                            </Button>
                        </li>
                    </React.Fragment>


                )}
                
            </CartContext.Consumer>
                
    );
}

export default ShoppingCartIcon;