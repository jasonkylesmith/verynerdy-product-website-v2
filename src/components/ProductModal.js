import React, { useState } from "react";
import { CartContext } from './ShoppingCartContext';
import { Col, Row, Modal, Button, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';


const ProductModal = (props) => {
    
    
    
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
        toggleModal();
    }

    const toggleModal = () => {
        props.action();
        console.log(props);
    }

    const options = props.product.options.map(option => {
        return (
            <option key={option} value={option}>
                {option}
            </option>
        );
    })

    const [design, setDesign] = useState({
        selectedDesign: props.product.options[0],
    });

    const handleInputChange = (event) => {
        console.log("handleInputChange Called");
        
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(`Target: ${target}, Name: ${name}, Value: ${value}`);

        setDesign({
            [name]: value
        });
    }

    return (
        <div>
            {/* <Button color="success" onClick={toggle} className="btn-sm">Add <i className="fa fa-cart-plus"></i></Button> */}
          
            <Modal isOpen={props.toggle} size="lg" centered toggle={toggle}>
                <ModalHeader className="p-4" toggle={toggle}>
                   <span className="product-header d-block">{props.product.title}</span>
                   <span className="product-subheader">{props.product.subTitle}</span>
                </ModalHeader>
                <ModalBody className="collection-border p-4">
                    <Row>
                        <Col xs="12" lg="6">
                            <img src={props.product.imgPath} alt={props.product.imgAltText} className="img-fluid"/>
                        </Col>
                        <Col xs="12" lg="6">
                            <p>{props.product.flavorText}</p>
                            <p>{props.product.specText}</p>
                        
                            <Form>
                                <FormGroup row>
                                    <Col xs="12" className="mb-3">
                                        <Label for="orderDesign">Design:</Label>
                                
                                        <Input type="select" name="selectedDesign" id="selectedDesign"
                                            value={design.selectedDesign}
                                            onChange={handleInputChange}>
                                            <option disabled defaultValue>Select</option>
                                            {options}
                                        </Input>
                                    </Col>
                                    <Col xs={{size: 10, offset:1}}>
                                        <Label check>
                                            <Input type="checkbox" id="terms" name="terms" />{'I agree to the terms of service and will verify my shipping address at checkout.'}
                                        </Label>
                                    </Col>
                                    <Col xs={{size: 10, offset:1}}>
                                        <Label check>
                                            <Input type="checkbox" id="donate" name="donate" />{'I\'d like you to send me information on the organization you\'re donating to next!'}
                                        </Label>
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
                                <Button size="sm" color="primary" outline className="m-1"
                                    onClick={() => {
                                        props.action()
                                    }}>
                                        Continue Shopping
                                    </Button>
                                
                                <CartContext.Consumer>
                                            {context => (
                                                <Button size="sm" color="success" onClick={() => {
                                                    context.add.addToCart({...props.product, qty: 1, selectedDesign: design.selectedDesign})
                                                    props.action()
                                                }}>Add to Cart</Button>
                                                
                                                
                                            )}
                                        </CartContext.Consumer>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalFooter>

            </Modal>
        </div>

    );
};


export default ProductModal;