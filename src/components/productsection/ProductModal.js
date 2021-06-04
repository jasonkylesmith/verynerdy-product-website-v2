import React, { useState } from "react";
import { CartContext } from '../main/ShoppingCartContext';
import { Col, Row, Modal, Button, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';


const ProductModal = (props) => {
    
    // State for modal
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
        toggleModal();
    }

    // Toggles modal
    const toggleModal = () => {
        props.toggleModal();
    }

    // State for design options
    const [design, setDesign] = useState({
        selectedDesign: props.product.options[0],
    });

    // Handles changing inputs
    const handleInputChange = (event) => {
        // Gets value of selection
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        // Sets value of selection to state
        setDesign({
            [name]: value
        });
    }

    // Creates list of options by mapping through data from PRODUCT_DATA passed via props
    const options = props.product.options.map(option => {
        return (
            <option key={option} value={option}>
                {option}
            </option>
        );
    })

    return (
        <div>          
            <Modal isOpen={props.toggle} size="lg" centered toggle={toggle}>
                <ModalHeader className="p-4" toggle={toggle}>
                   <span className="product-header d-block">{props.product.title}</span>
                   <span className="product-subheader">{props.product.subTitle}</span>
                </ModalHeader>
                <ModalBody className="collection-border p-lg-4 px-4 py-2">
                    <Row>
                        <Col xs="12" lg="4" className="text-center">
                            <img src={props.product.imgPath} alt={props.product.imgAltText} className="img-fluid"/>
                        </Col>
                        <Col xs="12" lg="8">
                            <p>{props.product.flavorText}</p>
                            <p>{props.product.specText}</p>
                        
                            <Form>
                                <FormGroup row>
                                    <Col xs="12">
                                        <Label for="orderDesign">Design:</Label>
                                
                                        <Input type="select" name="selectedDesign" id="selectedDesign"
                                            value={design.selectedDesign}
                                            onChange={handleInputChange}>
                                            <option disabled defaultValue>Select</option>
                                            {options}
                                        </Input>
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
                                        props.toggleModal()
                                    }}>
                                        Continue Shopping
                                    </Button>
                                
                                <CartContext.Consumer>
                                            {context => (
                                                <Button size="sm" color="success" onClick={() => {
                                                    context.add.addToCart({...props.product, qty: 1, selectedDesign: design.selectedDesign})
                                                    props.toggleModal()
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