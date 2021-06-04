import React, { createRef } from 'react';


class OutsideClickHandler extends React.Component {
    wrapperRef = createRef();

    componentDidMount() {
        document.addEventListener('mouseup', this.handleClickOutside);
        document.addEventListener('keyup', this.handleEscapePress);

    }

    componentWillMount(){
        document.removeEventListener('mouseup', this.handleClickOutside);
        document.addEventListener('keyup', this.handleEscapePress);
    }

    

    handleClickOutside = (event) => {
        if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target) && this.props.test){
            this.props.onOutsideClick();
        }
    }

    handleEscapePress = (event) => {
        if (this.props.showCart && event.key === "Escape") {
            this.props.onOutsideClick();
        }
    }


    render() {
        return (
            <div ref={this.wrapperRef}>
                {this.props.children}
            </div>
        )
        
    }
}

export default OutsideClickHandler;