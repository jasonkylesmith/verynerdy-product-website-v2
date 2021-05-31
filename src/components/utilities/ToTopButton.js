import React from 'react';

class ToTopButton extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="top-button">
                <a href="/home#"><i className="fa fa-chevron-up p-1 mr-1 mb-2"></i></a>
            </div>
        )
    }

}

export default ToTopButton;