import React from 'react'
import AccordionComponent from '../utilities/AccordionComponent';
import Divider from '../utilities/Divider';


function FAQ(props) {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1">
                        <h2>FAQ</h2>
                        <AccordionComponent data={props.data}/>
                    </div>
                </div>
            </div>
            <Divider />
        </React.Fragment>
    )
}

export default FAQ;