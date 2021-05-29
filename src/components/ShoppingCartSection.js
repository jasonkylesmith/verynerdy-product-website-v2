import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import { CartContext } from './ShoppingCartContext';

function DisplayShoppingCart({ items }){

    const cartItems = items.cart.cart.cart.map(item => {
        return(<ShoppingCartItem item={item} cart={items} key={item.cartId}/>)
    })

    function calcSubtotal({ cart }){
        let subtotal = 0;
        cart.forEach(item => (
            subtotal += item.qtyPrice
            ));
        return subtotal;
    }

    function calcDonation(cart){
        return ((calcSubtotal(cart) * .03).toFixed(2))
    }

    if(items.cart.cart.cart[0]){
        return (
            <React.Fragment>
                <Col xs={{size: 12, offset: 0}} className="mt-3">
                    {cartItems}
                </Col>
                <Row className="cart-footer p-4">
                    <Col xs={12} md={8}>
                        <Col xs={12} className="text-center text-md-left">
                            <h4>Subtotal: ${calcSubtotal(items.cart.cart)}</h4>
                        </Col>
                        <Col xs={12} className="text-center text-md-left">
                            Potential Donation: ${calcDonation(items.cart.cart)}
                        </Col>
                    </Col>
                    <Col  xs={12} md={4} className="text-center pr-4">
                        <Button color="primary" className="btn mt-3 mt-md-0">Checkout</Button>
                    </Col>
                </Row>



            </React.Fragment>
            );
    } else {
        return (
            <Col xs={{size: 12, offset: 0}} className="mt-3">
                <p>Your Shopping Cart is Empty</p>
            </Col>
        )
    }  
}

function DisplayQty({ item, action }){

    return (
        <Col xs={12} md={4} className="text-center d-flex align-items-center justify-content-center">
            <Button onClick={() => {
                action.changeQuantity(item, "subtract", 1);
            }} className="btn-outline btn-sm p-1">&minus;</Button> 
            
            <span className="px-2"> Qty: {item.qty} </span>
            
            <Button onClick={() => {
                action.changeQuantity(item, "add", 1);
            }} className="btn-outline btn-sm p-1">&#43;</Button>
        </Col>
    )
}

function ShoppingCartItem({ item, cart }){

    function calcPrice(price, qty){
        return price * qty;
    }

    if(item.qty === 0){
        cart.remove.removeFromCart(item);
    }

    return (
        <React.Fragment>
            <Container className="cart-item">
                <Row>
                    <Col xs={12} md={4}>
                        <img src={item.imgPath} alt={item.imgAltText} className="img-fluid" />
                    </Col>
                    <Col xs={9} md={6}>
                        <h5>{item.title}</h5>
                        <h6>{item.subTitle}</h6>
                        
                    </Col>
                    <Col xs={3} md={2} className="text-right">
                        <Button className="no-style close"
                            onClick={() => {
                                cart.remove.removeFromCart(item)
                            }}>&times;</Button>
                    </Col>
                </Row>
                <Row>
                    <DisplayQty item={item} action={cart.change} />
                    <Col xs={9} md={6} className="d-flex align-items-center">
                        <span>{item.selectedDesign}</span>
                    </Col>
                    <Col xs={3} md={2} className="d-flex align-items-center justify-content-end">
                        <span className="price">${calcPrice(item.price, item.qty)}</span>
                    </Col>
                </Row>
            </Container>
            

        </React.Fragment>
    )
}

function ShoppingCartSection(props) {
    
        let classes = "";
        let bgClasses = "";

        if(props.show){
            classes = "shopping-cart-show";
        } else {
            classes = "shopping-cart-hide";
            bgClasses = "cart-bg-hide"
        }

        return (
            <React.Fragment>
                <div className={`cart-bg ${bgClasses}`}>

                </div>
                
                    <Container className={`shopping-cart m-0 px-3 ${classes}`}>
                        

                            
                                <Row className="py-3">
                                    <CartContext.Consumer>
                                        {context => (
                                            <React.Fragment>
                                                <Col xs={{size: 9, offset: 0}}>
                                                    <h4>Shopping Cart</h4>
                                                </Col>
                                                <Col xs={{size: 3, offset: 0}} className="text-right">
                                                    <Button 
                                                    className="no-style text-black-50 close"
                                                    onClick={() => (
                                                        context.show.toggleShowCart()
                                                    )}>&times;</Button>
                                                </Col>
                                                
                                                <DisplayShoppingCart items={context} />
            
                                            </React.Fragment>
                                        )}
                                    </CartContext.Consumer>
                                </Row>
                            
                        
                    </Container>
                
            </React.Fragment>
        );

}

export default ShoppingCartSection;