import React, { useContext } from 'react';
import ShoppingCartSection from './ShoppingCartSection';
import HeroSection from './HeroSection';
import ProductsSection from './ProductsSection';
import StorySection from './StorySection';
import Divider from './Divider';
import ToTopButton from './ToTopButton';
import { CartContext } from './ShoppingCartContext';



function Home(props) {
    
        return (
            <React.Fragment>
                <CartContext.Consumer>
                    {context => (
                        <ShoppingCartSection show={context.cart.cart.showCart} />
                    )}
                </CartContext.Consumer>
                <HeroSection />
                <Divider />
                <ProductsSection />
                <Divider />
                <StorySection />
                <Divider />
                <ToTopButton />
            </React.Fragment>
        )
    }

export default Home;
