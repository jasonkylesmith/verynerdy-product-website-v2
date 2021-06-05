import React from 'react';


class NavigationItem extends React.Component {
    constructor(props){
        super(props);
    }

    

    render(){
        const hrefText = `/home#${this.props.target.replace(/[^a-zA-Z0-9]/g, '')}`;

        return (
            <li className="nav-item">
                <a href={hrefText} className="nav-link">{this.props.target}</a>
            </li>
        )
    }
}

export default NavigationItem;