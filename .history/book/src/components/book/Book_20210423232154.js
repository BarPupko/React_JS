/*********************
 * import libraries
 **********************/

import React from 'react';


/*********************
 * *Components
 *********************/

const Book = (props) => {
    return(
        <div className="book">
            <img></img>
            <p>{props.titleBook}</p>

        </div>
    );
}