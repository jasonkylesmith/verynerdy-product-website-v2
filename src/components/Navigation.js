import React from 'react';
import NavigationItem from './NavigationItem';

class Navigation extends React.Component {
    constructor(props){
        super(props);

        if(this.props.navType === "standard"){
            this.state = {
                navClasses: "navbar navbar-expand col pt-0 pr-0 d-none d-md-block",
                ulClasses: "navbar-nav justify-content-end",
                navId: ""
            }
        } else {
            this.state = {
                navClasses: `collapse navbar-expand navbar-collapse d-flex justify-content-center p-0`,
                ulClasses: "navbar-nav",
                navId: "mobileNavbar"
            }
        }
    }



    render(){
        /* const classes = this.state.navClasses + " " + this.props.showMenu; */

        const classes = `${this.state.navClasses} ${this.props.showMenu}`;
        return (
            <nav key={this.props.navType} className={classes} id={this.state.navId}>
                <ul className={this.state.ulClasses}>
                    <NavigationItem target="pre-order" />
                    <NavigationItem target="our story" />
                    
                </ul>
            </nav>
        )
    }
}

export default Navigation;