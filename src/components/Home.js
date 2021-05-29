import React from 'react';
import HeroSection from './HeroSection';
import ProductsSection from './ProductsSection';
import StorySection from './StorySection';
import Divider from './Divider';
import ToTopButton from './ToTopButton';




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
