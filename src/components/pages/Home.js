import React from 'react';
import HeroSection from '../herosection/HeroSection';
import ProductsSection from '../productsection/ProductsSection';
import StorySection from '../storysection/StorySection';
import Divider from '../utilities/Divider';
import ToTopButton from '../utilities/ToTopButton';




function Home(props) {
    
        return (
            <React.Fragment>
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
