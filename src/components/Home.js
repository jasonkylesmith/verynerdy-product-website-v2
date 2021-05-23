import React from 'react';
import HeroSection from './HeroSection';
import ShoppingCartHandler from './ShoppingCartHandler';
import StorySection from './StorySection';
import Divider from './Divider';
import ToTopButton from './ToTopButton';


function Home(props) {
    
        return (
            <React.Fragment>
                <HeroSection />
                <Divider />
                <ShoppingCartHandler />
                <Divider />
                <StorySection />
                <Divider />
                <ToTopButton />
            </React.Fragment>
        )
    }

export default Home;
