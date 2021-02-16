import React, {Component} from 'react';
 
const Flash = ({id, name, short, onCardClickHandler}) => {
    return (
        <div data-value={name} onClick={onCardClickHandler} className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div data-value={name}>
                <p data-value={name}>{short}</p>
            </div>
        </div>
    );

}

export default Flash;