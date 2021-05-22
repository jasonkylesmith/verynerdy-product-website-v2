import React from 'react';
import StoryCoreItem from './StoryCoreItem';
import { STORY_DATA } from '../shared/story-data';

class StorySection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stories: STORY_DATA
        }
    }

    render(){
        const stories = this.state.stories.map(story => {
            return (
                <StoryCoreItem key={story.id} story={story} />
            )
        })


        return (
            <div className="container my-4" id="ourstory">
                <div className="text-center">
                    <h2 className="">This is who we are...</h2>
                    <div className="row">
                        <div className="order-2 order-lg-1 col-6 col-lg-3 about-left mt-lg-4 pl-lg-5">
                            <h4>Jason</h4>
                            <h6>Jack-of-all-Trades</h6>
                            <p>As a lifetime member of the nerd club, nothing feels better than being able to channel that into creative endevours and sharing that passion with others. I love making these designs, I love what they represent, and I hope you love them too!</p>
                        </div>
                        <div className="order-1 order-lg-2 col-12 col-lg-6 py-3">               
                                <img src="/assets/aboutus8.jpg" alt="The Founders" className="img-fluid team-img"></img>
                        </div>
                        <div className="order-3 order-lg-3 col-6 col-lg-3 about-right mt-lg-4 pr-lg-5">
                            <h4>Sarah</h4>
                            <h6>The Motivator</h6>
                            <p>To me, being a nerd is all about being in a space where I can be who I am. It doesn't matter your hobbies, your kinks, your orientations, etc. Come as you are and that's what this brand represents. I hope you feel the same when you wear our clothes.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <h2 className="text-center mb-n2">...and how we'll continue to be.</h2>
                    </div>
                        
                    {stories}

                    
                    
                </div>
            </div>
        )
    }
}

export default StorySection;