import React from 'react';
import Navigation from './Navigation';


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mobileMenu: false,
            hamDivClass: "hamburger-wrapper d-md-none",
            hamSpanClass: "hamburger",
        };
    }

    toggleMobileMenu(){
        console.log("Hamburger Menu Clicked");
        if(this.state.mobileMenu === true) {
            // Hiding mobile menu
            this.setState({
                mobileMenu: false,
                hamDivClass: "hamburger-wrapper d-md-none",
                hamSpanClass: "hamburger",
            });

        } else {

            // Showing mobile menu
            this.setState({
                mobileMenu: true,
                hamDivClass: "hamburger-wrapper d-md-none ham-menu-on",
                hamSpanClass: "hamburger ham-menu-on",
            });

        }
    }

    render(){
        console.log("Header rendered: " + this.state.show);
        return (
                <header className="pb-2 pb-lg-3 pt-3 sticky-top bg-light" id="header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-5 offset-1 pl-0">
                                <a href="index.html">
                                    <img src="/assets/verynerdylogo.png" alt="" className="img-fluid"></img>
                                </a>
                            </div>
                            <div className="col-5 text-right pt-2 pr-0">
                                <nav className="navbar navbar-expand-md hidden-md navbar-light px-0 d-md-none">
                                    <div className="container p-0 justify-content-end">
                                        <div className={this.state.hamDivClass} 
                                            onClick={() => {
                                            this.toggleMobileMenu();
                                        }} 
                                        data-toggle="collapse" data-target="#mobileNavbar">
                                            <span className={this.state.hamSpanClass}>
                                            </span>
                                        </div>
                                        <Navigation navType="mobile" />
                                    </div>
                                </nav>
                                <Navigation navType="standard" />
                            </div>
                        </div>
                    </div>
                </header>
            
        )
    }
}


export default Header;