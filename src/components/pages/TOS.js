import React from 'react'
import Divider from '../utilities/Divider';

function TOS(props) {
    return (
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1">
                        <h2>Terms of Service</h2>
                        <ul className="list-unstyled">
                            <li><a href="#shipping">Fullfillment and Shipping</a></li>
                            <li><a href="#donations">Donations</a></li>
                            <li><a href="#refunds">Refunds and Returns</a></li>
                            <li><a href="#legit">Legitimacy of Business</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-10 offset-lg-1" id="shipping">
                        <h5>Fullfillment and Shipping</h5>
                        <p>Once we receive your order, it takes roughly 3-5 days for fullfillment. After that, shipping depends on our fullfillment partner but typically its another 5-7 days for shipping. We're happy to ship to anywhere in the USA and unfortunately we are unable to ship internationally at this time.</p>
                        <p>Please note, fullfillment and shipping times are completely dependant on our business partners. But if you have issues, please don't hesitate to reach out and we'll try to assist and make it right.</p>
                        <h6>Pre-Order</h6>
                        <p>Items purchased for pre-order are fullfilled before launch day, so when day 1 begins we ship your items out and you should receive them in 5-7 days.</p> 

                    </div>

                    <div className="col-12 col-lg-10 offset-lg-1" id="donations">
                        <h5>Donations</h5>
                        <p>When you purchase an item with us, we'd like to donate a portion of that sale to a charitable cause. You can see what cause(s) we're currently donating to here and you can always opt out by unchecking "I'd like a portion of my purchase to be donated." at checkout. The donations are a promise to donate portion of our sales to charitable causes and not a necessarily a contribution from you; for that reason, these amounts cannot be written off by you nor can we provide a discount in lieu of the donation.</p>
                    </div>

                    
                    <div className="col-12 col-lg-10 offset-lg-1" id="refunds">
                        <h5>Refunds and Returns</h5>
                        <p>If you have an issue with a received (or unreceived order), we'd love to make it right. Contact us as soon as you can and we'll discuss your options. We've laid out some of our general policies below.</p>
                        <h6>Wrong Items or Damaged on Arrival</h6>
                        <p>If you receive the wrong items or your items are damaged when you open them, contact us immediately so we can fix the issue. We'll send you a shipping label, you return the affected items to us, and we'll ship you replacement items.</p>
                        <h6>Packages Lost in Mail</h6>
                        <p>If your package was lost in the mail, please contact the mail carrier responsible for shipping your item for further assistance. Contact us and we can let you know what carrier that was. We, unfortunately, cannot provide refunds in these situations.</p>
                        <h6>Worn and Washed Damage, Ill-fitting Items</h6>
                        <p>We currently cannot refund items that have been worn or washed, damaged due to being worn or washed, or items received that do not fit as expected. For items that don't fit as expected, please contact us and we can try to facilitate an exchange for a better fitting size.</p>
                        <h6>Funds Refunded</h6>
                        <p>Refunded funds may not be immediately available to your personal accounts. Please contact your banking or credit institution for further assistance.</p>
                    </div>

                    <div className="col-12 col-lg-10 offset-lg-1" id="legit">
                        <h5>Ligitimacy of Business</h5>
                        <p>This site is a portfolio project for Jason Smith and as such not a functioning / real clothing business.</p>
                    </div>


                </div>
                

            </div>
            <Divider />
        </React.Fragment>
    )
}

export default TOS;