import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import { CartContext } from './ShoppingCartContext';

function DisplayShoppingCart({ items }){

    const cartItems = items.cart.map(item => {
        return(<ShoppingCartItem item={item}/>)
    })

    if(items.cart[0]){
        return cartItems;
    } else {
        return <p>Your Shopping Cart is Empty</p>
    }

    
}

function ShoppingCartItem({ item }){
    return (
        <React.Fragment>
            <Container className="my-4 p-2 border">
                <Row>
                    <Col xs={3} lg={4}>
                        <img src={item.imgPath} alt={item.imgAltText} className="img-fluid" />
                    </Col>
                    <Col xs={6} lg={6}>
                        <h5>{item.title}</h5>
                        <h6>{item.subTitle}</h6>
                        <span>{item.selectedDesign}</span>
                    </Col>
                    <Col xs={3} lg={2} className="text-right">
                        X
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} lg={4} className="text-center">
                        - X +
                    </Col>
                    <Col xs={6} lg={6}>
                        
                    </Col>
                    <Col xs={3} lg={2} className="text-right">
                    <span>{item.price}</span>
                    </Col>
                </Row>
            </Container>
            

        </React.Fragment>
    )
}

function ShoppingCartSection(props) {
    
        let classes = "";

        if(props.show){
            classes = "shopping-cart-show";
        } else {
            classes = "shopping-cart-hide";
        }

        console.log(props.show);

        function calcSubtotal({ cart }){
            let subtotal = 0;
            cart.forEach(item => (
                subtotal += Number(item.price.replace('$', ''))
                ));
            return subtotal;
        }

        return (
            <Container className={`shopping-cart ${classes}`}>
                {/* <div className="cart-button">
                    Cart
                </div> */}
                <Row>
                    <CartContext.Consumer>
                        {context => (
                            <React.Fragment>
                                <Col xs={{size: 9, offset: 0}}>
                                    <h3>Shopping Cart</h3>
                                </Col>
                                <Col xs={{size: 3, offset: 0}}>
                                    <Button onClick={() => (
                                        context.show.toggleShowCart()
                                    )}>X</Button>
                                </Col>
                                <Col xs={{size: 12, offset: 0}}>
                                    <DisplayShoppingCart items={context.cart.cart} />
                                </Col>
                                <Row className="cart-footer text-center">
                                    <Col xs={12} lg={{size: 5, offset: 1}}>
                                        Subtotal: ${calcSubtotal(context.cart.cart)}
                                    </Col>
                                    <Col xs={12} lg={5}>
                                        Checkout
                                    </Col>
                                </Row>
                            </React.Fragment>
                        )}
                    </CartContext.Consumer>
                </Row>
            </Container>
        );

}

export default ShoppingCartSection;