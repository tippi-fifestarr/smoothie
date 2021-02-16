import React from 'react';
import Flashers from './Flashers';

const FlashList = ( {SRS, onCardClickHandler}) => {
    // when doing loops in React, remember to give it a unique key
    return (
        <div>
        {/*     map is the loop */}
            {SRS.map((flashcard, i) =>{
        return  (
            <Flashers 
                onCardClickHandler={onCardClickHandler}
                key={i} 
                id={SRS[i].id} 
                name={SRS[i].name} 
                short={SRS[i].short}
            />
        );
    })}
        </div>
    )
}

export default FlashList;