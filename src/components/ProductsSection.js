import React from 'react';
import ProductCard from './ProductCard'
import { PRODUCT_DATA } from '../shared/product-data';

class ProductsSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: PRODUCT_DATA
        }
    }

    render(){
        const cards = this.state.products.map(product => {
            return (
                <ProductCard product={product} />
            )
        })


        return (
            <main className="container my-4 px-5" id="preorder">
                <div className="text-center">
                    <h2 className="">Behold! Our Exclusive Pre-Order Collection</h2>
                    <p className="text-muted">Some of these pre-order designs will only be offered for a limited time! Once we launch, we're giving them the snap and they go the way of the blip!</p>
                </div>
                <div className="row justify-content-around">

                    {cards}
                    

                    {/* <ProductCard product={this.state.products[0]} /> */}


                </div>
            </main>
        )
    }
}

export default ProductsSection;