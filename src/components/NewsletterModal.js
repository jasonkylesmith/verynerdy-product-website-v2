import React, { useState } from "react";
import { Col, Modal, Button, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';

const NewsletterModal = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <div>
            <Button color="primary" onClick={toggle}>{props.btnText}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                   <h3>Newsletter Sign-up</h3>
                </ModalHeader>
                <ModalBody className="collection-border">

                    <Form>
                        <FormGroup row>
                            <Col sm={12}>
                                <Input type="name" name="name" id="name" placeholder="Enter First Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={12}>
                                <Input type="email" name="email" id="email" placeholder="Enter Email" />
                            </Col>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <input type="checkbox" />{' '}
                                I agree to receive periodic emails from The Very Nerdy Clothing Company.
                            </Label>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={{ size: 3, offset: 9}} xs={{ size: 4, offset: 8}}>
                                <Button color="primary" size="sm"
                                    onClick={() => {
                                        // Insert code to handle newsletter sign-up
                                        toggle();
                                    }}>
                                    Let's Go!
                                </Button>
                            </Col>
                        </FormGroup>

                    </Form>


                </ModalBody>

            </Modal>
        </div>

    );
};


export default NewsletterModal;