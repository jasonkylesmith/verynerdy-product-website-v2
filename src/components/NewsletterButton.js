import React from 'react';

class NewsletterButton extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <button className="btn btn-primary btn-sm mt-4" type="button" id={this.props.btnId}>{this.props.btnText}</button>
        )
    }
}

export default NewsletterButton;