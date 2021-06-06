import React from 'react';
import { Link } from 'react-router-dom';

class ToTopButton extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="top-button">
                {/* <a href={`${process.env.PUBLIC_URL}/home#`}><i className="fa fa-chevron-up p-1 mr-1 mb-2"></i></a> */}
                <Link to={`${process.env.PUBLIC_URL}/home#`}><i className="fa fa-chevron-up p-1 mr-1 mb-2"></i></Link>
            </div>
        )
    }

}

export default ToTopButton;