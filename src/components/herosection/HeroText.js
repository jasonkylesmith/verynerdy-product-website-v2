import React from 'react';
import NewsletterModal from '../newsletter/NewsletterModal';

class HeroText extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="text-center">
                <h2 className="">This is some seriously <span className="text-primary font-italic">nerdy</span> clothing.</h2>
                <h5 className="">It's coming soon and you're going to love it.</h5>
                <NewsletterModal btnText="Want To Stay In-The-Know?" />
            </div>  
        )
    }

}

export default HeroText;













