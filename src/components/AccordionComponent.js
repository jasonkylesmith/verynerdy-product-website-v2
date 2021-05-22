import React from 'react';
import { FAQ_DATA } from '../shared/faq-data';



function AccordionComponent(props){

    const cards = props.data.map(card => {
        return (
            <div className="card">
                <div className="card-header" id={`heading${card.id}`} data-toggle="collapse" data-target={`#collapse${card.id}`}>
                    <h5>
                        {card.headerText}
                    </h5>
                </div>
                <div className="collapse" id={`collapse${card.id}`}>
                    <div className="card-body">
                        <p>
                            {card.bodyText}
                        </p>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <div className="faq" id="accordion">
            {cards}
        </div>
    )
}

export default AccordionComponent;