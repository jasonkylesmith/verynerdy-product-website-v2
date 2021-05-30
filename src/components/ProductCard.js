import React from 'react';
import SocialButton from './SocialButton';
import ProductModal from './ProductModal';

class ProductCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            openModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        });
        console.log(this.state.openModal);
    }

    render(){
        return (
            <div className="card col-5 col-lg-3 mx-md-1 mt-md-5 mt-5 p-0" onClick={this.toggleModal}>
                <img src={this.props.product.imgPath} alt="The Big Three Special Edition Darkmode Cotton Hat" className="card-img-top"></img>
                <div className="card-body collection-border px-1 px-md-3">
                    <h5 className="card-title mb-0">{this.props.product.title}</h5>
                    <h6 className="mt-0">{this.props.product.subTitle}</h6>
                    <p className="card-text d-none d-lg-block">{this.props.product.flavorText}</p>
                </div>
                <div className="card-footer pt-2">
                    <div className="row">
                        <div className="col-12 col-sm-12 text-center text-sm-right">
                            {/* <button className="btn btn-outline-success btn-sm order-button" type="button" data-product="0" id="orderButton1"><i className="fa fa-cart-plus"></i></button> */}
                            <h5 className="price">${this.props.product.price}</h5>
                            
                        </div>
                        
                    </div>
     
                </div>
                <ProductModal product={this.props.product} toggle={this.state.openModal} action={this.toggleModal} />
            </div>
            
        )
    }
}

export default ProductCard;