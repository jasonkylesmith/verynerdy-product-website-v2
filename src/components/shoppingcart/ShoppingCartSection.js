import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import { CartContext } from '../main/ShoppingCartContext';
import ShoppingCartDisplay from './ShoppingCartDisplay';
import OutsideClickHandler from '../utilities/OutsideClickHandler';

function ShoppingCartSection(props) {

    let classes = "";
    let bgClasses = "";

    // If props.show (showCart from ShoppingCartContext) is true, classes will allow shopping cart to show
    if(props.show){
        classes = "shopping-cart-show";
    // Otherwise, hide the cart and hide the transparent background covering the rest of the page
    } else {
        classes = "shopping-cart-hide";
        bgClasses = "cart-bg-hide"
    }

    return (
        <React.Fragment>
            <div className={`cart-bg ${bgClasses}`}>

            </div>
            <CartContext.Consumer>
                {context => (
                    // If user clicks outside the shopping cart, toggle showCart and close the shopping cart
                    <OutsideClickHandler test={context.cart.cart.showCart} onOutsideClick={() => {
                        context.show.toggleShowCart()
                    }} >
                        <Container className={`shopping-cart m-0 px-3 ${classes}`} id="shopping-cart-tray" >  
                            <Row className="py-3">                                    
                                <React.Fragment>
                                    <Col xs={{size: 9, offset: 0}} className="px-4">
                                        <h4>Shopping Cart</h4>
                                    </Col>
                                    <Col xs={{size: 3, offset: 0}} className="text-right px-4">
                                        <Button 
                                        className="no-style text-black-50 close"
                                        onClick={() => (
                                            context.show.toggleShowCart()
                                        )}>&times;</Button>
                                    </Col>
                                    
                                    <ShoppingCartDisplay items={context} />

                                </React.Fragment>
                            </Row>   
                        </Container>
                    </OutsideClickHandler>
                )}
            </CartContext.Consumer>
        </React.Fragment>
    );

}

export default ShoppingCartSection;