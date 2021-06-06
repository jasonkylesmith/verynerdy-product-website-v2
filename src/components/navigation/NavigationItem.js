import React from 'react';
import { Link } from 'react-router-dom';


class NavigationItem extends React.Component {
    constructor(props){
        super(props);
    }

    

    render(){
        const hrefText = `${process.env.PUBLIC_URL}/home#${this.props.target.replace(/[^a-zA-Z0-9]/g, '')}`;

        return (
            <li className="nav-item">
                {/* <a href={hrefText} className="nav-link">{this.props.target}</a> */}
                <Link to={`${hrefText}`} className="nav-link">{this.props.target} </Link>
            </li>
        )
    }
}

export default NavigationItem;