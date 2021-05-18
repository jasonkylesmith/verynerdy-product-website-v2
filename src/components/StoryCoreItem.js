import React from 'react';

class StoryCoreItem extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="media col-12 col-lg-4 offset-lg-0 px-4 p-2 px-lg-3 mt-3 mt-lg-3 align-items-center">
                <img src={this.props.story.imgSrc} alt={this.props.story.altText}></img>
                <div className="media-body align-self-center">
                    <h6 className="pl-3">{this.props.story.mainText}</h6>
                </div>
            </div>    
        )
    }

}

export default StoryCoreItem;