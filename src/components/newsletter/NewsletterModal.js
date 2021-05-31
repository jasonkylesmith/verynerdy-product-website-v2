import React, { useState } from "react";
import { Modal, Button, ModalHeader, ModalBody } from 'reactstrap';
import NewsletterForm from './NewsletterForm';

const NewsletterModal = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <div>
            <Button color="primary" onClick={toggle}>{props.btnText}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                   Newsletter Sign-up
                </ModalHeader>
                <ModalBody className="collection-border">
                    <NewsletterForm toggle={toggle} />
                </ModalBody>
            </Modal>
        </div>

    );
};


export default NewsletterModal;