import React from 'react'
import AccordionComponent from './AccordionComponent';


function FAQ(props) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                    <h2>FAQ</h2>
                    <AccordionComponent data={props.data}/>
                </div>
            </div>
        </div>
    )
}

export default FAQ;