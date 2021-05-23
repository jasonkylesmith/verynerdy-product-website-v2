import React from 'react';
import NewsletterModal from './NewsletterModal';

function NewsletterButton(props) {
    return (
            <div>
                {/* <button className="btn btn-primary btn-sm mt-4" type="button" id={this.props.btnId} title="newslettermodal" body="please work" show onClick={NewsletterModal}>{this.props.btnText}</button> */}
                <NewsletterModal />
            </div>
            )
}


export default NewsletterButton;