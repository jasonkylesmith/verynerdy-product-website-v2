import React from 'react';
import HeroText from './HeroText';
import HeroCarousel from './HeroCarousel';

class HeroSection extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (

            <main className="container-fluid mb-0 hero-section">
                <div className="row hero-row hero-bg align-items-center d-lg-none">
                    <div className="col text-light px-5">
                        <HeroText />
                    </div>
                </div>
                <div className="row hero-row align-items-center d-none d-lg-block">
                    <div className="col p-0">
                        <HeroCarousel />
                        <div className="hero-text hidden-xs">
                            <HeroText />
                        </div>
                    </div>
                </div>
            </main>


        )
    }
}

export default HeroSection;