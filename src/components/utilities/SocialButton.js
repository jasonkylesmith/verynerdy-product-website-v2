import React from 'react';


function SocialButton ({shareType}) {
    let classes = "fa ";
    switch(shareType) {
        case "facebook":
            classes += "fa-facebook-square";
            break;
        case "twitter":
            classes += "fa-twitter-square";
            break;
        case "share":
            classes += "fa-share-alt-square";
            break;
        default:
    }

    return (
        <i className={classes} title={`Share on ${shareType}`}></i>
    )
}


export default SocialButton

/* 
MORE READING
https://css-tricks.com/simple-social-sharing-links/ 

Instead of importing keyword, send in object from social-share-links.js array/object
*/