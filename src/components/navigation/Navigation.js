import React from 'react';
import NavigationItem from './NavigationItem';
import ShoppingCartIcon from '../shoppingcart/ShoppingCartIcon';


class Navigation extends React.Component {
    constructor(props){
        super(props);

        // If navType is standard, include all the classes for the normal full page nagivation
        if(this.props.navType === "standard"){
            this.state = {
                navClasses: "navbar navbar-expand col pt-0 pr-0 d-none d-md-block",
                ulClasses: "navbar-nav justify-content-end",
                navId: ""
            }
        // Otherwise, include all the classes for the mobile navigation
        } else {
            this.state = {
                navClasses: `collapse navbar-expand navbar-collapse d-flex justify-content-center p-0`,
                ulClasses: "navbar-nav align-items-center",
                navId: "mobileNavbar"
            }
        }
    }



    render(){

        const classes = `${this.state.navClasses}`;
        return (
            <nav key={this.props.navType} className={classes} id={this.state.navId}>
                <ul className={this.state.ulClasses}>
                    <NavigationItem target="pre-order" />
                    <NavigationItem target="our story" />
                    <ShoppingCartIcon />
                </ul>
            </nav>
        )
    }
}

export default Navigation;