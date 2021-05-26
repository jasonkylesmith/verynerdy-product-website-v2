import React, { useState,useContext } from "react";
import { CartContext } from './ShoppingCartContext';
import { Col, Row, Modal, Button, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';




const ProductModal = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const options = props.product.options.map(option => {
        return (
            <option key={option} value={option}>
                {option}
            </option>
        );
    })

    const cart = useContext(CartContext);

    return (
        <div>
            <Button color="success" onClick={toggle}><i className="fa fa-cart-plus"></i></Button>
            <Modal isOpen={modal} size="lg" centered toggle={toggle}>
                <ModalHeader className="p-4" toggle={toggle}>
                   {props.product.title}
                   <br />
                   <span className="small">{props.product.subTitle}</span>
                </ModalHeader>
                <ModalBody className="collection-border p-4">
                    <Row>
                        <Col xs="12" lg="6">
                            <img src={props.product.imgPath} className="img-fluid"/>
                        </Col>
                        <Col xs="12" lg="6">
                            <p>{props.product.flavorText}</p>
                            <p>{props.product.specText}</p>
                        
                            <Form>
                                <FormGroup row>
                                    <Col xs="12" className="mb-3">
                                        <Label for="orderDesign">Design:</Label>
                                
                                        <Input type="select" name="orderDesign" id="orderDesign">
                                            <option disabled defaultValue>Select</option>
                                            {options}
                                        </Input>
                                    </Col>
                                    <Col xs={{size: 10, offset:1}}>
                                        <Label check>
                                            <Input type="checkbox" it="terms" name="terms" />{'I agree to the terms of service and will verify my shipping address at checkout.'}
                                        </Label>
                                    </Col>
                                    <Col xs={{size: 10, offset:1}}>
                                        <Label check>
                                            <Input type="checkbox" it="donate" name="donate" />{'I\'d like you to send me information on the organization you\'re donating to next!'}
                                        </Label>
                                    </Col>
                                    <Col className="text-center mt-3" xs="12">
                                        <CartContext.Consumer>
                                            {context => (
                                                <Button size="sm" color="success" onClick={() => {
                                                    context.add.addToCart({test2:"working"})
                                                }}>Add to Cart</Button>
                                                
                                                
                                            )}
                                        </CartContext.Consumer>
                                    </Col>          
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Form>
                        <FormGroup row>
                            <Col className="text-center" xs="12">
                                <Button size="sm" color="primary" outline className="m-1">Continue Shopping</Button>
                                <Button size="sm" color="primary" className="m-1">Checkout</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalFooter>

            </Modal>
        </div>

    );
};


export default ProductModal;