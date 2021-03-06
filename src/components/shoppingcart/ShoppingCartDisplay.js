import React from "react";
import { Col, Row, Button, Container } from "reactstrap";

function ShoppingCartDisplay({ items }) {
  // Render individual shopping cart items
  const cartItems = items.cart.cart.cart.map((item) => {
    /*     console.log(item.cartId); */
    return <ShoppingCartItem item={item} cart={items} key={item.cartId} />;
  });

  // Calculate the subtotal for the cart
  function calcSubtotal({ cart }) {
    let subtotal = 0;
    cart.forEach((item) => (subtotal += item.qtyPrice));
    return subtotal;
  }

  // Calculate the potential donation for the cart
  function calcDonation(cart) {
    return (calcSubtotal(cart) * 0.03).toFixed(2);
  }

  // If the first item in the cart array exists, display cart information
  if (items.cart.cart.cart[0]) {
    return (
      <React.Fragment>
        <Col xs={{ size: 12, offset: 0 }} className="mt-3">
          {cartItems}
        </Col>
        <Row className="cart-footer p-4 align-self-end">
          <Col xs={12} md={7} className="p-0">
            <Col xs={12} className="text-center text-md-left p-0">
              <h5>Subtotal: ${calcSubtotal(items.cart.cart)}</h5>
            </Col>
            <Col xs={12} className="text-center text-md-left p-0">
              <span className="small">
                Potential Donation: ${calcDonation(items.cart.cart)}
              </span>
            </Col>
          </Col>
          <Col xs={12} md={5} className=" text-center text-md-right p-0">
            <Button color="primary" className="btn mt-3 mt-md-0">
              Checkout
            </Button>
          </Col>
        </Row>
      </React.Fragment>
    );
    // Else display empty cart
  } else {
    return (
      <Col
        xs={{ size: 12, offset: 0 }}
        className="mt-3 h-75 empty-cart d-flex justify-content-center align-items-center"
      >
        <p>Your Shopping Cart is Empty</p>
        <p>
          <i className="fa fa-frown-o fa-lg ml-1"></i>
        </p>
      </Col>
    );
  }
}

function DisplayQty({ item, action }) {
  // Return item quantity display and adjusters
  return (
    <Col
      xs={{ order: 3, size: 6, offset: 3 }}
      md={{ order: 1, size: 4, offset: 0 }}
      className="text-center d-flex align-items-center justify-content-center"
    >
      <Col className="p-0">
        <Button
          onClick={() => {
            action.changeQuantity(item, "subtract", 1);
          }}
          className="qty-btn btn-sm p-1"
        >
          &minus;
        </Button>
      </Col>
      <Col className="p-0">
        <span className="px-2 qty-text"> {item.qty} </span>
      </Col>
      <Col className="p-0">
        <Button
          onClick={() => {
            action.changeQuantity(item, "add", 1);
          }}
          className="qty-btn btn-sm p-1"
        >
          &#43;
        </Button>
      </Col>
    </Col>
  );
}

function ShoppingCartItem({ item, cart }) {
  // Calculate price of the item * quantity of the item
  function calcPrice(price, qty) {
    return price * qty;
  }

  // Return the shopping cart item
  return (
    <React.Fragment>
      <Container className="cart-item">
        <Row>
          <Col xs={{ order: 3, size: 12 }} md={{ order: 1, size: 4 }}>
            <img
              src={item.imgPath}
              alt={item.imgAltText}
              className="img-fluid"
            />
          </Col>
          <Col xs={{ order: 1, size: 9 }} md={{ order: 2, size: 7 }}>
            <h5>{item.title}</h5>
            <h6>{item.subTitle}</h6>
            <p className="d-none d-md-block">{item.specText}</p>
            <p className="d-none d-md-block">{item.flavorText}</p>
          </Col>
          <Col
            xs={{ order: 2, size: 3 }}
            md={{ order: 3, size: 1 }}
            className="text-right m-0 p-0"
          >
            <Button
              className="no-style close"
              onClick={() => {
                cart.remove.removeFromCart(item);
              }}
            >
              <i className="fa fa-trash"></i>
            </Button>
          </Col>
        </Row>
        <Row>
          <DisplayQty item={item} action={cart.change} />
          <Col
            xs={{ order: 1, size: 9 }}
            md={{ order: 2, size: 6 }}
            className="d-flex align-items-center"
          >
            <span>{item.selectedDesign}</span>
          </Col>
          <Col
            xs={{ order: 2, size: 3 }}
            md={{ order: 3, size: 2 }}
            className="d-flex align-items-center justify-content-end"
          >
            <span className="price">${calcPrice(item.price, item.qty)}</span>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ShoppingCartDisplay;
