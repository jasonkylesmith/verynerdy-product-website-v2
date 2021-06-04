import React from 'react';
import { Card, CardFooter, CardBody, Row, Col } from 'reactstrap';
import SocialButton from '../utilities/SocialButton';
import ProductModal from './ProductModal';

class ProductCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            openModal: false
        }

        // Binds toggleModal to refer to this component
        this.toggleModal = this.toggleModal.bind(this);
    }

    // Toggles modal
    toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        });
    }

    render(){
        return (
            <Card className="card col-5 col-lg-3 mx-md-1 mt-md-5 mt-5 p-0" onClick={this.toggleModal}>
                <img src={this.props.product.imgPath} alt="The Big Three Special Edition Darkmode Cotton Hat" className="card-img-top"></img>
                <CardBody className="card-body collection-border px-1 px-md-3 mb-2">
                    <h5 className="card-title mb-0">{this.props.product.title}</h5>
                    <h6 className="mt-0">{this.props.product.subTitle}</h6>
                    <p className="card-text d-none d-lg-block">{this.props.product.flavorText}</p>
                </CardBody>
                <CardFooter className="card-footer pt-2">
                    <Row className="row">
                        <Col className="col-12 col-sm-12 text-center text-sm-right">
                            <h5 className="price">${this.props.product.price}</h5>
                        </Col> 
                    </Row>
                </CardFooter>
                <ProductModal product={this.props.product} toggle={this.state.openModal} toggleModal={this.toggleModal} />
            </Card>
            
        )
    }
}

export default ProductCard;