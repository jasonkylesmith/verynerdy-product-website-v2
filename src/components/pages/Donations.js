import React from 'react'
import Divider from '../utilities/Divider';

function Donations(props) {
    return (
        <React.Fragment>
            <div className="container mt-5" id="donation">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-5">
                        <h2>
                            Our Next Donation goes to...
                        </h2>
                        <h1>
                            Kode With Klossy
                        </h1>
                        <p>
                            Kode With Klossy creates multiple learning experiences and opportunities for young women and non-binary individuals.
                        </p>
                        <a type="button" className="btn btn-primary mb-3" href="https://kodewithklossy.com" target="_blank" rel="noreferrer">
                            Learn More
                        </a>
                        <p className="small">
                            Our next donation target date is October 1st, 2021. 
                        </p>
                        <img src="./assets/donation-thankyou-crop.jpg" alt="'Thank You' spelled out with toy bloods and a yellow heart in between" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <h4>
                            How It Works
                        </h4>
                        <p>
                            After each and every order, we set aside 10% of our profits and keep them somewhere safe. Once the 3-month cycle ends, we take all of that money and donate it to our next charitable cause on the list. It's just as simple as that.
                        </p>
                        <h4>
                            Want to get more involved?
                        </h4>
                        <p>
                            Make a post on Twitter with the hashtag #verynerdydonations and make a pact to donate with us! Promise to match what we donate (which we'll reveal here when the time comes), promise a couple of bucks, or just spread the word. When we make our donation, we'll call on everyone who used that hashtag to poney up and donate with us.
                        </p>
                        <h4>
                            Why do we do it?
                        </h4>
                        <p>
                            We think that everyone has the responsibility to give back to the communities, organizations, and causes that do good for others in the world. Big or small, every business that can should strive to do better and if by doing that we can convince just one other person or entity to do the same, well maybe we've just made the world a slightly better place to be.
                        </p>
                    </div>
                </div>
            </div>
            <Divider />
        </React.Fragment>
    )
}

export default Donations;